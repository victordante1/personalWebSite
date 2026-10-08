/* ==========================================================================
   Victor Dante | Portfolio
   1 Navbar que some gradualmente   2 Cards arrastáveis (home)   3 Formulário
   4 Foto do hero com transformação livre   5 Texto que embaralha (duplo clique)
   6 Identidade da página About (riscar e mover)
   7 Navbar: marcador da página atual desliza entre os itens
   8 Texto da home sendo digitado
   ========================================================================== */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  /* 1. NAVBAR ------------------------------------------------------------ */
  // A barra é fixa e vai perdendo opacidade conforme o centro da tela se
  // aproxima do meio da página. Ajuste os valores abaixo para mudar o ritmo.
  function initNav() {
    const nav = document.querySelector("[data-nav]");
    if (!nav) return;

    const FADE_START = 0.25; // progresso da página em que começa a sumir
    const FADE_END = 0.375; // já sumiu por completo (trecho de fade = 12,5% da página)
    const SHOW_AGAIN_ON_SCROLL_UP = false; // true = volta ao rolar para cima

    let lastY = window.scrollY;
    let goingUp = false;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      if (y !== lastY) goingUp = y < lastY;
      lastY = y;

      // Em páginas curtas, usa ao menos 2 alturas de tela como referência
      const total = Math.max(document.documentElement.scrollHeight, window.innerHeight * 2);
      const progress = (y + window.innerHeight / 2) / total;

      let fade = clamp((progress - FADE_START) / (FADE_END - FADE_START), 0, 1);
      if (SHOW_AGAIN_ON_SCROLL_UP && goingUp) fade = 0;

      nav.style.opacity = String(1 - fade);
      nav.style.transform = fade ? `translateY(${-fade * 14}px)` : "";
      nav.style.pointerEvents = fade > 0.9 ? "none" : "";
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  /* 2. CARDS ARRASTÁVEIS ------------------------------------------------- */
  // Arrasta e solta pela página inteira. O card mantém o lugar onde foi solto.
  // Mouse/caneta: qualquer parte do card. Toque: só a imagem (o resto rola a página).
  // Teclado: foco no card + setas (Shift move mais rápido).
  function initDraggableCards() {
    const cards = Array.from(document.querySelectorAll("[data-drag]"));
    if (!cards.length) return;

    const THRESHOLD = 5; // px antes de virar arrasto (preserva o clique no link)
    const EDGE = 80; // zona da borda da tela que rola a página sozinha
    const MAX_SCROLL = 18;
    const KEY_STEP = 16;
    // Raio do "ímã" em volta de cada slot VAZIO (em larguras de card): o próprio slot do card
    // ou um slot cujo card está solto por aí. Dentro dele o card é puxado para o tracejado e,
    // se soltar ali, encaixa. Slots ocupados não atraem nem aceitam: o card só fica por cima.
    const MAGNET_RATIO = 0.5;
    const SLOT_TEXT = "cool project here";

    // Cada card ganha um "slot" no grid: um contorno tracejado, no formato do card,
    // que fica no lugar de origem e só aparece quando o card está fora dele.
    cards.forEach((card) => {
      const slot = document.createElement("div");
      slot.className = "card-slot";
      const ghost = document.createElement("div");
      ghost.className = "card-slot__ghost";
      ghost.setAttribute("aria-hidden", "true");
      ghost.textContent = SLOT_TEXT;
      card.parentNode.insertBefore(slot, card);
      slot.append(ghost, card);
    });
    const homeSlot = new Map(cards.map((card) => [card, card.parentElement]));

    // A animação de entrada reiniciaria ao trocar o card de slot: depois que ela
    // termina, ela é desligada (classe is-settled)
    cards.forEach((card) =>
      card.addEventListener("animationend", (e) => e.target === card && card.classList.add("is-settled"))
    );

    const states = new Map(
      cards.map((card) => [card, { x: 0, y: 0, r: 0, tilt: 0, fold: 0, cx: -1, cy: -1, R: 0 }])
    );
    const CORNERS = ["peel-tl", "peel-tr", "peel-bl", "peel-br"];
    let zTop = 20;

    // Em telas de 1100px ou menos o arrasto fica desligado: os cards voltam ao
    // lugar, deixam de ser focáveis como "arrastáveis" e as setas não movem nada.
    const noDrag = window.matchMedia("(max-width: 1100px)");
    const original = new Map(
      cards.map((card) => [
        card,
        { tabindex: card.getAttribute("tabindex"), described: card.getAttribute("aria-describedby") },
      ])
    );

    // Geometria da dobra. Coordenadas locais (u, v) saem do canto agarrado e correm
    // pelas duas bordas. A aba é o espelho, na linha da dobra, do pedaço do card que
    // foi levantado, inclusive o arredondado do canto original (por isso a ponta da
    // aba é redonda e não pontuda).
    const peelShapes = (sx, sy, c, W, H, R) => {
      const M = Math.max(c, R) + 1;
      const base = [[M, 0], [R, 0]];
      for (let i = 1; i <= 10; i++) {
        const a = (i / 10) * (Math.PI / 2);
        base.push([R - R * Math.sin(a), R - R * Math.cos(a)]);
      }
      base.push([0, M], [M, M]);
      const cut = [];
      for (let i = 0; i < base.length; i++) {
        const a = base[i];
        const b = base[(i + 1) % base.length];
        const fa = a[0] + a[1] - c;
        const fb = b[0] + b[1] - c;
        if (fa <= 0) cut.push(a);
        if ((fa < 0 && fb > 0) || (fa > 0 && fb < 0)) {
          const t = fa / (fa - fb);
          cut.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
        }
      }
      const f = (n) => `${n.toFixed(1)}px`;
      const flap = cut.map(([u, v]) => {
        const fu = c - v;
        const fv = c - u;
        return `${f(sx < 0 ? fu : c - fu)} ${f(sy < 0 ? fv : c - fv)}`;
      });
      const body = [[c, 0], [W, 0], [W, H], [0, H], [0, c]].map(
        ([u, v]) => `${f(sx < 0 ? u : W - u)} ${f(sy < 0 ? v : H - v)}`
      );
      return { card: `polygon(${body.join(", ")})`, flap: `polygon(${flap.join(", ")})` };
    };

    const render = (card) => {
      const s = states.get(card);
      // Eixo na diagonal do canto agarrado: ele sobe em direção a quem olha, o oposto fica colado
      const lift = s.tilt
        ? ` perspective(900px) rotate3d(${-s.cy}, ${s.cx}, 0, ${-s.tilt}deg)`
        : "";
      card.style.transform =
        s.x || s.y || s.r || s.tilt
          ? `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.r}deg)${lift}`
          : "";
      card.style.setProperty("--fold", `${s.fold}px`);
      const peeling = s.fold > 1;
      card.classList.toggle("is-peeling", peeling);
      if (peeling) {
        if (!s.R) s.R = parseFloat(getComputedStyle(card).borderTopLeftRadius) || 14;
        const shape = peelShapes(s.cx, s.cy, s.fold, card.offsetWidth, card.offsetHeight, s.R);
        card.style.clipPath = shape.card;
        card.style.setProperty("--flap", shape.flap);
      } else {
        card.style.clipPath = "";
      }
      const slot = card.parentElement;
      if (s.x || s.y) slot.classList.add("is-away");
      else slot.classList.remove("is-away");
    };

    // Limites em coordenadas de documento, para o card nunca sair da página
    const getBounds = (card) => {
      const s = states.get(card);
      const rect = card.getBoundingClientRect();
      const w = card.offsetWidth;
      const h = card.offsetHeight;
      const cx = rect.left + rect.width / 2 + window.scrollX;
      const cy = rect.top + rect.height / 2 + window.scrollY;
      const restLeft = cx - w / 2 - s.x;
      const restTop = cy - h / 2 - s.y;
      const docW = document.documentElement.clientWidth;
      const docH = document.documentElement.scrollHeight;
      return {
        minX: -restLeft,
        maxX: docW - w - restLeft,
        minY: -restTop,
        maxY: docH - h - restTop,
      };
    };

    const settling = new Map();
    const clearMarks = () =>
      document
        .querySelectorAll(".card-slot.is-armed, .card-slot.is-target")
        .forEach((el) => el.classList.remove("is-armed", "is-target"));

    const cancelSettle = (card) => {
      const id = settling.get(card);
      if (id === undefined) return;
      cancelAnimationFrame(id);
      settling.delete(card);
      card.classList.remove("no-anim");
    };

    // Assenta o card como um sticker pousando no álbum: posição, giro, inclinação e dobra
    // vão a zero (ou só os três últimos, se for ficar onde está) com desaceleração suave
    // e SEM passar do ponto, então ele encosta no slot sem balançar.
    const settle = (card, toHome) => {
      cancelSettle(card);
      const s = states.get(card);
      const from = { x: s.x, y: s.y, r: s.r, tilt: s.tilt, fold: s.fold };
      const dur = reduceMotion ? 0 : Math.min(360, 200 + (toHome ? Math.hypot(s.x, s.y) * 0.6 : 0));
      card.classList.remove("is-dragging");
      card.classList.add("no-anim");
      const t0 = performance.now();
      const step = (now) => {
        const t = dur ? Math.min((now - t0) / dur, 1) : 1;
        const keep = Math.pow(1 - t, 3); // ease-out cúbico: monotônico, sem overshoot
        if (toHome) {
          s.x = from.x * keep;
          s.y = from.y * keep;
        }
        s.r = from.r * keep;
        s.tilt = from.tilt * keep;
        s.fold = from.fold * keep;
        render(card);
        if (t < 1) {
          settling.set(card, requestAnimationFrame(step));
        } else {
          settling.delete(card);
          card.classList.remove("no-anim");
          if (toHome) card.style.zIndex = "";
        }
      };
      settling.set(card, requestAnimationFrame(step));
    };

    // Encaixa o card A em outro slot vazio (cujo card está solto por aí). O card solto fica
    // exatamente onde está; só passa a ter como origem o slot que A deixou.
    const dockInto = (A, targetSlot) => {
      const slotA = A.parentElement;
      const B = targetSlot.querySelector(".card");
      if (!B || targetSlot === slotA) return settle(A, true);
      const sA = states.get(A);
      const sB = states.get(B);
      const ra = slotA.getBoundingClientRect();
      const rb = targetSlot.getBoundingClientRect();
      const dx = ra.left - rb.left;
      const dy = ra.top - rb.top;

      targetSlot.append(A);
      slotA.append(B);
      A.classList.add("no-anim");
      B.classList.add("no-anim");
      sA.x += dx;
      sA.y += dy;
      sB.x -= dx;
      sB.y -= dy;
      render(A);
      render(B);
      void A.offsetWidth; // aplica as posições sem transição
      B.classList.remove("no-anim");
      A.style.zIndex = String(++zTop);
      settle(A, true);
    };

    cards.forEach((card) => {
      const s = states.get(card);
      let drag = null;
      let raf = 0;
      const slotOf = () => card.parentElement;
      const springBack = () => {
        clearMarks();
        settle(card, true);
      };
      // Tracejado escuro no slot que vai receber o card se soltar agora
      const markTarget = (el) => {
        if (drag.marked === el) return;
        if (drag.marked) drag.marked.classList.remove("is-armed", "is-target");
        drag.marked = el;
        if (el) el.classList.add(el === slotOf() ? "is-armed" : "is-target");
      };
      let suppressClick = false;

      const place = () => {
        const px = drag.cx + window.scrollX;
        const py = drag.cy + window.scrollY;
        const rx = clamp(drag.sx + px - drag.startX, drag.bounds.minX, drag.bounds.maxX);
        const ry = clamp(drag.sy + py - drag.startY, drag.bounds.minY, drag.bounds.maxY);
        // Centro onde o card estaria seguindo o ponteiro, sem ímã (coords de documento)
        const rcx = drag.own.cx + rx;
        const rcy = drag.own.cy + ry;
        // Slot mais próximo: o de origem ou qualquer outro
        let best = null;
        let bd = Infinity;
        for (const sl of drag.slots) {
          const d = Math.hypot(rcx - sl.cx, rcy - sl.cy);
          if (d < bd) {
            bd = d;
            best = sl;
          }
        }
        const radius = card.offsetWidth * MAGNET_RATIO;
        const near = bd < radius;
        // Ímã: dentro do raio o card aparece mais perto do slot do que o ponteiro
        const pull = near ? Math.pow(bd / radius, 1.8) : 1;
        const tcx = near ? best.cx + (rcx - best.cx) * pull : rcx;
        const tcy = near ? best.cy + (rcy - best.cy) * pull : rcy;
        s.x = tcx - drag.own.cx;
        s.y = tcy - drag.own.cy;
        drag.target = near ? best.el : null;
        // Descolando / assentando: a dobra cresce até a metade do raio e some no centro e fora do ímã
        const peel = reduceMotion || bd < 1 ? 0 : Math.sin(Math.PI * Math.min(bd / radius, 1));
        s.tilt = peel * 12;
        s.fold = peel * card.offsetWidth * 0.34;
      };

      const loop = () => {
        if (!drag || !drag.active) return;
        const vh = window.innerHeight;
        let dy = 0;
        if (drag.cy < EDGE) dy = -MAX_SCROLL * (1 - drag.cy / EDGE);
        else if (drag.cy > vh - EDGE) dy = MAX_SCROLL * (1 - (vh - drag.cy) / EDGE);
        if (dy) window.scrollBy(0, dy);
        place();
        markTarget(drag.target);
        if (!reduceMotion) s.r *= 0.92;
        render(card);
        raf = requestAnimationFrame(loop);
      };

      card.addEventListener("pointerdown", (e) => {
        if (noDrag.matches) return;
        if (e.pointerType === "mouse" && e.button !== 0) return;
        if (e.pointerType !== "mouse" && !e.target.closest(".card__media")) return;
        cancelSettle(card);
        drag = {
          id: e.pointerId,
          active: false,
          cx: e.clientX,
          cy: e.clientY,
          prevX: e.clientX,
          startX: e.clientX + window.scrollX,
          startY: e.clientY + window.scrollY,
          sx: s.x,
          sy: s.y,
          bounds: getBounds(card),
        };
        // Centros de todos os slots (coords de documento) para o ímã
        // Só atraem o slot do próprio card e slots vazios (cujo card está solto e parado)
        const candidates = Array.from(document.querySelectorAll(".card-slot")).filter(
          (el) =>
            el === slotOf() ||
            (el.classList.contains("is-away") && !settling.has(el.querySelector(".card")))
        );
        drag.slots = candidates.map((el) => {
          const r = el.getBoundingClientRect();
          return { el, cx: r.left + r.width / 2 + window.scrollX, cy: r.top + r.height / 2 + window.scrollY };
        });
        drag.own = drag.slots.find((sl) => sl.el === slotOf());
        drag.target = null;
        const rect = card.getBoundingClientRect();
        s.cx = e.clientX - rect.left < rect.width / 2 ? -1 : 1;
        s.cy = e.clientY - rect.top < rect.height / 2 ? -1 : 1;
        card.classList.remove(...CORNERS);
        card.classList.add(CORNERS[(s.cy < 0 ? 0 : 2) + (s.cx < 0 ? 0 : 1)]);
      });

      card.addEventListener("pointermove", (e) => {
        if (!drag || e.pointerId !== drag.id) return;
        if (e.pointerType === "mouse" && e.buttons === 0) {
          drag = null;
          return;
        }
        drag.cx = e.clientX;
        drag.cy = e.clientY;

        if (!drag.active) {
          const moved = Math.hypot(
            e.clientX + window.scrollX - drag.startX,
            e.clientY + window.scrollY - drag.startY
          );
          if (moved < THRESHOLD) return;
          // Só captura o ponteiro depois de arrastar de fato, senão o clique
          // no link "See more" seria engolido pelo card.
          drag.active = true;
          card.setPointerCapture(drag.id);
          card.classList.add("is-dragging");
          card.style.zIndex = String(++zTop);
          raf = requestAnimationFrame(loop);
        }

        const dx = e.clientX - drag.prevX;
        drag.prevX = e.clientX;
        if (!reduceMotion) s.r = clamp(s.r * 0.6 + dx * 0.5, -8, 8);
        place();
        markTarget(drag.target);
        render(card);
      });

      card.addEventListener("pointerleave", () => {
        if (drag && !drag.active) drag = null;
      });

      const end = (e) => {
        if (!drag || e.pointerId !== drag.id) return;
        const wasDragging = drag.active;
        const target = drag.target;
        drag = null;
        cancelAnimationFrame(raf);
        if (!wasDragging) return;

        suppressClick = true;
        setTimeout(() => (suppressClick = false), 60);
        if (card.hasPointerCapture(e.pointerId)) card.releasePointerCapture(e.pointerId);
        clearMarks();
        if (target === slotOf()) settle(card, true); // ímã do próprio slot: volta e assenta
        else if (target) dockInto(card, target); // slot vazio de outro card: encaixa
        else settle(card, false); // fora de qualquer ímã (ou sobre card ocupado): fica por cima, assentado
      };
      card.addEventListener("pointerup", end);
      card.addEventListener("pointercancel", end);

      // Se houve arrasto, não segue o link
      card.addEventListener(
        "click",
        (e) => {
          if (!suppressClick) return;
          e.preventDefault();
          e.stopPropagation();
        },
        true
      );

      card.addEventListener("dragstart", (e) => e.preventDefault());

      card.addEventListener("keydown", (e) => {
        if (noDrag.matches || e.target !== card) return;
        if (e.key === "Escape") {
          if (s.x || s.y) springBack();
          return;
        }
        const step = e.shiftKey ? KEY_STEP * 3 : KEY_STEP;
        const delta = {
          ArrowLeft: [-step, 0],
          ArrowRight: [step, 0],
          ArrowUp: [0, -step],
          ArrowDown: [0, step],
        }[e.key];
        if (!delta) return;
        e.preventDefault();
        const b = getBounds(card);
        s.x = clamp(s.x + delta[0], b.minX, b.maxX);
        s.y = clamp(s.y + delta[1], b.minY, b.maxY);
        card.style.zIndex = String(++zTop);
        render(card);
      });
    });

    const syncDragMode = () => {
      cards.forEach((card) => {
        const o = original.get(card);
        if (noDrag.matches) {
          const s = states.get(card);
          cancelSettle(card);
          homeSlot.get(card).append(card);
          s.x = s.y = s.r = s.tilt = s.fold = 0;
          card.style.zIndex = "";
          card.classList.remove("is-dragging");
          render(card);
          card.removeAttribute("tabindex");
          card.removeAttribute("aria-describedby");
        } else {
          if (o.tabindex !== null) card.setAttribute("tabindex", o.tabindex);
          if (o.described !== null) card.setAttribute("aria-describedby", o.described);
        }
      });
    };
    noDrag.addEventListener("change", syncDragMode);
    syncDragMode();

    // Ao redimensionar, mantém os cards dentro da página
    let resizeTimer = 0;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (noDrag.matches) return;
        cards.forEach((card) => {
          const s = states.get(card);
          const b = getBounds(card);
          s.x = clamp(s.x, b.minX, b.maxX);
          s.y = clamp(s.y, b.minY, b.maxY);
          render(card);
        });
      }, 150);
    });
  }

  /* 3. FORMULÁRIO DE CONTATO --------------------------------------------- */
  // Sem back-end: valida e abre o app de e-mail com a mensagem preenchida.
  // Quando tiver um serviço (Formspree, Netlify Forms...), troque o trecho
  // marcado abaixo por um fetch() para o endpoint.
  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;

    const status = form.querySelector("[data-status]");
    const to = form.dataset.email;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const rules = {
      name: (v) => (v ? "" : "Enter your name."),
      email: (v) =>
        !v ? "Enter your email." : emailPattern.test(v) ? "" : "Enter a valid email, like name@domain.com.",
      subject: (v) => (v ? "" : "Enter a subject."),
      message: (v) => (v.length >= 10 ? "" : "Write at least 10 characters."),
    };

    const validateField = (name) => {
      const input = form.elements[name];
      const error = form.querySelector(`[data-error-for="${name}"]`);
      const message = rules[name](input.value.trim());
      input.setAttribute("aria-invalid", message ? "true" : "false");
      error.textContent = message;
      return message === "";
    };

    Object.keys(rules).forEach((name) => {
      form.elements[name].addEventListener("blur", () => validateField(name));
      form.elements[name].addEventListener("input", () => {
        if (form.elements[name].getAttribute("aria-invalid") === "true") validateField(name);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "";

      const invalid = Object.keys(rules).filter((name) => !validateField(name));
      if (invalid.length) {
        form.elements[invalid[0]].focus();
        status.textContent = "Fix the highlighted fields and send again.";
        return;
      }

      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const subject = form.elements.subject.value.trim();
      const message = form.elements.message.value.trim();

      // --- trocar aqui por fetch() quando houver back-end ---
      const body = `${message}\n\n${name}\n${email}`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = `Opening your email app. If nothing opens, write to ${to}.`;
    });
  }

  /* 4. FOTO DO HERO: TRANSFORMAÇÃO LIVRE ---------------------------------- */
  // Clique na foto para selecionar. Aparecem 8 alças, como no Photoshop.
  //  - Arrastar uma alça de canto: redimensiona mantendo a proporção
  //  - Shift + canto: redimensiona livremente (deforma)
  //  - Alças laterais: esticam só naquele eixo
  //  - Alt: redimensiona a partir do centro
  //  - Arrastar o meio da foto: move
  //  - Teclado: Enter seleciona, setas movem (Shift = mais rápido), + e - escalam
  //  - Esc ou clique fora: desmarca. Duplo clique na foto: volta ao original
  // Os valores ficam em % da área do hero__visual, então escalam com a tela.
  // Cada ajuste imprime no console o CSS correspondente (para você copiar).
  function initFreeTransform() {
    const el = document.querySelector("[data-transform]");
    if (!el) return;
    const area = el.parentElement; // .hero__visual (position: relative)

    const MIN = 40; // tamanho mínimo em px
    const DIRS = {
      nw: [-1, -1], n: [0, -1], ne: [1, -1], e: [1, 0],
      se: [1, 1], s: [0, 1], sw: [-1, 1], w: [-1, 0],
    };

    // Moldura + 8 alças criadas aqui para o HTML ficar limpo
    const box = document.createElement("div");
    box.className = "hero-photo__box";
    box.setAttribute("aria-hidden", "true");
    Object.keys(DIRS).forEach((dir) => {
      const handle = document.createElement("span");
      handle.className = "hero-photo__handle";
      handle.dataset.dir = dir;
      box.appendChild(handle);
    });
    el.appendChild(box);

    const isSelected = () => el.classList.contains("is-selected");
    const select = (on) => {
      el.classList.toggle("is-selected", on);
      el.setAttribute("aria-pressed", String(on));
    };

    const read = () => ({ x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight });
    const pct = (value, total) => `${+((value / total) * 100).toFixed(3)}%`;
    const write = (r) => {
      const aw = area.offsetWidth;
      const ah = area.offsetHeight;
      el.style.left = pct(r.x, aw);
      el.style.top = pct(r.y, ah);
      el.style.width = pct(r.w, aw);
      el.style.height = pct(r.h, ah);
    };

    let logTimer = 0;
    const log = () => {
      clearTimeout(logTimer);
      logTimer = setTimeout(() => {
        console.info(
          "[hero-photo] cole no CSS (.hero-photo):",
          `left: ${el.style.left}; top: ${el.style.top}; width: ${el.style.width}; height: ${el.style.height};`
        );
      }, 250);
    };

    const resize = (op, dx, dy, e) => {
      const [dirX, dirY] = op.dir;
      const s = op.start;
      const m = e.altKey ? 2 : 1; // Alt: o outro lado se move junto
      let w = s.w + dirX * dx * m;
      let h = s.h + dirY * dy * m;

      if (dirX && dirY && !e.shiftKey) {
        // Canto sem Shift: mantém a proporção original
        let k = Math.max(w / s.w, h / s.h);
        k = Math.max(k, MIN / Math.min(s.w, s.h));
        w = s.w * k;
        h = s.h * k;
      }
      w = Math.max(MIN, w);
      h = Math.max(MIN, h);

      const x = e.altKey ? s.x + (s.w - w) / 2 : dirX < 0 ? s.x + s.w - w : s.x;
      const y = e.altKey ? s.y + (s.h - h) / 2 : dirY < 0 ? s.y + s.h - h : s.y;
      return { x, y, w, h };
    };

    let op = null;

    el.addEventListener("click", () => select(true));

    el.addEventListener("pointerdown", (e) => {
      if (!isSelected()) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      const handle = e.target.closest(".hero-photo__handle");
      op = {
        id: e.pointerId,
        dir: handle ? DIRS[handle.dataset.dir] : null,
        sx: e.clientX,
        sy: e.clientY,
        start: read(),
      };
      el.setPointerCapture(e.pointerId);
      e.preventDefault();
    });

    el.addEventListener("pointermove", (e) => {
      if (!op || e.pointerId !== op.id) return;
      const dx = e.clientX - op.sx;
      const dy = e.clientY - op.sy;
      write(op.dir ? resize(op, dx, dy, e) : { ...op.start, x: op.start.x + dx, y: op.start.y + dy });
    });

    const end = (e) => {
      if (!op || e.pointerId !== op.id) return;
      op = null;
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
      log();
    };
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);

    // Duplo clique no corpo da foto: volta ao tamanho e posição do CSS
    el.addEventListener("dblclick", (e) => {
      if (e.target.closest(".hero-photo__handle")) return;
      ["left", "top", "width", "height"].forEach((prop) => el.style.removeProperty(prop));
    });

    el.addEventListener("dragstart", (e) => e.preventDefault());

    // Clique fora desmarca; Esc também
    document.addEventListener("pointerdown", (e) => {
      if (isSelected() && !el.contains(e.target)) select(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isSelected()) select(false);
    });

    // Teclado
    el.addEventListener("keydown", (e) => {
      if (e.target !== el) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        select(!isSelected());
        return;
      }
      if (!isSelected()) return;

      const r = read();
      const step = e.shiftKey ? 10 : 2;
      const move = {
        ArrowLeft: [-step, 0],
        ArrowRight: [step, 0],
        ArrowUp: [0, -step],
        ArrowDown: [0, step],
      }[e.key];

      if (move) {
        e.preventDefault();
        write({ ...r, x: r.x + move[0], y: r.y + move[1] });
        log();
        return;
      }

      if (["+", "=", "-", "_"].includes(e.key)) {
        e.preventDefault();
        let f = e.key === "+" || e.key === "=" ? 1.05 : 1 / 1.05;
        f = Math.max(f, MIN / Math.min(r.w, r.h));
        const w = r.w * f;
        const h = r.h * f;
        write({ x: r.x - (w - r.w) / 2, y: r.y - (h - r.h) / 2, w, h });
        log();
      }
    });
  }

  /* 5. TEXTO QUE EMBARALHA (duplo clique) --------------------------------- */
  // Em qualquer elemento com data-scramble: duplo clique embaralha as letras
  // e, após instantes, elas voltam ao normal da esquerda para a direita.
  // Só as letras trocam de lugar (pontuação e espaços ficam fixos).
  // Ajuste os tempos abaixo para mudar o ritmo.
  function initTextScramble() {
    const targets = document.querySelectorAll("[data-scramble]");
    if (!targets.length || reduceMotion) return; // respeita "reduzir movimento"


    const CLICKS = 1; // quantos cliques seguidos disparam o efeito
    const SHUFFLE_MS = 700; // tempo totalmente embaralhado
    const RESOLVE_MS = 600; // tempo em que as letras voltam ao lugar
    const TICK_MS = 50; // a cada quantos ms o embaralhado muda
    const isLetter = (ch) => /\p{L}/u.test(ch);

    const shuffle = (list) => {
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
      return list;
    };

    targets.forEach((el) => {
      let running = false;

      // Evita que o duplo clique selecione a palavra
      el.addEventListener("mousedown", (e) => {
        if (e.detail > 1) e.preventDefault();
      });

      el.addEventListener("click", (e) => {
        if (e.detail !== CLICKS) return;
        if (running) return;
        running = true;

        // Guarda o texto original de cada nó (o <br> do HTML não é tocado)
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        const originals = nodes.map((node) => Array.from(node.nodeValue));

        const slots = []; // posição de cada letra: nó, índice e caractere
        originals.forEach((chars, ni) =>
          chars.forEach((ch, ci) => {
            if (isLetter(ch)) slots.push({ ni, ci, ch });
          })
        );

        // Trava a altura para a página não "pular" enquanto o texto muda
        el.style.minHeight = `${el.getBoundingClientRect().height}px`;

        const render = (elapsed) => {
          const progress = clamp((elapsed - SHUFFLE_MS) / RESOLVE_MS, 0, 1);
          const resolved = Math.floor(progress * slots.length);
          const pending = slots.slice(resolved); // ainda embaralhadas
          const pool = shuffle(pending.map((slot) => slot.ch));
          const out = originals.map((chars) => chars.slice());
          pending.forEach((slot, i) => {
            out[slot.ni][slot.ci] = pool[i];
          });
          nodes.forEach((node, i) => {
            node.nodeValue = out[i].join("");
          });
        };

        const finish = () => {
          nodes.forEach((node, i) => {
            node.nodeValue = originals[i].join("");
          });
          el.style.minHeight = "";
          running = false;
        };

        const start = performance.now();
        let last = -TICK_MS;
        const frame = (now) => {
          const elapsed = now - start;
          if (elapsed >= SHUFFLE_MS + RESOLVE_MS) return finish();
          if (elapsed - last >= TICK_MS) {
            last = elapsed;
            render(elapsed);
          }
          requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      });
    });
  }

  /* 6. IDENTIDADE (ABOUT): RISCAR E MOVER ---------------------------------- */
  // Dois modos no mesmo elemento [data-id-card]:
  //  - Riscar (padrão): clicar e arrastar sobre a identidade desenha com uma
  //    caneta. O traço só aparece em cima do cartão (some nas bordas vazadas).
  //  - Mover: duplo clique alterna. Aí arrastar leva o cartão pela página.
  //    Duplo clique de novo, Esc ou clique fora voltam para o modo riscar.
  //  - Teclado: Enter liga/desliga o modo mover; com ele ligado, setas movem.
  // Mouse e caneta riscam; toque continua rolando a página.
  function initIdCard() {
    const card = document.querySelector("[data-id-card]");
    if (!card) return;
    const img = card.querySelector("img");

    const INK = "#111111"; // cor da caneta
    const BRUSH = 4; // espessura em px de tela
    const THRESHOLD = 3; // px antes de começar a riscar (clique simples não desenha)
    const KEY_STEP = 16;

    // O canvas recebe a própria imagem e o traço usa "source-atop": só pinta
    // onde já existe pixel opaco, então respeita o formato do cartão.
    const canvas = document.createElement("canvas");
    canvas.className = "id-card__canvas";
    canvas.setAttribute("aria-hidden", "true");
    card.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    const setup = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      card.classList.add("is-ready");
    };
    if (img.complete && img.naturalWidth) setup();
    else img.addEventListener("load", setup, { once: true });

    /* Modo ---------------------------------------------------------------- */
    const s = { x: 0, y: 0, r: 0 };
    let zTop = 20;
    const isMove = () => card.classList.contains("is-move");
    const setMove = (on) => {
      card.classList.toggle("is-move", on);
      if (on) card.style.zIndex = String(++zTop);
    };

    const render = () => {
      card.style.transform =
        s.x || s.y || s.r ? `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.r}deg)` : "";
    };

    // Limites em coordenadas de documento, para o cartão nunca sair da página
    const getBounds = () => {
      const rect = card.getBoundingClientRect();
      const w = card.offsetWidth;
      const h = card.offsetHeight;
      const cx = rect.left + rect.width / 2 + window.scrollX;
      const cy = rect.top + rect.height / 2 + window.scrollY;
      const restLeft = cx - w / 2 - s.x;
      const restTop = cy - h / 2 - s.y;
      return {
        minX: -restLeft,
        maxX: document.documentElement.clientWidth - w - restLeft,
        minY: -restTop,
        maxY: document.documentElement.scrollHeight - h - restTop,
      };
    };

    /* Riscar -------------------------------------------------------------- */
    let stroke = null;
    let drag = null;
    let raf = 0;

    // O canvas (e qualquer ancestral) pode estar girado ou escalado por CSS. Nesse caso
    // getBoundingClientRect() devolve a caixa do retângulo girado, que é maior que o canvas
    // e não serve para achar o pixel sob o ponteiro (o traço saía deslocado da ponta do lápis).
    // Então: parte do centro (o giro não o move), desfaz o giro e a escala acumulados e só
    // depois converte para pixels do canvas.
    const accumulatedTransform = (el) => {
      let angle = 0;
      let scale = 1;
      for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
        const t = getComputedStyle(n).transform;
        if (!t || t === "none") continue;
        const m = new DOMMatrix(t);
        angle += Math.atan2(m.b, m.a);
        scale *= Math.hypot(m.a, m.b);
      }
      return { angle, scale };
    };

    const toCanvas = (e) => {
      const rect = canvas.getBoundingClientRect();
      const { angle, scale } = accumulatedTransform(canvas);
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      // vetor do centro ao ponteiro, girado de volta e sem a escala
      const lx = (dx * cos + dy * sin) / scale;
      const ly = (-dx * sin + dy * cos) / scale;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const kx = canvas.width / w;
      const ky = canvas.height / h;
      // k: pixels do canvas por pixel de tela (a espessura do traço é em px de tela)
      return { x: (lx + w / 2) * kx, y: (ly + h / 2) * ky, k: kx / scale };
    };

    const drawTo = (e) => {
      const p = toCanvas(e);
      const mid = { x: (stroke.last.x + p.x) / 2, y: (stroke.last.y + p.y) / 2 };
      ctx.globalCompositeOperation = "source-atop";
      ctx.strokeStyle = INK;
      ctx.lineWidth = BRUSH * p.k;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(stroke.mid.x, stroke.mid.y);
      ctx.quadraticCurveTo(stroke.last.x, stroke.last.y, mid.x, mid.y);
      ctx.stroke();
      stroke.last = p;
      stroke.mid = mid;
    };

    /* Ponteiro ------------------------------------------------------------ */
    card.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return;
      if (e.button !== 0) return;

      if (isMove()) {
        drag = {
          id: e.pointerId,
          px: e.clientX,
          sx: s.x,
          sy: s.y,
          startX: e.clientX + window.scrollX,
          startY: e.clientY + window.scrollY,
          bounds: getBounds(),
        };
        card.setPointerCapture(e.pointerId);
        card.classList.add("is-dragging");
        card.style.zIndex = String(++zTop);
        const loop = () => {
          if (!drag) return;
          if (!reduceMotion) s.r *= 0.92; // o tilt volta sozinho quando para
          render();
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        e.preventDefault();
        return;
      }

      const p = toCanvas(e);
      stroke = { id: e.pointerId, started: false, sx: e.clientX, sy: e.clientY, last: p, mid: p };
    });

    card.addEventListener("pointermove", (e) => {
      if (drag && e.pointerId === drag.id) {
        const dx = e.clientX - drag.px;
        drag.px = e.clientX;
        if (!reduceMotion) s.r = clamp(s.r * 0.6 + dx * 0.5, -8, 8);
        const px = e.clientX + window.scrollX;
        const py = e.clientY + window.scrollY;
        s.x = clamp(drag.sx + px - drag.startX, drag.bounds.minX, drag.bounds.maxX);
        s.y = clamp(drag.sy + py - drag.startY, drag.bounds.minY, drag.bounds.maxY);
        render();
        return;
      }

      if (!stroke || e.pointerId !== stroke.id) return;
      if (e.buttons === 0) {
        stroke = null;
        return;
      }
      if (!stroke.started) {
        if (Math.hypot(e.clientX - stroke.sx, e.clientY - stroke.sy) < THRESHOLD) return;
        stroke.started = true;
        // Captura só depois de começar a riscar: o traço continua mesmo se o
        // mouse sair do cartão, mas só aparece sobre ele.
        card.setPointerCapture(e.pointerId);
      }
      const events = e.getCoalescedEvents ? e.getCoalescedEvents() : [];
      (events.length ? events : [e]).forEach(drawTo);
    });

    const end = (e) => {
      if (drag && e.pointerId === drag.id) {
        drag = null;
        cancelAnimationFrame(raf);
        s.r = 0;
        card.classList.remove("is-dragging");
        render();
      }
      if (stroke && e.pointerId === stroke.id) stroke = null;
      if (card.hasPointerCapture(e.pointerId)) card.releasePointerCapture(e.pointerId);
    };
    card.addEventListener("pointerup", end);
    card.addEventListener("pointercancel", end);

    // Duplo clique alterna entre riscar e mover
    card.addEventListener("dblclick", () => setMove(!isMove()));

    card.addEventListener("dragstart", (e) => e.preventDefault());

    // Esc ou clique fora voltam para o modo riscar
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isMove()) setMove(false);
    });
    document.addEventListener("pointerdown", (e) => {
      if (isMove() && !card.contains(e.target)) setMove(false);
    });

    // Teclado: Enter liga/desliga o mover; setas movem
    card.addEventListener("keydown", (e) => {
      if (e.target !== card) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setMove(!isMove());
        return;
      }
      if (!isMove()) return;
      const step = e.shiftKey ? KEY_STEP * 3 : KEY_STEP;
      const delta = {
        ArrowLeft: [-step, 0],
        ArrowRight: [step, 0],
        ArrowUp: [0, -step],
        ArrowDown: [0, step],
      }[e.key];
      if (!delta) return;
      e.preventDefault();
      const b = getBounds();
      s.x = clamp(s.x + delta[0], b.minX, b.maxX);
      s.y = clamp(s.y + delta[1], b.minY, b.maxY);
      render();
    });

    // Ao redimensionar, mantém o cartão dentro da página
    let resizeTimer = 0;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const b = getBounds();
        s.x = clamp(s.x, b.minX, b.maxX);
        s.y = clamp(s.y, b.minY, b.maxY);
        render();
      }, 150);
    });
  }

  /* 7. NAVBAR: MARCADOR DA PÁGINA ATUAL DESLIZA ------------------------------ */
  // Ao clicar em outro item, a página recarrega e o marcador colorido nasce no
  // item de onde você veio e desliza até o novo, mudando de cor no caminho.
  // Sem JS, o item atual continua colorido, só que sem a animação.
  function initNavSlider() {
    const nav = document.querySelector("[data-nav]");
    if (!nav) return;
    const links = Array.from(nav.querySelectorAll("a"));
    if (!links.length) return;

    const SLIDE_DELAY = 90; // ms de pausa antes de começar a deslizar
    const MAX_AGE = 8000; // ms: passado esse tempo, a origem guardada é ignorada
    const KEY = "navSlideFrom";

    const here = links.find((a) => a.getAttribute("aria-current") === "page");
    if (!here) return;

    const current = document.createElement("span");
    current.className = "nav__current";
    current.setAttribute("aria-hidden", "true");
    nav.insertBefore(current, nav.firstChild);
    nav.classList.add("nav--sliding");

    const place = (link) => {
      current.style.width = link.offsetWidth + "px";
      current.style.height = link.offsetHeight + "px";
      current.style.transform = `translateX(${link.offsetLeft}px)`;
    };
    const colorOf = (link) => getComputedStyle(link).getPropertyValue("--current-bg").trim();
    const jump = (link) => {
      // Posiciona sem transição (pulo instantâneo)
      current.style.transition = "none";
      place(link);
      current.style.backgroundColor = colorOf(link);
      current.getBoundingClientRect(); // força o layout antes de religar a transição
      current.style.transition = "";
    };

    // Guarda de onde o clique saiu. sessionStorage é o caminho principal;
    // window.name é reserva para navegadores que isolam arquivos abertos do disco.
    const stash = {
      set(value) {
        try { sessionStorage.setItem(KEY, value); } catch (_) {}
        window.name = KEY + ":" + value;
      },
      take() {
        let value = null;
        try {
          value = sessionStorage.getItem(KEY);
          sessionStorage.removeItem(KEY);
        } catch (_) {}
        if (window.name.indexOf(KEY + ":") === 0) {
          if (value === null) value = window.name.slice(KEY.length + 1);
          window.name = "";
        }
        return value;
      },
    };

    let from = null;
    const raw = stash.take();
    if (raw) {
      const [idx, at] = raw.split("@").map(Number);
      if (Date.now() - at < MAX_AGE && links[idx] && links[idx] !== here) from = links[idx];
    }

    jump(from || here);
    if (from) {
      here.classList.add("is-arriving"); // ícone começa preto
      setTimeout(() => {
        place(here);
        current.style.backgroundColor = colorOf(here);
        here.classList.remove("is-arriving"); // e clareia junto com o deslize (ver CSS)
      }, SLIDE_DELAY);
    }

    // Ao clicar em outra página, guarda o item atual para a próxima carga animar
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        if (link === here) return;
        const href = link.getAttribute("href") || "";
        if (href.charAt(0) === "#") return; // âncora da mesma página: sem recarregar
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        stash.set(links.indexOf(here) + "@" + Date.now());
      });
    });

    window.addEventListener("resize", () => jump(here));
  }

  /* 8. TEXTO SENDO DIGITADO (HOME) ------------------------------------------ */
  // Todo elemento com [data-type] é digitado na ordem em que aparece na página.
  // Opcional: data-type-speed="ms por letra" (padrão 25).
  // O texto original fica numa cópia invisível para leitores de tela; a versão
  // animada é aria-hidden. Com "reduzir movimento", o texto aparece pronto.
  function initTypewriter() {
    const targets = Array.from(document.querySelectorAll("[data-type]"));
    if (!targets.length) return;
    if (reduceMotion) {
      targets.forEach((el) => el.classList.add("tw-ready"));
      return;
    }

    const START_DELAY = 250; // ms antes da primeira letra
    const GAP = 200; // ms de pausa entre um elemento e o próximo
    const DEFAULT_MS = 25; // ms por letra quando não há data-type-speed
    const PAUSE_SOFT = 70; // ms extra depois de , ; :
    const PAUSE_HARD = 130; // ms extra depois de . ! ?
    const JITTER = 0.4; // 0.4 = cada letra varia ±40% no ritmo, para soar humano
    const CARET_LINGER = 1800; // ms que o cursor continua piscando no fim

    const caret = document.createElement("span");
    caret.className = "tw-caret is-typing";
    caret.setAttribute("aria-hidden", "true");

    const timeline = []; // { el: <span da letra>, at: ms desde o início }
    let t = START_DELAY;

    targets.forEach((el) => {
      const base = Number(el.dataset.typeSpeed) || DEFAULT_MS;
      const label = el.textContent.replace(/\s+/g, " ").trim();

      // Move todo o conteúdo para um contêiner visual, dividindo o texto em
      // palavras e letras (elementos como <br> são preservados)
      const visual = document.createElement("span");
      visual.className = "tw";
      visual.setAttribute("aria-hidden", "true");
      const chars = [];

      Array.from(el.childNodes).forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE) {
          visual.appendChild(node);
          return;
        }
        const frag = document.createDocumentFragment();
        node.nodeValue.split(/(\s+)/).forEach((token) => {
          if (!token) return;
          if (/^\s+$/.test(token)) {
            frag.appendChild(document.createTextNode(token));
            return;
          }
          const word = document.createElement("span");
          word.className = "tw-word";
          Array.from(token).forEach((ch) => {
            const c = document.createElement("span");
            c.className = "tw-char";
            c.textContent = ch;
            word.appendChild(c);
            chars.push(c);
          });
          frag.appendChild(word);
        });
        visual.appendChild(frag);
      });

      const sr = document.createElement("span");
      sr.className = "sr-only";
      sr.textContent = label;
      el.textContent = "";
      el.append(sr, visual);

      chars.forEach((c) => {
        timeline.push({ el: c, at: t });
        const ch = c.textContent;
        let step = base * (1 - JITTER + Math.random() * 2 * JITTER);
        if (/[,;:]/.test(ch)) step += PAUSE_SOFT;
        else if (/[.!?]/.test(ch)) step += PAUSE_HARD;
        t += step;
      });
      t += GAP;
    });

    if (!timeline.length) return;
    targets.forEach((el) => el.classList.add("tw-ready"));
    timeline[0].el.before(caret);

    let i = 0;
    const t0 = performance.now();
    const frame = (now) => {
      const elapsed = now - t0;
      while (i < timeline.length && timeline[i].at <= elapsed) {
        timeline[i].el.classList.add("is-on");
        timeline[i].el.after(caret); // o cursor anda junto com a última letra
        i++;
      }
      if (i < timeline.length) return requestAnimationFrame(frame);
      caret.classList.remove("is-typing"); // terminou: cursor passa a piscar
      setTimeout(() => {
        caret.classList.add("is-done");
        setTimeout(() => caret.remove(), 500);
      }, CARET_LINGER);
    };
    requestAnimationFrame(frame);
  }

  /* 9. VOLTAR AO TOPO ---------------------------------------------------- */
  // Botão no canto inferior direito, no estilo da navbar. Sobe quando a seção
  // de contato aparece e leva de volta ao início da página.
  function initBackToTop() {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const wrap = document.createElement("div");
    wrap.className = "to-top";
    wrap.innerHTML =
      '<button class="to-top__btn" type="button" aria-label="Back to top" data-tooltip="Back to top">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg></button>';
    document.body.appendChild(wrap);

    wrap.querySelector("button").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });

    const show = (on) => wrap.classList.toggle("is-visible", on);
    if ("IntersectionObserver" in window) {
      // Aparece quando o contato entra nos 60% de cima da tela
      new IntersectionObserver(([entry]) => show(entry.isIntersecting), {
        rootMargin: "0px 0px -40% 0px",
      }).observe(contact);
    } else {
      const check = () => show(contact.getBoundingClientRect().top < window.innerHeight * 0.6);
      window.addEventListener("scroll", check, { passive: true });
      check();
    }
  }

  initBackToTop();
  initTypewriter();
  initNav();
  initDraggableCards();
  initContactForm();
  initFreeTransform();
  initTextScramble();
  initIdCard();
  initNavSlider();
})();