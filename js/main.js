/* ==========================================================================
   Victor Dante | Portfolio
   1 Navbar que some gradualmente   2 Cards arrastáveis (home)   3 Formulário
   4 Foto do hero com transformação livre   5 Texto que embaralha (duplo clique)
   6 Identidade da página About (riscar e mover)
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

    const states = new Map(cards.map((card) => [card, { x: 0, y: 0, r: 0 }]));
    let zTop = 20;

    const render = (card) => {
      const s = states.get(card);
      card.style.transform =
        s.x || s.y || s.r ? `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.r}deg)` : "";
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

    cards.forEach((card) => {
      const s = states.get(card);
      let drag = null;
      let raf = 0;
      let suppressClick = false;

      const place = () => {
        const px = drag.cx + window.scrollX;
        const py = drag.cy + window.scrollY;
        s.x = clamp(drag.sx + px - drag.startX, drag.bounds.minX, drag.bounds.maxX);
        s.y = clamp(drag.sy + py - drag.startY, drag.bounds.minY, drag.bounds.maxY);
      };

      const loop = () => {
        if (!drag || !drag.active) return;
        const vh = window.innerHeight;
        let dy = 0;
        if (drag.cy < EDGE) dy = -MAX_SCROLL * (1 - drag.cy / EDGE);
        else if (drag.cy > vh - EDGE) dy = MAX_SCROLL * (1 - (vh - drag.cy) / EDGE);
        if (dy) window.scrollBy(0, dy);
        place();
        if (!reduceMotion) s.r *= 0.92;
        render(card);
        raf = requestAnimationFrame(loop);
      };

      card.addEventListener("pointerdown", (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        if (e.pointerType !== "mouse" && !e.target.closest(".card__media")) return;
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
        render(card);
      });

      card.addEventListener("pointerleave", () => {
        if (drag && !drag.active) drag = null;
      });

      const end = (e) => {
        if (!drag || e.pointerId !== drag.id) return;
        const wasDragging = drag.active;
        drag = null;
        cancelAnimationFrame(raf);
        if (!wasDragging) return;

        suppressClick = true;
        setTimeout(() => (suppressClick = false), 60);
        card.classList.remove("is-dragging");
        s.r = 0;
        render(card);
        if (card.hasPointerCapture(e.pointerId)) card.releasePointerCapture(e.pointerId);
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
        if (e.target !== card) return;
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

    // Ao redimensionar, mantém os cards dentro da página
    let resizeTimer = 0;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
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

    const toCanvas = (e) => {
      const rect = canvas.getBoundingClientRect();
      const k = canvas.width / rect.width;
      return { x: (e.clientX - rect.left) * k, y: (e.clientY - rect.top) * k, k };
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

  initNav();
  initDraggableCards();
  initContactForm();
  initFreeTransform();
  initTextScramble();
  initIdCard();
})();
