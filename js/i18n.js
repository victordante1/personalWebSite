/* ==========================================================================
   Victor Dante | Portfolio: idioma (inglês / português / japonês)

   O site é escrito em inglês. Com português ou japonês escolhido, este script
   troca textos, atributos (alt, aria-label, placeholder, tooltip), o <title> e
   a meta description usando os dicionários PT e JA abaixo, cuja chave é o texto
   em inglês (espaços normalizados). Texto sem tradução fica em inglês.
   O idioma é escolhido no globo da navbar.

   Carrega no <head> SEM defer, antes do main.js: traduz quando o HTML termina
   de ser lido (readyState "interactive"), que acontece antes dos scripts com
   defer. Assim o texto digitado da home, o embaralhar e os cards já trabalham
   com o texto traduzido. Trocar de idioma salva a escolha e recarrega a página.

   Também aceita ?lang=en, ?lang=pt ou ?lang=ja na URL (útil para compartilhar).
   Para textos criados pelo main.js, use window.i18n.t("texto em inglês").
   ========================================================================== */
(() => {
  "use strict";

  const PT = {
    /* Geral: navegação, rodapé, formulário ----------------------------------- */
    "Skip to content": "Pular para o conteúdo",
    "Main": "Principal",
    "Home": "Início",
    "About me": "Sobre mim",
    "Work": "Trabalhos",
    "Contact": "Contato",
    "Let's work together": "Vamos trabalhar juntos",
    "Let's": "Vamos",
    "work": "trabalhar",
    "together": "juntos",
    "Phone": "Telefone",
    "Location": "Localização",
    "Maceió, Brazil": "Maceió, Brasil",
    "Connect with me": "Conecte-se comigo",
    "Name": "Nome",
    "Your name": "Seu nome",
    "name@domain.com": "nome@dominio.com",
    "Subject": "Assunto",
    "What is this about?": "Sobre o que é?",
    "Message": "Mensagem",
    "Tell me about your project": "Me conte sobre o seu projeto",
    "Send message": "Enviar mensagem",
    "Enter your name.": "Digite seu nome.",
    "Enter your email.": "Digite seu e-mail.",
    "Enter a valid email, like name@domain.com.": "Digite um e-mail válido, como nome@dominio.com.",
    "Enter a subject.": "Digite um assunto.",
    "Write at least 10 characters.": "Escreva pelo menos 10 caracteres.",
    "Fix the highlighted fields and send again.": "Corrija os campos destacados e envie de novo.",
    "Opening your email app. If nothing opens, write to {to}.": "Abrindo seu app de e-mail. Se nada abrir, escreva para {to}.",
    "Back to top": "Voltar ao topo",
    "cool project here": "projeto legal aqui",
    "See more": "Ver mais",
    "View all work": "Ver todos os trabalhos",
    "Back to work": "Voltar aos trabalhos",
    "Projects": "Projetos",
    "Type": "Tipo",
    "Client": "Cliente",
    "Scope": "Escopo",
    "About the project": "Sobre o projeto",
    "Color": "Cor",
    "Red": "Vermelho",
    "Green": "Verde",
    "Blue": "Azul",
    "Yellow": "Amarelo",
    "Black": "Preto",
    "White": "Branco",
    "Cream": "Creme",
    "Lime": "Lima",
    "Pink": "Rosa",
    "Navy": "Azul-marinho",
    "Light green": "Verde-claro",
    "Drag the cards around, or focus one and use the arrow keys.": "Arraste os cards pela página, ou selecione um e use as setas do teclado.",

    /* Home -------------------------------------------------------------------- */
    "Victor Dante | Creative Developer & Designer": "Victor Dante | Desenvolvedor criativo e designer",
    "Portfolio of Victor Dante, a creative developer and designer based in Maceió, Brazil. Graphic design, UI/UX and front-end development.":
      "Portfólio de Victor Dante, desenvolvedor criativo e designer em Maceió, Brasil. Design gráfico, UI/UX e desenvolvimento front-end.",
    "Hello!": "Olá!",
    "I'm Victor Dante, a creative developer and designer based in Brazil. I bring together graphic design, UI/UX and front-end development to build digital experiences that look intentional and work smoothly.":
      "Sou Victor Dante, desenvolvedor criativo e designer no Brasil. Uno design gráfico, UI/UX e desenvolvimento front-end para criar experiências digitais pensadas em cada detalhe e que funcionam sem atrito.",
    "Portrait of Victor Dante. Press Enter to resize and move.": "Retrato de Victor Dante. Pressione Enter para redimensionar e mover.",
    "Selected work": "Trabalhos selecionados",

    /* Cards (home e Trabalhos) ------------------------------------------------ */
    "Motion | Paper Toys": "Motion | Paper Toys",
    "An After Effects motion study inspired by \"The Atlantic - All His Children\", by Mike Burton.":
      "Um estudo de motion no After Effects inspirado em \"The Atlantic - All His Children\", de Mike Burton.",
    "Visual Identity | dante": "Identidade visual | dante",
    "The complete visual identity for my personal brand \"dante\", including logo, color scheme, and typography.":
      "A identidade visual completa da minha marca pessoal \"dante\", com logo, paleta de cores e tipografia.",
    ": dante visual identity": ": identidade visual dante",
    "Visual Identity | pera pera": "Identidade visual | pera pera",
    "The complete visual identity for the \"Pera Pera\" brand, including logo, color scheme, and typography.":
      "A identidade visual completa da marca \"Pera Pera\", com logo, paleta de cores e tipografia.",
    ": pera pera visual identity": ": identidade visual pera pera",
    "Institutional | TRE-AL": "Institucional | TRE-AL",
    "Campaigns for the 2026 elections, the visual identity for the 30th anniversary of the electronic voting machine and a comic book against fake news.":
      "Campanhas para as eleições de 2026, a identidade visual dos 30 anos da urna eletrônica e uma revista em quadrinhos contra fake news.",
    ": TRE-AL institutional design": ": design institucional TRE-AL",
    "Comic book | TRE-AL": "Revista em quadrinhos | TRE-AL",
    "Dona Maria, a free digital comic book that helps older people recognize misinformation and fake news.":
      "Dona Maria, uma revista em quadrinhos digital e gratuita que ajuda pessoas idosas a reconhecer desinformação e fake news.",
    ": Dona Maria comic book": ": revista em quadrinhos Dona Maria",
    "Social media | System Idiomas": "Redes sociais | System Idiomas",
    "Flyers and social media posts for a language school, built around the brand's red and custom lettering for each occasion.":
      "Flyers e posts para redes sociais de uma escola de idiomas, construídos sobre o vermelho da marca e um lettering próprio para cada ocasião.",
    "Rebranding | Clauss": "Rebranding | Clauss",
    "A new logo, palette and social media lettering for Clauss, a pizzeria.": "Novo logo, paleta e lettering para as redes sociais da Clauss, uma pizzaria.",
    ": Clauss rebranding": ": rebranding Clauss",

    /* Trabalhos -------------------------------------------------------------- */
    "Work | Victor Dante": "Trabalhos | Victor Dante",
    "Selected work by Victor Dante: visual identities, motion, editorial pieces and interface projects.":
      "Trabalhos selecionados de Victor Dante: identidades visuais, motion, peças editoriais e projetos de interface.",
    "Highlight": "Destaque",
    "The complete visual identity for my personal brand \"dante\": a lowercase \"d\" that can be filled with textures, objects and color, applied to print, motion and merchandise.":
      "A identidade visual completa da minha marca pessoal \"dante\": um \"d\" minúsculo que pode ser preenchido com texturas, objetos e cor, aplicado em impressos, motion e produtos.",

    /* Sobre ------------------------------------------------------------------- */
    "About me | Victor Dante": "Sobre mim | Victor Dante",
    "Designer based in Maceió, Brazil, expanding from visual design into UI/UX and front-end development. Toolkit, experience and education.":
      "Designer em Maceió, Brasil, expandindo do design visual para UI/UX e desenvolvimento front-end. Ferramentas, experiência e formação.",
    "ID card": "Carteirinha",
    "ID card. Drag to scribble on it. Double-click, or press Enter, to move it.":
      "Carteirinha. Arraste para rabiscar nela. Clique duas vezes, ou pressione Enter, para movê-la.",
    "Victor Dante's ID card": "Carteirinha de Victor Dante",
    "“Hello, my name is dante” name tag sticker": "Adesivo de crachá “Hello, my name is dante”",
    "I design, prototype and build digital experiences.": "Eu desenho, prototipo e construo experiências digitais.",
    "I'm Victor Dante, a designer based in Maceió, Brazil. My roots are in visual design, and I'm currently expanding my practice into UI/UX and front-end development.":
      "Sou Victor Dante, designer em Maceió, Brasil. Minha base é o design visual, e hoje estou expandindo minha prática para UI/UX e desenvolvimento front-end.",
    "Visual Design": "Design visual",
    "Brand identities, editorial pieces, campaigns, motion graphics, social media and environmental graphics. I care about hierarchy, rhythm and the details that make a visual system feel intentional.":
      "Identidades de marca, peças editoriais, campanhas, motion graphics, redes sociais e sinalização. Presto atenção à hierarquia, ao ritmo e aos detalhes que fazem um sistema visual parecer intencional.",
    "UI/UX Design": "Design de UI/UX",
    "I approach interfaces through structure and behavior: user flows, wireframes, prototypes and visual systems that balance clarity, usability and personality.":
      "Penso interfaces a partir da estrutura e do comportamento: fluxos de usuário, wireframes, protótipos e sistemas visuais que equilibram clareza, usabilidade e personalidade.",
    "I turn designs into responsive interfaces with HTML, CSS and JavaScript, while continuing to develop my skills with React and modern web workflows.":
      "Transformo layouts em interfaces responsivas com HTML, CSS e JavaScript, enquanto sigo desenvolvendo minhas habilidades com React e fluxos de trabalho modernos para a web.",
    "TOOLKIT": "FERRAMENTAS",
    "Software and technologies": "Softwares e tecnologias",
    "The tools I use to move from visual concept to interface and implementation.":
      "As ferramentas que uso para ir do conceito visual à interface e à implementação.",
    "Design & Motion": "Design e motion",
    "Workflow": "Fluxo de trabalho",
    "Responsive Design": "Design responsivo",
    "Prototyping": "Prototipagem",
    "CAREER": "CARREIRA",
    "Professional experience": "Experiência profissional",
    "A short timeline of where I've worked, what I've learned, and how my practice has evolved.":
      "Uma linha do tempo curta de onde trabalhei, o que aprendi e como minha prática evoluiu.",
    "to": "até",
    "NOW": "HOJE",
    "In-house Designer": "Designer institucional",
    "Current": "Atual",
    "Areas of work": "Áreas de atuação",
    "Campaigns": "Campanhas",
    "Social Media": "Redes sociais",
    "I create visual materials for the school’s marketing and communication, including social media content, promotional campaigns, event materials, digital and print assets, and visual identities for specific initiatives. I also work with art direction, typography, composition, and visual hierarchy while maintaining brand consistency across different formats and channels.":
      "Crio materiais visuais para o marketing e a comunicação da escola, incluindo conteúdo para redes sociais, campanhas promocionais, materiais de eventos, peças digitais e impressas e identidades visuais para iniciativas específicas. Também trabalho com direção de arte, tipografia, composição e hierarquia visual, mantendo a consistência da marca em diferentes formatos e canais.",
    "In-house Designer — Intern": "Designer institucional — Estágio",
    "Illustration": "Ilustração",
    "Public Communication": "Comunicação pública",
    "I created graphic materials for informational campaigns, social media, print collateral, and digital content focused on citizenship, informed voting, and electoral transparency. I worked with communication, legal, and administrative teams to translate technical and legal content into clear and accessible visual formats.":
      "Criei materiais gráficos para campanhas informativas, redes sociais, impressos e conteúdo digital com foco em cidadania, voto consciente e transparência eleitoral. Trabalhei com as equipes de comunicação, jurídica e administrativa para transformar conteúdos técnicos e jurídicos em formatos visuais claros e acessíveis.",
    "Educational": "Educativo",
    "Institutional": "Institucional",
    "Print": "Impresso",
    "I designed visual materials for institutional and educational campaigns across digital and print media. I turned technical and regulatory information into clear, accessible content, working with the communication and compliance teams to keep the Council’s visual identity consistent.":
      "Desenvolvi materiais visuais para campanhas institucionais e educativas em mídias digitais e impressas. Transformei informações técnicas e regulatórias em conteúdo claro e acessível, em parceria com as equipes de comunicação e de compliance, para manter a identidade visual do Conselho consistente.",
    "Ili Agency": "Agência Ili",
    "Graphic Designer — Intern": "Designer gráfico — Estágio",
    "Digital Campaigns": "Campanhas digitais",
    "Client Work": "Atendimento a clientes",
    "I developed visual solutions for a variety of clients, including Dentalis, Moura Dubeux, and Roomo. I created digital campaigns and graphic materials that communicated each brand’s identity and values, translating briefs into creative and functional pieces across different platforms.":
      "Desenvolvi soluções visuais para diversos clientes, como Dentalis, Moura Dubeux e Roomo. Criei campanhas digitais e materiais gráficos que comunicavam a identidade e os valores de cada marca, transformando briefings em peças criativas e funcionais para diferentes plataformas.",
    "LEARNING": "FORMAÇÃO",
    "Education & certifications": "Formação e certificações",
    "A mix of formal education, courses and events that shape the way I work.":
      "Uma mistura de formação acadêmica, cursos e eventos que moldam a forma como eu trabalho.",
    "Education": "Formação acadêmica",
    "Bachelor's Degree": "Bacharelado",
    "Federal University of Alagoas (UFAL)": "Universidade Federal de Alagoas (UFAL)",
    "Expected graduation · mid-2027": "Previsão de conclusão · 2027.1",
    "Courses": "Cursos",
    "Design and Launching of Digital Products": "Design e lançamento de produtos digitais",
    "From Figma to Code: Complete Web Interface Design Course": "Do Figma ao código: curso completo de design de interfaces web",
    "Front-end Development Training in HTML, CSS, and JavaScript": "Formação em desenvolvimento front-end com HTML, CSS e JavaScript",
    "Cybersecurity Fundamentals": "Fundamentos de cibersegurança",
    "English Fundamentals: Successful Networking and Interviews": "Fundamentos de inglês: networking e entrevistas de sucesso",
    "Events": "Eventos",

    /* Projeto: dante ---------------------------------------------------------- */
    "dante visual identity | Victor Dante": "Identidade visual dante | Victor Dante",
    "dante, the personal visual identity of Victor Dante: logo, color scheme, typography and applications.":
      "dante, a identidade visual pessoal de Victor Dante: logo, paleta de cores, tipografia e aplicações.",
    "The complete visual identity for my personal brand \"dante\", including logo, color scheme, typography and a set of applications in print, motion and merchandise.":
      "A identidade visual completa da minha marca pessoal \"dante\", com logo, paleta de cores, tipografia e um conjunto de aplicações em impressos, motion e produtos.",
    "Animation of the dante d drawn with sketchy lines": "Animação do d de dante desenhado com traços de rascunho",
    "Visual identity": "Identidade visual",
    "Personal brand": "Marca pessoal",
    "Logo, color, typography, motion and brand applications": "Logo, cor, tipografia, motion e aplicações da marca",
    "dante is the name I sign my work with, and this project is the identity behind it. I wanted a brand that felt personal without being serious all the time: something that could be bold on a black background, playful on a sticker and still recognizable at the size of a favicon.":
      "dante é o nome com que assino meus trabalhos, e este projeto é a identidade por trás dele. Eu queria uma marca pessoal sem ser séria o tempo todo: algo que pudesse ser marcante num fundo preto, divertido num adesivo e ainda reconhecível no tamanho de um favicon.",
    "Everything starts from a lowercase \"d\". Its simple, rounded shape works like a container that can be filled with textures, halftones, patterns and objects, so the mark changes with each application while keeping the same silhouette.":
      "Tudo começa num \"d\" minúsculo. Sua forma simples e arredondada funciona como um recipiente que pode ser preenchido com texturas, retículas, padronagens e objetos, então a marca muda a cada aplicação sem perder a silhueta.",
    "The dante logo, a white lowercase d on black, above six versions of the d filled with different textures on a green background":
      "O logo dante, um d minúsculo branco sobre preto, acima de seis versões do d preenchidas com texturas diferentes sobre fundo verde",
    "The main mark and some of its textured variations.": "A marca principal e algumas de suas variações com textura.",
    "A short palette of saturated primaries, anchored by black and white. It is the same palette that runs through this website: each page takes one of these colors as its accent.":
      "Uma paleta curta de primárias saturadas, ancorada no preto e no branco. É a mesma paleta que percorre este site: cada página usa uma dessas cores como destaque.",
    "dante color palette": "Paleta de cores dante",
    "A playful wordmark": "Um logotipo divertido",
    "Alongside the minimal monogram there is an expressive, collage-like version of the name, built from fruits, labels and sticker shapes. It brings in the everyday, pop references that shape my work and gives the brand room to be loud when the context asks for it.":
      "Ao lado do monograma minimalista existe uma versão expressiva do nome, em colagem, feita de frutas, etiquetas e formas de adesivo. Ela traz as referências pop e do dia a dia que moldam meu trabalho e dá à marca espaço para chamar atenção quando o contexto pede.",
    "Colorful collage wordmark spelling dante with fruits, labels and stickers on a black background":
      "Logotipo colorido em colagem formando dante com frutas, etiquetas e adesivos sobre fundo preto",
    "Stationery and posters": "Papelaria e pôsteres",
    "An ID card, a monogram poster and a poster listing the things I love (chess, frogs, skateboarding, darts, video games, guitar) show how the \"d\" carries photos, icons and illustrations while the colors keep everything together.":
      "Uma carteirinha, um pôster com o monograma e um pôster com as coisas que eu amo (xadrez, sapos, skate, dardos, videogame, guitarra) mostram como o \"d\" carrega fotos, ícones e ilustrações enquanto as cores mantêm tudo unido.",
    "Blue ID card, green poster with the d monogram and red poster with white icons of hobbies":
      "Carteirinha azul, pôster verde com o monograma d e pôster vermelho com ícones brancos de hobbies",
    "The identity was also made to move. Small loops for social media and for this portfolio bring the mark to life on an old TV, in a pixel-art computer and in a set of paper toys.":
      "A identidade também foi feita para se mover. Pequenos loops para redes sociais e para este portfólio dão vida à marca numa TV antiga, num computador em pixel art e num conjunto de paper toys.",
    "Animation of the dante d appearing on an old television screen": "Animação do d de dante aparecendo na tela de uma televisão antiga",
    "Pixel-art animation of a smiling retro computer": "Animação em pixel art de um computador retrô sorrindo",
    "Paper toy figures holding hands above the words let's work together":
      "Bonecos de papel de mãos dadas acima das palavras let's work together",
    "Brand applications": "Aplicações da marca",
    "Finally, the brand goes off screen in merchandise, from a bucket hat with the colorful wordmark to a t-shirt that carries the textured \"d\" on the back.":
      "Por fim, a marca sai da tela em produtos, de um bucket hat com o logotipo colorido a uma camiseta com o \"d\" texturizado nas costas.",
    "Blue bucket hat with the colorful dante wordmark on a green background": "Bucket hat azul com o logotipo colorido dante sobre fundo verde",
    "Person lying on a green field wearing a white t-shirt printed with the textured d": "Pessoa deitada num gramado usando uma camiseta branca estampada com o d texturizado",
    "Next project: pera pera": "Próximo projeto: pera pera",

    /* Projeto: pera pera ------------------------------------------------------ */
    "Pera Pera visual identity | Victor Dante": "Identidade visual Pera Pera | Victor Dante",
    "Pera Pera visual identity by Victor Dante: logo, color scheme, typography, packaging and stationery for a book brand.":
      "Identidade visual Pera Pera por Victor Dante: logo, paleta de cores, tipografia, embalagens e papelaria para uma marca de livros.",
    "The complete visual identity for the \"Pera Pera\" brand, including logo, color scheme, typography, packaging and stationery.":
      "A identidade visual completa da marca \"Pera Pera\", com logo, paleta de cores, tipografia, embalagens e papelaria.",
    "Pera Pera sticker on a red and lime card": "Adesivo Pera Pera sobre um cartão vermelho e lima",
    "Logo, color, typography, packaging and stationery": "Logo, cor, tipografia, embalagens e papelaria",
    "Pera Pera (ペラペラ) is a Japanese onomatopoeia for flipping through pages. The name became the starting point for a book brand whose whole experience revolves around the moment a new story arrives at the reader's door.":
      "Pera Pera (ペラペラ) é uma onomatopeia japonesa para o ato de folhear páginas. O nome virou o ponto de partida de uma marca de livros cuja experiência inteira gira em torno do momento em que uma nova história chega à porta do leitor.",
    "The logo is a heavy, rounded Japanese wordmark with small circles that read like rings or page holes. It is bold enough to stand on packaging and stickers, and friendly enough to feel like an invitation to read.":
      "O logo é um logotipo japonês pesado e arredondado, com pequenos círculos que lembram argolas ou furos de página. É forte o bastante para se sustentar em embalagens e adesivos, e simpático o bastante para soar como um convite à leitura.",
    "Animated Pera Pera logo in black, pink and lime on a blue background": "Logo Pera Pera animado em preto, rosa e lima sobre fundo azul",
    "An electric blue sets the stage, while lime, pink and red create contrast between the pieces. Black keeps the wordmark strong on any of them.":
      "Um azul elétrico monta o cenário, enquanto lima, rosa e vermelho criam contraste entre as peças. O preto mantém o logotipo forte em qualquer uma delas.",
    "Pera Pera color palette": "Paleta de cores Pera Pera",
    "Delivery and packaging": "Entrega e embalagem",
    "Every order comes with a lime book band that says 本が届きました (\"your book has arrived\"), and the kraft mailers carry the logo, a \"fragile\" label and a \"delivered\" stamp. Each touchpoint was designed to make unboxing feel like the first page of the story.":
      "Todo pedido vem com uma cinta lima que diz 本が届きました (\"seu livro chegou\"), e as caixas kraft levam o logo, uma etiqueta de \"frágil\" e um carimbo de \"entregue\". Cada ponto de contato foi pensado para que abrir a caixa pareça a primeira página da história.",
    "Book wrapped in a lime Pera Pera band on a blue background": "Livro envolto numa cinta lima Pera Pera sobre fundo azul",
    "Kraft mailer boxes with the Pera Pera logo, a fragile label and a delivered stamp": "Caixas kraft com o logo Pera Pera, uma etiqueta de frágil e um carimbo de entregue",
    "Business cards": "Cartões de visita",
    "The lime business cards carry the brand's tagline: 次の物語は、ここから。 (\"your next story starts here\").":
      "Os cartões de visita lima levam o slogan da marca: 次の物語は、ここから。 (\"sua próxima história começa aqui\").",
    "Lime Pera Pera business cards scattered in the air": "Cartões de visita lima da Pera Pera espalhados no ar",
    "Reading time": "Hora da leitura",
    "A door hanger that says 読書中 (\"reading\") lets the reader ask for a quiet moment, in two color combinations from the palette.":
      "Um aviso de porta que diz 読書中 (\"lendo\") deixa o leitor pedir um momento de silêncio, em duas combinações de cores da paleta.",
    "Pink 読書中 (“reading”) door hanger on a blue background": "Aviso de porta rosa 読書中 (“lendo”) sobre fundo azul",
    "Lime 読書中 (“reading”) door hanger on a pink background": "Aviso de porta lima 読書中 (“lendo”) sobre fundo rosa",
    "Previous project: dante": "Projeto anterior: dante",
    "Next project: TRE-AL": "Próximo projeto: TRE-AL",

    /* Projeto: TRE-AL --------------------------------------------------------- */
    "TRE-AL institutional design | Victor Dante": "Design institucional TRE-AL | Victor Dante",
    "Institutional design for TRE-AL by Victor Dante: Elections 2026 campaign, 30 years of the electronic voting machine identity and a comic book against misinformation.":
      "Design institucional para o TRE-AL por Victor Dante: campanha das Eleições 2026, identidade dos 30 anos da urna eletrônica e uma revista em quadrinhos contra a desinformação.",
    "Institutional design for the Regional Electoral Court of Alagoas: social media campaigns for the 2026 elections, the visual identity for the 30th anniversary of the electronic voting machine and a comic book against misinformation.":
      "Design institucional para o Tribunal Regional Eleitoral de Alagoas: campanhas para as redes sociais nas eleições de 2026, a identidade visual dos 30 anos da urna eletrônica e uma revista em quadrinhos contra a desinformação.",
    "Elections 2026 post: who decides the future is whoever shows up": "Post das Eleições 2026: quem decide o futuro é quem aparece",
    "Institutional design": "Design institucional",
    "TRE-AL, Regional Electoral Court of Alagoas": "TRE-AL, Tribunal Regional Eleitoral de Alagoas",
    "Social media, visual identity, editorial and print": "Redes sociais, identidade visual, editorial e impressos",
    "From February 2025 to May 2026 I worked as an in-house designer at the Regional Electoral Court of Alagoas (TRE-AL), creating graphic material for public information campaigns, social media, print and digital content focused on citizenship.":
      "De fevereiro de 2025 a maio de 2026 trabalhei como designer institucional no Tribunal Regional Eleitoral de Alagoas (TRE-AL), criando materiais gráficos para campanhas informativas, redes sociais, impressos e conteúdo digital com foco em cidadania.",
    "The challenge was always the same: turning electoral rules, deadlines and data into pieces that people actually stop to read, without losing the credibility of a public institution.":
      "O desafio era sempre o mesmo: transformar regras, prazos e dados eleitorais em peças que as pessoas realmente param para ler, sem perder a credibilidade de uma instituição pública.",
    "Elections 2026": "Eleições 2026",
    "For the 2026 elections the communication took on an electric blue and lime palette, gradient frames and sticker-like icons around real people. The carousels speak directly to young voters, while the stories explain how to report electoral crimes, list everything that can be done in the e-Título app and announce service drives across Alagoas.":
      "Nas eleições de 2026 a comunicação ganhou uma paleta de azul elétrico e lima, molduras em degradê e ícones em estilo adesivo ao redor de pessoas reais. Os carrosséis falam direto com os eleitores jovens, enquanto os stories explicam como denunciar crimes eleitorais, mostram tudo o que dá para fazer no app e-Título e divulgam mutirões de atendimento por toda Alagoas.",
    "Two-slide carousel: who decides the future is whoever shows up, and the numbers speak for themselves, with abstention data from 2024":
      "Carrossel de duas telas: quem decide o futuro é quem aparece, e os números falam por si, com dados de abstenção de 2024",
    "A carousel on turnout: almost 1 in 3 voters did not go to the polls in 2024.": "Um carrossel sobre comparecimento: quase 1 em cada 3 eleitores não foi às urnas em 2024.",
    "Story announcing a service drive across Alagoas, with a woman inside a colorful gradient frame":
      "Story anunciando um mutirão de atendimento em toda Alagoas, com uma mulher dentro de uma moldura colorida em degradê",
    "Story explaining how to report electoral crimes, with a woman inside a colorful gradient frame":
      "Story explicando como denunciar crimes eleitorais, com uma mulher dentro de uma moldura colorida em degradê",
    "Story listing everything that can be done in the e-Título app, with a smiling woman holding a phone":
      "Story listando tudo o que dá para fazer no app e-Título, com uma mulher sorrindo e segurando um celular",
    "Educational posts": "Posts educativos",
    "Pop culture is a shortcut to attention. A Stranger Things inspired post reminds teenagers that from 15 years old they can already get their voter registration, and the Sorting Hat explains what happens when a registration is cancelled.":
      "A cultura pop é um atalho para a atenção. Um post inspirado em Stranger Things lembra aos adolescentes que a partir dos 15 anos já dá para tirar o título de eleitor, e o Chapéu Seletor explica o que acontece quando o título é cancelado.",
    "Dark red post in the style of Stranger Things: it took so long that you are already old enough to vote":
      "Post vermelho-escuro no estilo de Stranger Things: demorou tanto que você já tem idade para votar",
    "Electronic voting machine wearing the Sorting Hat, asking what happens when a voter registration is cancelled":
      "Urna eletrônica usando o Chapéu Seletor, perguntando o que acontece quando o título é cancelado",
    "30 years of the electronic voting machine": "30 anos da urna eletrônica",
    "A visual identity for the 30th anniversary of the Brazilian electronic voting machine. In the logo, the zero of the number 30 becomes the machine's screen. The navy, light blue and cream palette runs through the carousels and a series of \"ID cards\" that present each model, like the UE2006, the first one with a fingerprint reader.":
      "Uma identidade visual para os 30 anos da urna eletrônica brasileira. No logo, o zero do número 30 vira a tela da urna. A paleta de azul-marinho, azul-claro e creme percorre os carrosséis e uma série de \"carteirinhas\" que apresentam cada modelo, como a UE2006, a primeira com leitor biométrico.",
    "Logo for 30 years of the electronic voting machine, in light blue": "Logo dos 30 anos da urna eletrônica, em azul-claro",
    "30 years of the electronic voting machine color palette": "Paleta de cores dos 30 anos da urna eletrônica",
    "Navy carousel cover asking if the electronic voting machine has a secret": "Capa de carrossel azul-marinho perguntando se a urna eletrônica tem segredo",
    "ID card for the UE2006 voting machine, with its date of birth, fingerprint reader and accessibility features":
      "Carteirinha da urna UE2006, com data de nascimento, leitor biométrico e recursos de acessibilidade",
    "Comic book": "Revista em quadrinhos",
    "\"Dona Maria e o Segredo da Informação de Verdade\" (Dona Maria and the secret of true information) is a free digital comic book that helps older people recognize misinformation. It has its own page, with the story behind it and the link to read it.":
      "\"Dona Maria e o Segredo da Informação de Verdade\" é uma revista em quadrinhos digital e gratuita que ajuda pessoas idosas a reconhecer a desinformação. Ela tem uma página própria, com a história por trás do projeto e o link para leitura.",
    "See the comic book": "Ver a revista em quadrinhos",
    "Printed comic book open on a green background, showing Dona Maria confused while looking at her phone":
      "Revista em quadrinhos impressa aberta sobre fundo verde, mostrando Dona Maria confusa olhando o celular",
    "Previous project: pera pera": "Projeto anterior: pera pera",
    "Next project: Dona Maria comic book": "Próximo projeto: revista Dona Maria",

    /* Projeto: revista Dona Maria -------------------------------------------- */
    "Dona Maria comic book | Victor Dante": "Revista em quadrinhos Dona Maria | Victor Dante",
    "Dona Maria e o Segredo da Informação de Verdade: a free digital comic book by TRE-AL against misinformation, designed by Victor Dante.":
      "Dona Maria e o Segredo da Informação de Verdade: uma revista em quadrinhos digital e gratuita do TRE-AL contra a desinformação, com design de Victor Dante.",
    "A free digital comic book by TRE-AL that helps older people recognize misinformation, check where a message comes from and look for reliable sources before sharing it.":
      "Uma revista em quadrinhos digital e gratuita do TRE-AL que ajuda pessoas idosas a reconhecer a desinformação, conferir de onde vem uma mensagem e buscar fontes confiáveis antes de compartilhar.",
    "Read the comic": "Ler a revista",
    "Comic book cover: Dona Maria e o Segredo da Informação de Verdade": "Capa da revista em quadrinhos: Dona Maria e o Segredo da Informação de Verdade",
    "TRE-AL, Media Education Project and Projeto 60+": "TRE-AL, Projeto de Educação Midiática e Projeto 60+",
    "Design of the comic book pieces, digital edition": "Design das peças da revista, edição digital",
    "\"Dona Maria e o Segredo da Informação de Verdade\" (Dona Maria and the secret of true information) was launched by the Regional Electoral Court of Alagoas in July 2026. It is part of the court's Media Education Project and of Projeto 60+, an initiative for the citizenship and digital inclusion of older people.":
      "\"Dona Maria e o Segredo da Informação de Verdade\" foi lançada pelo Tribunal Regional Eleitoral de Alagoas em julho de 2026. Ela faz parte do Projeto de Educação Midiática do tribunal e do Projeto 60+, uma iniciativa de cidadania e inclusão digital para pessoas idosas.",
    "The story follows Dona Maria through everyday situations: messages on her phone, links shared in family group chats, news that seems too urgent to be true. Along the way she learns to spot misleading content, check where what she receives comes from before passing it on and look for answers on the official channels of the Electoral Court.":
      "A história acompanha Dona Maria em situações do dia a dia: mensagens no celular, links compartilhados nos grupos da família, notícias urgentes demais para serem verdade. No caminho ela aprende a identificar conteúdos enganosos, conferir a origem do que recebe antes de repassar e buscar respostas nos canais oficiais da Justiça Eleitoral.",
    "Comic book cover: Dona Maria e o Segredo da Informação de Verdade, in orange letters on dark green":
      "Capa da revista em quadrinhos: Dona Maria e o Segredo da Informação de Verdade, em letras laranja sobre verde-escuro",
    "Beyond the elections": "Além das eleições",
    "The comic also covers digital safety, with tips about personal data, passwords and suspicious links, so its advice is useful every day and not only during the electoral period. The digital edition is free and can be used in educational activities by the Electoral Judicial School, the electoral zones and the court's citizenship and digital inclusion actions.":
      "A revista também fala de segurança digital, com dicas sobre dados pessoais, senhas e links suspeitos, então as orientações servem para o dia a dia e não só para o período eleitoral. A edição digital é gratuita e pode ser usada em atividades educativas da Escola Judiciária Eleitoral, das zonas eleitorais e nas ações de cidadania e inclusão digital do tribunal.",
    "Previous project: TRE-AL": "Projeto anterior: TRE-AL",
    "Next project: System Idiomas": "Próximo projeto: System Idiomas",

    /* Projeto: System Idiomas ------------------------------------------------- */
    "Flyers and social media cards for System Idiomas, a language school, by Victor Dante.":
      "Flyers e cards para redes sociais da System Idiomas, uma escola de idiomas, por Victor Dante.",
    "Flyers and social media posts for a language school, where every holiday and special date becomes a reason to talk about learning a new language.":
      "Flyers e posts para redes sociais de uma escola de idiomas, onde cada data comemorativa vira um motivo para falar sobre aprender um novo idioma.",
    "Pizza Party flyer with a boy eating a slice of pizza": "Flyer da Pizza Party com um menino comendo uma fatia de pizza",
    "Social media and print": "Redes sociais e impressos",
    "Event flyers, campaign cards and social media posts": "Flyers de eventos, cards de campanha e posts para redes sociais",
    "Since May 2026 I have been working as an in-house designer at System Idiomas, creating graphic material for campaigns, social media, print and digital content focused on turning followers into students.":
      "Desde maio de 2026 trabalho como designer institucional na System Idiomas, criando materiais gráficos para campanhas, redes sociais, impressos e conteúdo digital com foco em transformar seguidores em alunos.",
    "The brand's red runs through every piece. On top of it, each one gets its own typographic voice: soft, melting lettering for a party, a bold serif for a national holiday, a hand-drawn hashtag for the calendar.":
      "O vermelho da marca percorre todas as peças. Sobre ele, cada uma ganha sua própria voz tipográfica: um lettering macio, derretendo, para uma festa, uma serifa robusta para uma data comemorativa, uma hashtag desenhada à mão para o calendário.",
    "The Pizza Party flyer invites kids from preschool to 5th grade, with the date, time and place gathered in a sticker-like box so the information is easy to find at a glance. The same key visual was adapted for Instagram, as a feed post and as a story.":
      "O flyer da Pizza Party convida crianças do maternal ao 5º ano, com data, horário e local reunidos num box em estilo adesivo para que a informação seja fácil de achar num relance. O mesmo key visual foi adaptado para o Instagram, como post no feed e como story.",
    "Pizza Party flyer with a boy eating a slice of pizza and the event information": "Flyer da Pizza Party com um menino comendo uma fatia de pizza e as informações do evento",
    "Phone mockups showing the Pizza Party campaign as an Instagram feed post, on the System Idiomas profile and as a story":
      "Mockups de celular mostrando a campanha Pizza Party como post no feed do Instagram, no perfil da System Idiomas e como story",
    "Social media": "Redes sociais",
    "Brazilian Cinema Day becomes \"our films have conquered the world, and so can you\". An \"#AnotaAí\" (\"write it down\") series lists the important dates of 2026, and a São João post imagines Brazil's June festivals in English.":
      "O Dia do Cinema Brasileiro vira \"nossos filmes conquistaram o mundo, e você também pode\". Uma série \"#AnotaAí\" lista as datas importantes de 2026, e um post de São João imagina como seria a festa junina em inglês.",
    "Red post for Brazilian Cinema Day: our films have conquered the world, and so can you":
      "Post vermelho para o Dia do Cinema Brasileiro: nossos filmes conquistaram o mundo, e você também pode",
    "Red post with the hand-drawn hashtag AnotaAí, important dates": "Post vermelho com a hashtag AnotaAí desenhada à mão, datas importantes",
    "Red post asking what if São João were in English": "Post vermelho perguntando: e se o São João fosse em inglês?",
    "Previous project: Dona Maria comic book": "Projeto anterior: revista Dona Maria",
    "Next project: Clauss": "Próximo projeto: Clauss",

    /* Projeto: Clauss --------------------------------------------------------- */
    "Clauss pizzeria rebranding | Victor Dante": "Rebranding da pizzaria Clauss | Victor Dante",
    "Clauss Pizzaria rebranding by Victor Dante: logo, color palette, typography and social media.":
      "Rebranding da Clauss Pizzaria por Victor Dante: logo, paleta de cores, tipografia e redes sociais.",
    "A rebranding for Clauss, a pizzeria: a new crest-shaped logo with a slice of pizza, a red, green and cream palette and a playful lettering for social media.":
      "Um rebranding para a Clauss, uma pizzaria: um novo logo em forma de brasão com uma fatia de pizza, uma paleta vermelha, verde e creme e um lettering divertido para as redes sociais.",
    "Clauss Pizzaria logo in cream on red": "Logo da Clauss Pizzaria em creme sobre vermelho",
    "Logo, color, typography and social media": "Logo, cor, tipografia e redes sociais",
    "Clauss needed an identity as warm and inviting as a pizza night with friends. The new logo places the name inside a crest whose outline works like a crust, with a slice of pepperoni pizza breaking out of the top.":
      "A Clauss precisava de uma identidade tão acolhedora e convidativa quanto uma noite de pizza com os amigos. O novo logo coloca o nome dentro de um brasão cujo contorno funciona como uma borda de pizza, com uma fatia de pepperoni escapando pelo topo.",
    "A condensed, heavy typeface keeps the name readable on a box, a sign or a phone screen, and a simpler wordmark without the crest works at smaller sizes.":
      "Uma tipografia condensada e pesada mantém o nome legível numa caixa, numa fachada ou na tela do celular, e um logotipo mais simples, sem o brasão, funciona nos tamanhos menores.",
    "Clauss rebranding panel: logo on red, the lettering dia de pizza on cream and the wordmark on green":
      "Painel do rebranding da Clauss: logo sobre vermelho, o lettering dia de pizza sobre creme e o logotipo sobre verde",
    "Tomato red, basil green and a mozzarella cream: the palette comes straight from the pizza, and works in any combination of background and logo.":
      "Vermelho tomate, verde manjericão e um creme de muçarela: a paleta vem direto da pizza e funciona em qualquer combinação de fundo e logo.",
    "Clauss color palette": "Paleta de cores Clauss",
    "Clauss Pizzaria crest logo in cream on red": "Logo em brasão da Clauss Pizzaria em creme sobre vermelho",
    "Clauss Pizzaria wordmark in cream on dark green": "Logotipo da Clauss Pizzaria em creme sobre verde-escuro",
    "Pizza day": "Dia de pizza",
    "For social media, a loose handmade lettering (\"dia de pizza!\", pizza day) sits next to short reminders in the condensed typeface, like \"today is pizza dinner day!\", giving the posts a casual, friendly tone.":
      "Para as redes sociais, um lettering solto feito à mão (\"dia de pizza!\") aparece ao lado de lembretes curtos na tipografia condensada, como \"hoje é dia de jantar pizza!\", dando aos posts um tom descontraído e próximo.",
    "Red handmade lettering reading dia de pizza on cream, with a reminder that today is pizza dinner day and a pizza slice":
      "Lettering vermelho feito à mão escrito dia de pizza sobre creme, com um lembrete de que hoje é dia de jantar pizza e uma fatia de pizza",
    "Previous project: System Idiomas": "Projeto anterior: System Idiomas",
    "Next project: Freela | Motion": "Próximo projeto: Freela | Motion",

    /* Projeto: Freela | Motion ------------------------------------------------ */
    "Freela | Motion": "Freela | Motion",
    "A kinetic typography piece in After Effects: the word \"Freela\" switches typefaces to say I'm open for freelance work.":
      "Uma peça de tipografia cinética no After Effects: a palavra \"Freela\" troca de fonte para avisar que estou aberto a freelas.",
    ": Freela motion": ": motion Freela",
    "Freela | Motion | Victor Dante": "Freela | Motion | Victor Dante",
    "Freela, a kinetic typography piece by Victor Dante made in After Effects: the word Freela switches between typefaces to say he is open for freelance work.":
      "Freela, uma peça de tipografia cinética de Victor Dante feita no After Effects: a palavra Freela troca de fonte para avisar que ele está aberto a freelas.",
    "A short kinetic typography piece made in After Effects to let people know I'm open for freelance work.":
      "Uma peça curta de tipografia cinética feita no After Effects para avisar que estou aberto a freelas.",
    "Animation of the word Freela switching between pixel and script typefaces": "Animação da palavra Freela alternando entre fontes pixel e script",
    "Motion design": "Motion design",
    "Personal project": "Projeto pessoal",
    "Kinetic typography in After Effects": "Tipografia cinética no After Effects",
    "\"Manda freela\" is Brazilian slang for \"send me freelance work\". This piece turns that line into motion: on a dark, paper-like background, the word \"Freela\" jumps between a pixel sans-serif and a pixel script, while a short note introduces me as a graphic designer, UI/UX designer and creative developer who is available for new projects.":
      "\"Manda freela\" é o jeito brasileiro de pedir trabalho freelance. Esta peça transforma essa frase em movimento: sobre um fundo escuro com textura de papel, a palavra \"Freela\" pula entre uma fonte pixel sem serifa e uma pixel script, enquanto um texto curto me apresenta como designer gráfico, designer UI/UX e desenvolvedor criativo disponível para novos projetos.",
    "Freela animation: the word Freela switching between pixel and script typefaces on a dark background":
      "Animação Freela: a palavra Freela alternando entre fontes pixel e script sobre fundo escuro",
    "Previous project: Clauss": "Projeto anterior: Clauss",
    "Read about the comic": "Saiba mais sobre a HQ",

    /* Projeto: Ícone do Zip, by LinkedIn --------------------------------------- */
    "Icon | Zip, by LinkedIn": "Ícone | Zip, by LinkedIn",
    "A temporary profile icon for Zip, LinkedIn's puzzle game, made after the Zip team reached out to me on LinkedIn.":
      "Um ícone temporário para o perfil do Zip, o jogo de quebra-cabeça do LinkedIn, feito depois que o time do Zip me procurou no LinkedIn.",
    ": Zip icon": ": ícone do Zip",
    "Hand-drawn Zip mascot waving next to the digital Zip icon": "Mascote do Zip desenhado à mão acenando ao lado do ícone digital do Zip",
    "Next project: Zip icon": "Próximo projeto: Ícone do Zip",
    "Previous project: Zip icon": "Projeto anterior: Ícone do Zip",
    "A temporary profile icon for Zip, LinkedIn's daily path puzzle, made at the invitation of the Zip team.":
      "Um ícone temporário para o perfil do Zip, o quebra-cabeça diário de caminhos do LinkedIn, feito a convite do time do Zip.",
    "Hand-drawn Zip mascot waving": "Mascote do Zip desenhado à mão acenando",
    "Icon design": "Design de ícone",
    "Zip, a puzzle by LinkedIn": "Zip, a puzzle by LinkedIn",
    "Temporary profile icon, hand-drawn and digital versions": "Ícone temporário de perfil, nas versões desenhada à mão e digital",
    "It all started on LinkedIn. The team behind Zip, LinkedIn's daily puzzle game, reached out to me with a request: a temporary icon for their page.":
      "Tudo começou no LinkedIn. O time por trás do Zip, o jogo de quebra-cabeça diário do LinkedIn, entrou em contato comigo com um pedido: um ícone temporário para a página deles.",
    "The idea comes straight from the game. In Zip you complete a single path through the grid, so the icon's character is that path: a winding orange line with a white dot at each end, bending into the shape of a Z and doubling as a smiling face.":
      "A ideia vem direto do jogo. No Zip você completa um único caminho pela grade, então o personagem do ícone é esse caminho: uma linha laranja sinuosa com um ponto branco em cada ponta, que se dobra no formato de um Z e vira também um rosto sorridente.",
    "Two versions": "Duas versões",
    "I sent the team two versions of the same idea. The first is hand-drawn: the path becomes a little tile with arms and legs, waving hello with loose, wobbly outlines. The second is a clean digital version that keeps only the essentials, the path, the two dots and the face, with a soft orange gradient on a peach background.":
      "Mandei para o time duas versões da mesma ideia. A primeira é desenhada à mão: o caminho vira uma pequena peça com braços e pernas, acenando, com contornos soltos e tremidos. A segunda é uma versão digital e limpa que mantém só o essencial, o caminho, os dois pontos e o rosto, com um degradê laranja suave sobre um fundo pêssego.",
    "Hand-drawn Zip mascot: an orange tile with the Zip path, a smiling face, arms and legs, waving":
      "Mascote do Zip desenhado à mão: uma peça laranja com o caminho do Zip, um rosto sorridente, braços e pernas, acenando",
    "Digital Zip icon: an orange path with white dots at each end and a smiling face on a peach background":
      "Ícone digital do Zip: um caminho laranja com pontos brancos nas pontas e um rosto sorridente sobre fundo pêssego",
    "On the page": "Na página",
    "The hand-drawn version became the profile picture of the Zip, a puzzle by LinkedIn page, which has more than 58 million followers.":
      "A versão desenhada à mão virou a foto de perfil da página Zip, a puzzle by LinkedIn, que tem mais de 58 milhões de seguidores.",
    "Header of the Zip, a puzzle by LinkedIn page, with the hand-drawn mascot as its profile picture":
      "Cabeçalho da página Zip, a puzzle by LinkedIn, com o mascote desenhado à mão como foto de perfil",

    /* SEO: títulos, descrições, H1 ocultos e textos alternativos ---------- */
    "Victor Dante | Graphic Designer & Front-end Developer":
      "Victor Dante | Designer Gráfico e Desenvolvedor Front-end",
    "Portfolio of Victor Dante, graphic designer, UI/UX designer and front-end developer in Maceió, Brazil. Visual identity, motion design and websites.":
      "Portfólio de Victor Dante, designer gráfico, designer UI/UX e desenvolvedor front-end em Maceió, Alagoas. Identidade visual, motion design e sites.",
    "Victor Dante: graphic designer, UI/UX designer and front-end developer in Maceió, Brazil":
      "Victor Dante: designer gráfico, designer UI/UX e desenvolvedor front-end em Maceió, Alagoas",
    "Black and white portrait of Victor Dante":
      "Retrato em preto e branco de Victor Dante",
    "Work: Branding, Motion & Web Design | Victor Dante":
      "Trabalhos: Branding, Motion e Web Design | Victor Dante",
    "Selected projects by Victor Dante: visual identities, rebranding, motion design, social media and institutional campaigns for brands in Brazil.":
      "Projetos de Victor Dante: identidades visuais, rebranding, motion design, redes sociais e campanhas institucionais para marcas no Brasil.",
    "Work: branding, motion and web design projects by Victor Dante":
      "Trabalhos: projetos de branding, motion e web design de Victor Dante",
    "About Victor Dante | Designer & Developer in Maceió":
      "Sobre Victor Dante | Designer e Desenvolvedor em Maceió",
    "Victor Dante is a designer in Maceió, Brazil, working across visual design, UI/UX and front-end development. Skills, tools, experience and education.":
      "Victor Dante é designer em Maceió, Alagoas, e atua com design visual, UI/UX e desenvolvimento front-end. Habilidades, ferramentas, experiência e formação.",
    "dante: Personal Visual Identity | Victor Dante":
      "dante: Identidade Visual Pessoal | Victor Dante",
    "dante, the personal brand of Victor Dante: a lowercase d logo filled with textures and color, with palette, typography, motion and printed applications.":
      "dante, a marca pessoal de Victor Dante: um logo em d minúsculo preenchido com texturas e cores, com paleta, tipografia, motion e aplicações impressas.",
    "Pera Pera: Book Brand Identity & Packaging | Victor Dante":
      "Pera Pera: Identidade Visual e Embalagens | Victor Dante",
    "Visual identity for Pera Pera, a book brand: Japanese wordmark, color palette, packaging, book bands, business cards and stationery by Victor Dante.":
      "Identidade visual da Pera Pera, uma marca de livros: logotipo japonês, paleta de cores, embalagens, cintas de livro, cartões e papelaria por Victor Dante.",
    "TRE-AL Institutional Design & Campaigns | Victor Dante":
      "TRE-AL: Design Institucional e Campanhas | Victor Dante",
    "Institutional design for TRE-AL, the Regional Electoral Court of Alagoas: Elections 2026 campaign, 30 years of the electronic voting machine and social posts.":
      "Design institucional para o TRE-AL, Tribunal Regional Eleitoral de Alagoas: campanha Eleições 2026, 30 anos da urna eletrônica e posts para redes sociais.",
    "Dona Maria: Comic Book Against Fake News | Victor Dante":
      "Dona Maria: HQ Contra Fake News | Victor Dante",
    "Dona Maria e o Segredo da Informação de Verdade, a free digital comic book by TRE-AL that helps older people spot fake news. Design by Victor Dante.":
      "Dona Maria e o Segredo da Informação de Verdade, revista digital gratuita do TRE-AL que ajuda pessoas idosas a identificar fake news. Design de Victor Dante.",
    "System Idiomas: Social Media & Flyer Design | Victor Dante":
      "System Idiomas: Design para Redes Sociais | Victor Dante",
    "Social media posts and event flyers for System Idiomas, a language school, built around the brand's red and custom lettering. Design by Victor Dante.":
      "Posts para redes sociais e flyers de eventos da System Idiomas, escola de idiomas, com o vermelho da marca e letterings próprios. Design de Victor Dante.",
    "Clauss Pizzaria: Rebranding & Logo Design | Victor Dante":
      "Clauss Pizzaria: Rebranding e Logo | Victor Dante",
    "Rebranding for Clauss Pizzaria by Victor Dante: crest logo with a pizza slice, red, green and cream palette, typography and lettering for social media.":
      "Rebranding da Clauss Pizzaria por Victor Dante: logo em brasão com fatia de pizza, paleta vermelha, verde e creme, tipografia e lettering para redes sociais.",
    "Freela: Kinetic Typography in After Effects | Victor Dante":
      "Freela: Tipografia Cinética no After Effects | Victor Dante",
    "Freela, a kinetic typography motion piece made in After Effects by Victor Dante: the word Freela switches typefaces to announce freelance availability.":
      "Freela, peça de motion com tipografia cinética feita no After Effects por Victor Dante: a palavra Freela troca de fonte para anunciar que ele está aberto a freelas.",
    "Zip, a puzzle by LinkedIn: Profile Icon | Victor Dante":
      "Zip, a puzzle by LinkedIn: Ícone de Perfil | Victor Dante",
    "A temporary profile icon for Zip, LinkedIn's daily puzzle game, by Victor Dante: a hand-drawn mascot and a digital version of the Zip path, born from a conversation on LinkedIn.":
      "Um ícone temporário de perfil para o Zip, o jogo de quebra-cabeça diário do LinkedIn, por Victor Dante: um mascote desenhado à mão e uma versão digital do caminho do Zip, nascidos de uma conversa no LinkedIn.",
    "Hand-drawn Zip mascot waving next to the digital Zip icon on a peach background":
      "Mascote do Zip desenhado à mão acenando ao lado do ícone digital do Zip sobre fundo pêssego",
    "Paper Toys: After Effects Motion Study | Victor Dante":
      "Paper Toys: Estudo de Motion no After Effects | Victor Dante",
    "Paper Toys, an After Effects motion study by Victor Dante: a chain of halftone paper dolls holding hands, inspired by All His Children, by Mike Burton.":
      "Paper Toys, estudo de motion no After Effects por Victor Dante: uma corrente de bonecos de papel em retícula de mãos dadas, inspirada em All His Children, de Mike Burton.",
    "An After Effects motion study inspired by \"The Atlantic - All His Children\", by Mike Burton: a chain of paper dolls holding hands that says \"let's work together\".":
      "Um estudo de motion no After Effects inspirado em \"The Atlantic - All His Children\", de Mike Burton: uma corrente de bonecos de papel de mãos dadas que diz \"let's work together\" (vamos trabalhar juntos).",
    "Animation of three halftone paper dolls holding hands above the words let's work together":
      "Animação de três bonecos de papel em retícula de mãos dadas acima das palavras let's work together",
    "Animation in After Effects":
      "Animação no After Effects",
    "Three paper dolls cut from the same strip hold hands in a loop while their halftone texture shifts from frame to frame, as if the paper itself were alive.":
      "Três bonecos de papel recortados da mesma tira dão as mãos em loop, enquanto a textura de retícula muda a cada quadro, como se o próprio papel estivesse vivo.",
    "Paper Toys animation: three halftone paper dolls holding hands above the words let's work together":
      "Animação Paper Toys: três bonecos de papel em retícula de mãos dadas acima das palavras let's work together",
    "Previous project: Freela | Motion":
      "Projeto anterior: Freela | Motion",
    "Next project: Paper Toys":
      "Próximo projeto: Paper Toys",
    "Three halftone paper dolls holding hands, from the Paper Toys motion study":
      "Três bonecos de papel em retícula de mãos dadas, do estudo de motion Paper Toys",
    "dante logo on a vintage TV screen":
      "Logo dante na tela de uma TV antiga",
    "Pera Pera logo and visual identity":
      "Logo e identidade visual da Pera Pera",
    "TRE-AL Elections 2026 campaign post":
      "Post da campanha Eleições 2026 do TRE-AL",
    "Open Dona Maria comic book":
      "Revista em quadrinhos Dona Maria aberta",
    "Red System Idiomas social media posts":
      "Posts vermelhos da System Idiomas para redes sociais",
    "The word Freela animated in pixel typefaces":
      "A palavra Freela animada em fontes pixel",
    "dante logo spelled with fruit and sticker shapes":
      "Logo dante escrito com frutas e adesivos",
    "Language": "Idioma",
    "Email": "E-mail",
    "Motion": "Motion",
    "Front-end": "Front-end",
    "Designer · UI/UX · Front-end": "Designer · UI/UX · Front-end",
  };


  const JA = {
    /* 日本語: chave = texto em inglês (igual ao PT acima) ------------------- */
    "Skip to content": "コンテンツへスキップ",
    "Main": "メイン",
    "Home": "ホーム",
    "About me": "プロフィール",
    "Work": "作品",
    "Contact": "お問い合わせ",
    "Let's work together": "一緒に仕事をしましょう",
    "Let's": "一緒に",
    "work": "仕事を",
    "together": "しましょう",
    "Phone": "電話",
    "Location": "所在地",
    "Maceió, Brazil": "ブラジル・マセイオ",
    "Connect with me": "SNSでつながる",
    "Name": "お名前",
    "Your name": "お名前を入力",
    "name@domain.com": "name@domain.com",
    "Subject": "件名",
    "What is this about?": "ご用件は？",
    "Message": "メッセージ",
    "Tell me about your project": "プロジェクトについて教えてください",
    "Send message": "メッセージを送信",
    "Enter your name.": "お名前を入力してください。",
    "Enter your email.": "メールアドレスを入力してください。",
    "Enter a valid email, like name@domain.com.": "有効なメールアドレスを入力してください（例：name@domain.com）。",
    "Enter a subject.": "件名を入力してください。",
    "Write at least 10 characters.": "10文字以上で入力してください。",
    "Fix the highlighted fields and send again.": "赤く表示された項目を修正して、もう一度送信してください。",
    "Opening your email app. If nothing opens, write to {to}.": "メールアプリを開いています。開かない場合は {to} までご連絡ください。",
    "Back to top": "トップへ戻る",
    "cool project here": "すてきなプロジェクトをここに",
    "See more": "詳しく見る",
    "View all work": "すべての作品を見る",
    "Back to work": "作品一覧へ戻る",
    "Projects": "プロジェクト",
    "Type": "種類",
    "Client": "クライアント",
    "Scope": "範囲",
    "About the project": "プロジェクトについて",
    "Color": "カラー",
    "Red": "レッド",
    "Green": "グリーン",
    "Blue": "ブルー",
    "Yellow": "イエロー",
    "Black": "ブラック",
    "White": "ホワイト",
    "Cream": "クリーム",
    "Lime": "ライム",
    "Pink": "ピンク",
    "Navy": "ネイビー",
    "Light green": "ライトグリーン",
    "Drag the cards around, or focus one and use the arrow keys.": "カードをドラッグして動かすか、カードにフォーカスして矢印キーで動かせます。",
    "Victor Dante | Creative Developer & Designer": "Victor Dante | クリエイティブデベロッパー＆デザイナー",
    "Portfolio of Victor Dante, a creative developer and designer based in Maceió, Brazil. Graphic design, UI/UX and front-end development.": "ブラジル・マセイオを拠点とするクリエイティブデベロッパー兼デザイナー、Victor Dante のポートフォリオ。グラフィックデザイン、UI/UX、フロントエンド開発。",
    "Hello!": "こんにちは！",
    "I'm Victor Dante, a creative developer and designer based in Brazil. I bring together graphic design, UI/UX and front-end development to build digital experiences that look intentional and work smoothly.": "ブラジルを拠点とするクリエイティブデベロッパー兼デザイナーの Victor Dante です。グラフィックデザイン、UI/UX、フロントエンド開発を組み合わせて、意図が伝わる見た目と心地よい使い心地をあわせ持つデジタル体験をつくっています。",
    "Portrait of Victor Dante. Press Enter to resize and move.": "Victor Dante のポートレート。Enter キーでサイズ変更と移動ができます。",
    "Selected work": "主な作品",
    "Motion | Paper Toys": "モーション | Paper Toys",
    "An After Effects motion study inspired by \"The Atlantic - All His Children\", by Mike Burton.": "Mike Burton の「The Atlantic - All His Children」に着想を得た After Effects のモーションスタディ。",
    "Visual Identity | dante": "ビジュアルアイデンティティ | dante",
    "The complete visual identity for my personal brand \"dante\", including logo, color scheme, and typography.": "パーソナルブランド「dante」のビジュアルアイデンティティ一式。ロゴ、配色、タイポグラフィを含みます。",
    ": dante visual identity": "：dante ビジュアルアイデンティティ",
    "Visual Identity | pera pera": "ビジュアルアイデンティティ | pera pera",
    "The complete visual identity for the \"Pera Pera\" brand, including logo, color scheme, and typography.": "ブランド「Pera Pera」のビジュアルアイデンティティ一式。ロゴ、配色、タイポグラフィを含みます。",
    ": pera pera visual identity": "：pera pera ビジュアルアイデンティティ",
    "Institutional | TRE-AL": "公共機関 | TRE-AL",
    "Campaigns for the 2026 elections, the visual identity for the 30th anniversary of the electronic voting machine and a comic book against fake news.":
      "2026年選挙のキャンペーン、電子投票機30周年のビジュアルアイデンティティ、そしてフェイクニュース対策の漫画。",
    ": TRE-AL institutional design": "：TRE-AL 公共機関のデザイン",
    "Comic book | TRE-AL": "漫画 | TRE-AL",
    "Dona Maria, a free digital comic book that helps older people recognize misinformation and fake news.": "高齢者が誤情報やフェイクニュースを見分けられるようにする、無料のデジタル漫画『Dona Maria』。",
    ": Dona Maria comic book": "：漫画『Dona Maria』",
    "Social media | System Idiomas": "SNS | System Idiomas",
    "Flyers and social media posts for a language school, built around the brand's red and custom lettering for each occasion.":
      "語学学校のチラシとSNS投稿。ブランドカラーの赤を軸に、行事ごとにオリジナルのレタリングを使っています。",
    "Rebranding | Clauss": "リブランディング | Clauss",
    "A new logo, palette and social media lettering for Clauss, a pizzeria.": "ピザ店 Clauss のための新しいロゴ、カラーパレット、SNS用レタリング。",
    ": Clauss rebranding": "：Clauss リブランディング",
    "Work | Victor Dante": "作品 | Victor Dante",
    "Selected work by Victor Dante: visual identities, motion, editorial pieces and interface projects.": "Victor Dante の作品集：ビジュアルアイデンティティ、モーション、エディトリアル、インターフェースのプロジェクト。",
    "Highlight": "注目",
    "The complete visual identity for my personal brand \"dante\": a lowercase \"d\" that can be filled with textures, objects and color, applied to print, motion and merchandise.": "パーソナルブランド「dante」のビジュアルアイデンティティ一式。テクスチャやオブジェクト、色で満たせる小文字の「d」を、印刷物、モーション、グッズに展開しています。",
    "About me | Victor Dante": "プロフィール | Victor Dante",
    "Designer based in Maceió, Brazil, expanding from visual design into UI/UX and front-end development. Toolkit, experience and education.": "ブラジル・マセイオを拠点に、ビジュアルデザインから UI/UX、フロントエンド開発へと領域を広げているデザイナー。使用ツール、経歴、学歴。",
    "ID card": "IDカード",
    "ID card. Drag to scribble on it. Double-click, or press Enter, to move it.": "IDカード。ドラッグして落書きできます。ダブルクリックまたは Enter キーで移動できます。",
    "Victor Dante's ID card": "Victor Dante の IDカード",
    "“Hello, my name is dante” name tag sticker": "「Hello, my name is dante」の名札ステッカー",
    "I design, prototype and build digital experiences.": "デジタル体験をデザインし、プロトタイプをつくり、実装します。",
    "I'm Victor Dante, a designer based in Maceió, Brazil. My roots are in visual design, and I'm currently expanding my practice into UI/UX and front-end development.": "ブラジル・マセイオを拠点とするデザイナー、Victor Dante です。ビジュアルデザインを出発点に、現在は UI/UX とフロントエンド開発へと活動の幅を広げています。",
    "Visual Design": "ビジュアルデザイン",
    "Brand identities, editorial pieces, campaigns, motion graphics, social media and environmental graphics. I care about hierarchy, rhythm and the details that make a visual system feel intentional.":
      "ブランドアイデンティティ、エディトリアル、キャンペーン、モーショングラフィックス、SNS、サイン・空間グラフィック。情報の階層やリズム、そしてビジュアルシステムに意図を感じさせる細部を大切にしています。",
    "UI/UX Design": "UI/UX デザイン",
    "I approach interfaces through structure and behavior: user flows, wireframes, prototypes and visual systems that balance clarity, usability and personality.":
      "インターフェースは、構造と振る舞いから考えます。ユーザーフロー、ワイヤーフレーム、プロトタイプ、そして分かりやすさ・使いやすさ・個性のバランスがとれたビジュアルシステムをつくります。",
    "I turn designs into responsive interfaces with HTML, CSS and JavaScript, while continuing to develop my skills with React and modern web workflows.": "HTML、CSS、JavaScript でデザインをレスポンシブなインターフェースに落とし込みながら、React やモダンな Web 開発のワークフローも学び続けています。",
    "TOOLKIT": "ツール",
    "Software and technologies": "ソフトウェアと技術",
    "The tools I use to move from visual concept to interface and implementation.": "ビジュアルのコンセプトからインターフェース、実装までをつなぐツール。",
    "Design & Motion": "デザイン＆モーション",
    "Workflow": "ワークフロー",
    "Responsive Design": "レスポンシブデザイン",
    "Prototyping": "プロトタイピング",
    "CAREER": "キャリア",
    "Professional experience": "職歴",
    "A short timeline of where I've worked, what I've learned, and how my practice has evolved.":
      "これまで働いてきた場所、学んできたこと、そして仕事のスタイルの変化をまとめた年表です。",
    "to": "〜",
    "NOW": "現在",
    "In-house Designer": "インハウスデザイナー",
    "Current": "在職中",
    "Areas of work": "担当分野",
    "Campaigns": "キャンペーン",
    "Social Media": "SNS",
    "I create visual materials for the school’s marketing and communication, including social media content, promotional campaigns, event materials, digital and print assets, and visual identities for specific initiatives. I also work with art direction, typography, composition, and visual hierarchy while maintaining brand consistency across different formats and channels.": "学校のマーケティングとコミュニケーションのためのビジュアル制作を担当しています。SNSのコンテンツ、販促キャンペーン、イベント用ツール、デジタルと印刷物、個別の取り組みのためのビジュアルアイデンティティなど。アートディレクション、タイポグラフィ、レイアウト、情報の階層にも携わり、さまざまなフォーマットやチャネルでブランドの一貫性を保っています。",
    "In-house Designer — Intern": "インハウスデザイナー（インターン）",
    "Illustration": "イラストレーション",
    "Public Communication": "公共コミュニケーション",
    "I created graphic materials for informational campaigns, social media, print collateral, and digital content focused on citizenship, informed voting, and electoral transparency. I worked with communication, legal, and administrative teams to translate technical and legal content into clear and accessible visual formats.":
      "市民参加、情報に基づいた投票、選挙の透明性をテーマに、広報キャンペーン、SNS、印刷物、デジタルコンテンツのグラフィックを制作しました。広報・法務・総務の各チームと連携し、専門的な内容や法律の内容を、分かりやすく誰にでも届くビジュアルに置き換えました。",
    "Educational": "教育",
    "Institutional": "公共機関",
    "Print": "印刷物",
    "I designed visual materials for institutional and educational campaigns across digital and print media. I turned technical and regulatory information into clear, accessible content, working with the communication and compliance teams to keep the Council’s visual identity consistent.":
      "デジタルと印刷の両方で、広報・啓発キャンペーンのビジュアルを制作しました。専門的な情報や規制に関する情報を分かりやすいコンテンツに整理し、広報・コンプライアンスの各チームと連携して、薬剤師会のビジュアルアイデンティティを一貫して運用しました。",
    "Ili Agency": "Ili（広告代理店）",
    "Graphic Designer — Intern": "グラフィックデザイナー（インターン）",
    "Digital Campaigns": "デジタルキャンペーン",
    "Client Work": "クライアントワーク",
    "I developed visual solutions for a variety of clients, including Dentalis, Moura Dubeux, and Roomo. I created digital campaigns and graphic materials that communicated each brand’s identity and values, translating briefs into creative and functional pieces across different platforms.": "Dentalis、Moura Dubeux、Roomo など、さまざまなクライアントのビジュアルを手がけました。各ブランドの個性と価値観を伝えるデジタルキャンペーンやグラフィックを制作し、ブリーフを複数のプラットフォームで機能するクリエイティブに落とし込みました。",
    "LEARNING": "学び",
    "Education & certifications": "学歴と資格",
    "A mix of formal education, courses and events that shape the way I work.": "いまの仕事のしかたを形づくっている、大学での学び、講座、イベント。",
    "Education": "学歴",
    "Bachelor's Degree": "学士課程（在学中）",
    "Federal University of Alagoas (UFAL)": "アラゴアス連邦大学（UFAL）",
    "Expected graduation · mid-2027": "2027年上半期 卒業予定",
    "Courses": "講座",
    "Design and Launching of Digital Products": "デジタルプロダクトの設計とローンチ",
    "From Figma to Code: Complete Web Interface Design Course": "Figma からコードへ：Web インターフェースデザイン完全講座",
    "Front-end Development Training in HTML, CSS, and JavaScript": "HTML・CSS・JavaScript によるフロントエンド開発トレーニング",
    "Cybersecurity Fundamentals": "サイバーセキュリティの基礎",
    "English Fundamentals: Successful Networking and Interviews": "英語の基礎：ネットワーキングと面接を成功させる",
    "Events": "イベント",
    "dante visual identity | Victor Dante": "dante ビジュアルアイデンティティ | Victor Dante",
    "dante, the personal visual identity of Victor Dante: logo, color scheme, typography and applications.": "Victor Dante のパーソナルビジュアルアイデンティティ「dante」：ロゴ、配色、タイポグラフィ、アプリケーション。",
    "The complete visual identity for my personal brand \"dante\", including logo, color scheme, typography and a set of applications in print, motion and merchandise.": "パーソナルブランド「dante」のビジュアルアイデンティティ一式。ロゴ、配色、タイポグラフィ、そして印刷物、モーション、グッズへの展開を含みます。",
    "Animation of the dante d drawn with sketchy lines": "ラフな線で描かれる dante の「d」のアニメーション",
    "Visual identity": "ビジュアルアイデンティティ",
    "Personal brand": "パーソナルブランド",
    "Logo, color, typography, motion and brand applications": "ロゴ、カラー、タイポグラフィ、モーション、ブランド展開",
    "dante is the name I sign my work with, and this project is the identity behind it. I wanted a brand that felt personal without being serious all the time: something that could be bold on a black background, playful on a sticker and still recognizable at the size of a favicon.": "dante は私が作品に添える名前で、このプロジェクトはその名前のためのアイデンティティです。いつもまじめすぎない、個人らしさのあるブランドにしたいと考えました。黒い背景では力強く、ステッカーでは遊び心があり、ファビコンのサイズでも見分けられるもの。",
    "Everything starts from a lowercase \"d\". Its simple, rounded shape works like a container that can be filled with textures, halftones, patterns and objects, so the mark changes with each application while keeping the same silhouette.":
      "すべては小文字の「d」から始まります。シンプルで丸みのある形は、テクスチャ、網点、パターン、オブジェクトを入れられる器のような役割を果たします。だからシルエットは変わらないまま、展開先ごとにマークの表情が変わります。",
    "The dante logo, a white lowercase d on black, above six versions of the d filled with different textures on a green background": "黒地に白い小文字の d の dante ロゴと、その下に並ぶ、緑の背景でさまざまなテクスチャを入れた6つの d",
    "The main mark and some of its textured variations.": "メインのマークと、テクスチャを入れたバリエーションの一部。",
    "A short palette of saturated primaries, anchored by black and white. It is the same palette that runs through this website: each page takes one of these colors as its accent.": "黒と白を軸にした、彩度の高い原色の少数のパレット。このサイトでも同じパレットを使っていて、各ページがいずれかの色をアクセントにしています。",
    "dante color palette": "dante のカラーパレット",
    "A playful wordmark": "遊び心のあるロゴタイプ",
    "Alongside the minimal monogram there is an expressive, collage-like version of the name, built from fruits, labels and sticker shapes. It brings in the everyday, pop references that shape my work and gives the brand room to be loud when the context asks for it.":
      "ミニマルなモノグラムとあわせて、フルーツやラベル、ステッカーの形でつくった、コラージュ風の表情豊かなロゴもあります。私の仕事を形づくる日常的でポップな要素を取り入れ、場面によってはブランドがにぎやかに振る舞えるようにしています。",
    "Colorful collage wordmark spelling dante with fruits, labels and stickers on a black background": "黒い背景に、フルーツ、ラベル、ステッカーで dante と綴ったカラフルなコラージュのロゴ",
    "Stationery and posters": "ステーショナリーとポスター",
    "An ID card, a monogram poster and a poster listing the things I love (chess, frogs, skateboarding, darts, video games, guitar) show how the \"d\" carries photos, icons and illustrations while the colors keep everything together.":
      "IDカード、モノグラムのポスター、好きなもの（チェス、カエル、スケートボード、ダーツ、ゲーム、ギター）を並べたポスター。写真やアイコン、イラストを「d」に入れても、色が全体をまとめています。",
    "Blue ID card, green poster with the d monogram and red poster with white icons of hobbies": "青いIDカード、d のモノグラムの緑のポスター、趣味の白いアイコンが並ぶ赤いポスター",
    "The identity was also made to move. Small loops for social media and for this portfolio bring the mark to life on an old TV, in a pixel-art computer and in a set of paper toys.": "アイデンティティは動くことも前提にしています。SNS とこのポートフォリオのための短いループで、古いテレビ、ピクセルアートのコンピューター、ペーパートイの中でマークが動き出します。",
    "Animation of the dante d appearing on an old television screen": "古いテレビの画面に dante の「d」が映し出されるアニメーション",
    "Pixel-art animation of a smiling retro computer": "笑顔のレトロなコンピューターのピクセルアートアニメーション",
    "Paper toy figures holding hands above the words let's work together": "let's work together の文字の上で手をつなぐペーパートイの人形",
    "Brand applications": "ブランド展開",
    "Finally, the brand goes off screen in merchandise, from a bucket hat with the colorful wordmark to a t-shirt that carries the textured \"d\" on the back.": "最後に、ブランドは画面を飛び出してグッズになります。カラフルなロゴのバケットハットから、背中にテクスチャ入りの「d」をプリントしたTシャツまで。",
    "Blue bucket hat with the colorful dante wordmark on a green background": "緑の背景に、カラフルな dante ロゴの青いバケットハット",
    "Person lying on a green field wearing a white t-shirt printed with the textured d": "テクスチャ入りの d をプリントした白いTシャツを着て、緑の芝生に寝転ぶ人",
    "Next project: pera pera": "次のプロジェクト：pera pera",
    "Pera Pera visual identity | Victor Dante": "Pera Pera ビジュアルアイデンティティ | Victor Dante",
    "Pera Pera visual identity by Victor Dante: logo, color scheme, typography, packaging and stationery for a book brand.": "Victor Dante による Pera Pera のビジュアルアイデンティティ：本のブランドのためのロゴ、配色、タイポグラフィ、パッケージ、ステーショナリー。",
    "The complete visual identity for the \"Pera Pera\" brand, including logo, color scheme, typography, packaging and stationery.": "ブランド「Pera Pera」のビジュアルアイデンティティ一式。ロゴ、配色、タイポグラフィ、パッケージ、ステーショナリーを含みます。",
    "Pera Pera sticker on a red and lime card": "赤とライムのカードに貼られた Pera Pera のステッカー",
    "Logo, color, typography, packaging and stationery": "ロゴ、カラー、タイポグラフィ、パッケージ、ステーショナリー",
    "Pera Pera (ペラペラ) is a Japanese onomatopoeia for flipping through pages. The name became the starting point for a book brand whose whole experience revolves around the moment a new story arrives at the reader's door.":
      "ブランド名は、ページをペラペラとめくる様子を表すオノマトペから。この名前を出発点に、新しい物語が読者の家に届く瞬間を中心に体験全体を組み立てた、本のブランドが生まれました。",
    "The logo is a heavy, rounded Japanese wordmark with small circles that read like rings or page holes. It is bold enough to stand on packaging and stickers, and friendly enough to feel like an invitation to read.": "ロゴは、太く丸みのある日本語のロゴタイプに、リングやページの穴のように見える小さな円を添えたもの。パッケージやステッカーでも存在感があり、読書への招待のように感じられる親しみやすさもあります。",
    "Animated Pera Pera logo in black, pink and lime on a blue background": "青い背景に、黒、ピンク、ライムで動く Pera Pera のロゴ",
    "An electric blue sets the stage, while lime, pink and red create contrast between the pieces. Black keeps the wordmark strong on any of them.": "鮮やかなブルーが舞台をつくり、ライム、ピンク、レッドがアイテム同士のコントラストを生みます。どの色の上でも、ブラックがロゴタイプを力強く見せます。",
    "Pera Pera color palette": "Pera Pera のカラーパレット",
    "Delivery and packaging": "配送とパッケージ",
    "Every order comes with a lime book band that says 本が届きました (\"your book has arrived\"), and the kraft mailers carry the logo, a \"fragile\" label and a \"delivered\" stamp. Each touchpoint was designed to make unboxing feel like the first page of the story.": "注文には「本が届きました」と書かれたライムの帯がつき、クラフトの配送箱にはロゴ、「取扱注意」ラベル、「配達済み」スタンプが入っています。すべての接点を、開封の瞬間が物語の1ページ目のように感じられるよう設計しました。",
    "Book wrapped in a lime Pera Pera band on a blue background": "青い背景に、ライムの Pera Pera の帯を巻いた本",
    "Kraft mailer boxes with the Pera Pera logo, a fragile label and a delivered stamp": "Pera Pera のロゴ、取扱注意ラベル、配達済みスタンプが入ったクラフトの配送箱",
    "Business cards": "名刺",
    "The lime business cards carry the brand's tagline: 次の物語は、ここから。 (\"your next story starts here\").": "ライムの名刺には、ブランドのタグライン「次の物語は、ここから。」が入っています。",
    "Lime Pera Pera business cards scattered in the air": "宙に舞うライムの Pera Pera の名刺",
    "Reading time": "読書の時間",
    "A door hanger that says 読書中 (\"reading\") lets the reader ask for a quiet moment, in two color combinations from the palette.": "「読書中」と書かれたドアハンガーで、読者は静かな時間をお願いできます。パレットから選んだ2つの配色で展開しています。",
    "Pink 読書中 (“reading”) door hanger on a blue background": "青い背景に、ピンクの「読書中」ドアハンガー",
    "Lime 読書中 (“reading”) door hanger on a pink background": "ピンクの背景に、ライムの「読書中」ドアハンガー",
    "Previous project: dante": "前のプロジェクト：dante",
    "Next project: TRE-AL": "次のプロジェクト：TRE-AL",
    "TRE-AL institutional design | Victor Dante": "TRE-AL 公共機関のデザイン | Victor Dante",
    "Institutional design for TRE-AL by Victor Dante: Elections 2026 campaign, 30 years of the electronic voting machine identity and a comic book against misinformation.": "Victor Dante による TRE-AL の公共機関デザイン：2026年選挙キャンペーン、電子投票機30周年のアイデンティティ、誤情報対策の漫画。",
    "Institutional design for the Regional Electoral Court of Alagoas: social media campaigns for the 2026 elections, the visual identity for the 30th anniversary of the electronic voting machine and a comic book against misinformation.":
      "アラゴアス地方選挙裁判所のための公共機関デザイン：2026年選挙の SNS キャンペーン、電子投票機30周年のアイデンティティ、誤情報対策の漫画。",
    "Elections 2026 post: who decides the future is whoever shows up": "2026年選挙の投稿：未来を決めるのは、足を運ぶ人",
    "Institutional design": "公共機関のデザイン",
    "TRE-AL, Regional Electoral Court of Alagoas": "TRE-AL（アラゴアス地方選挙裁判所）",
    "Social media, visual identity, editorial and print": "SNS、ビジュアルアイデンティティ、エディトリアル、印刷物",
    "From February 2025 to May 2026 I worked as an in-house designer at the Regional Electoral Court of Alagoas (TRE-AL), creating graphic material for public information campaigns, social media, print and digital content focused on citizenship.":
      "2025年2月から2026年5月まで、アラゴアス地方選挙裁判所（TRE-AL）でインハウスデザイナーとして働き、市民意識をテーマにした広報キャンペーン、SNS、印刷物、デジタルコンテンツのグラフィックを制作しました。",
    "The challenge was always the same: turning electoral rules, deadlines and data into pieces that people actually stop to read, without losing the credibility of a public institution.": "課題はいつも同じでした。選挙の規則や期限、データを、公的機関としての信頼性を損なわずに、人が思わず立ち止まって読みたくなるアイテムにすることです。",
    "Elections 2026": "2026年選挙",
    "For the 2026 elections the communication took on an electric blue and lime palette, gradient frames and sticker-like icons around real people. The carousels speak directly to young voters, while the stories explain how to report electoral crimes, list everything that can be done in the e-Título app and announce service drives across Alagoas.": "2026年選挙では、鮮やかなブルーとライムのパレット、グラデーションのフレーム、実在の人物のまわりに配したステッカー風のアイコンで発信しました。カルーセルは若い有権者に直接語りかけ、ストーリーズでは選挙違反の通報方法、アプリ「e-Título」でできること、アラゴアス各地の出張受付を紹介しています。",
    "Two-slide carousel: who decides the future is whoever shows up, and the numbers speak for themselves, with abstention data from 2024": "2枚のカルーセル：未来を決めるのは足を運ぶ人、そして2024年の棄権データが示す数字",
    "A carousel on turnout: almost 1 in 3 voters did not go to the polls in 2024.": "投票率についてのカルーセル：2024年は有権者のほぼ3人に1人が投票所に行きませんでした。",
    "Story announcing a service drive across Alagoas, with a woman inside a colorful gradient frame": "カラフルなグラデーションのフレームに女性を配した、アラゴアス各地の出張受付を告知するストーリーズ",
    "Story explaining how to report electoral crimes, with a woman inside a colorful gradient frame": "カラフルなグラデーションのフレームに女性を配した、選挙違反の通報方法を説明するストーリーズ",
    "Story listing everything that can be done in the e-Título app, with a smiling woman holding a phone": "スマートフォンを持って笑う女性とともに、アプリ「e-Título」でできることを紹介するストーリーズ",
    "Educational posts": "啓発投稿",
    "Pop culture is a shortcut to attention. A Stranger Things inspired post reminds teenagers that from 15 years old they can already get their voter registration, and the Sorting Hat explains what happens when a registration is cancelled.": "ポップカルチャーは注目への近道です。『ストレンジャー・シングス』風の投稿で、15歳から有権者登録ができることを10代に伝え、組分け帽子が有権者登録が取り消されるとどうなるかを説明します。",
    "Dark red post in the style of Stranger Things: it took so long that you are already old enough to vote": "『ストレンジャー・シングス』風の深紅の投稿：時間がかかりすぎて、もう投票できる年齢になっちゃった",
    "Electronic voting machine wearing the Sorting Hat, asking what happens when a voter registration is cancelled": "組分け帽子をかぶった電子投票機が、有権者登録が取り消されるとどうなるかを問いかける投稿",
    "30 years of the electronic voting machine": "電子投票機30周年",
    "A visual identity for the 30th anniversary of the Brazilian electronic voting machine. In the logo, the zero of the number 30 becomes the machine's screen. The navy, light blue and cream palette runs through the carousels and a series of \"ID cards\" that present each model, like the UE2006, the first one with a fingerprint reader.":
      "ブラジルの電子投票機30周年のためのビジュアルアイデンティティ。ロゴでは、「30」のゼロが投票機の画面になっています。ネイビー、ライトブルー、クリームのパレットは、カルーセルと、各モデルを紹介する「身分証」シリーズに使われています。指紋認証を初めて搭載した UE2006 もそのひとつです。",
    "Logo for 30 years of the electronic voting machine, in light blue": "ライトブルーの電子投票機30周年のロゴ",
    "30 years of the electronic voting machine color palette": "電子投票機30周年のカラーパレット",
    "Navy carousel cover asking if the electronic voting machine has a secret": "電子投票機に秘密はあるのかと問いかける、ネイビーのカルーセルの表紙",
    "ID card for the UE2006 voting machine, with its date of birth, fingerprint reader and accessibility features": "誕生日、指紋リーダー、アクセシビリティ機能を記した UE2006 投票機の身分証",
    "Comic book": "漫画",
    "\"Dona Maria e o Segredo da Informação de Verdade\" (Dona Maria and the secret of true information) is a free digital comic book that helps older people recognize misinformation. It has its own page, with the story behind it and the link to read it.": "『Dona Maria e o Segredo da Informação de Verdade』（ドナ・マリアと本当の情報の秘密）は、高齢者が誤情報を見分けられるようにする無料のデジタル漫画です。制作の背景と閲覧リンクをまとめた専用ページがあります。",
    "See the comic book": "漫画を見る",
    "Printed comic book open on a green background, showing Dona Maria confused while looking at her phone": "緑の背景に開かれた印刷版の漫画。スマートフォンを見て困惑するドナ・マリア",
    "Previous project: pera pera": "前のプロジェクト：pera pera",
    "Next project: Dona Maria comic book": "次のプロジェクト：漫画『Dona Maria』",
    "Dona Maria comic book | Victor Dante": "漫画『Dona Maria』 | Victor Dante",
    "Dona Maria e o Segredo da Informação de Verdade: a free digital comic book by TRE-AL against misinformation, designed by Victor Dante.": "『Dona Maria e o Segredo da Informação de Verdade』：Victor Dante がデザインした、TRE-AL による誤情報対策の無料デジタル漫画。",
    "A free digital comic book by TRE-AL that helps older people recognize misinformation, check where a message comes from and look for reliable sources before sharing it.": "TRE-AL による無料のデジタル漫画。高齢者が誤情報を見分け、メッセージの出どころを確かめ、共有する前に信頼できる情報源を調べられるようにします。",
    "Read the comic": "漫画を読む",
    "Comic book cover: Dona Maria e o Segredo da Informação de Verdade": "漫画の表紙：Dona Maria e o Segredo da Informação de Verdade",
    "TRE-AL, Media Education Project and Projeto 60+": "TRE-AL、メディア教育プロジェクト、Projeto 60+",
    "Design of the comic book pieces, digital edition": "漫画のデザイン、デジタル版",
    "\"Dona Maria e o Segredo da Informação de Verdade\" (Dona Maria and the secret of true information) was launched by the Regional Electoral Court of Alagoas in July 2026. It is part of the court's Media Education Project and of Projeto 60+, an initiative for the citizenship and digital inclusion of older people.": "『Dona Maria e o Segredo da Informação de Verdade』（ドナ・マリアと本当の情報の秘密）は、2026年7月にアラゴアス地方選挙裁判所が公開しました。裁判所のメディア教育プロジェクトと、高齢者の市民参加とデジタルインクルージョンを推進する取り組み「Projeto 60+」の一環です。",
    "The story follows Dona Maria through everyday situations: messages on her phone, links shared in family group chats, news that seems too urgent to be true. Along the way she learns to spot misleading content, check where what she receives comes from before passing it on and look for answers on the official channels of the Electoral Court.":
      "物語は、日常のさまざまな場面でドナ・マリアを追いかけます。スマートフォンに届くメッセージ、家族のグループチャットで回ってくるリンク、本当とは思えないほど危機感をあおるニュース。その中で彼女は、誤解を招く内容を見抜き、受け取った情報を転送する前に出どころを確かめ、選挙裁判所の公式窓口で答えを探すことを学んでいきます。",
    "Comic book cover: Dona Maria e o Segredo da Informação de Verdade, in orange letters on dark green": "濃い緑にオレンジの文字の漫画の表紙：Dona Maria e o Segredo da Informação de Verdade",
    "Beyond the elections": "選挙のその先へ",
    "The comic also covers digital safety, with tips about personal data, passwords and suspicious links, so its advice is useful every day and not only during the electoral period. The digital edition is free and can be used in educational activities by the Electoral Judicial School, the electoral zones and the court's citizenship and digital inclusion actions.": "漫画では、個人情報、パスワード、怪しいリンクに関するヒントなどデジタルセキュリティも扱っているので、選挙期間だけでなく毎日役立つ内容になっています。デジタル版は無料で、選挙司法学校、各選挙区、裁判所の市民参加・デジタルインクルージョンの活動で教材として使えます。",
    "Previous project: TRE-AL": "前のプロジェクト：TRE-AL",
    "Next project: System Idiomas": "次のプロジェクト：System Idiomas",
    "Flyers and social media cards for System Idiomas, a language school, by Victor Dante.": "Victor Dante による、語学学校 System Idiomas のチラシとSNS用カード。",
    "Flyers and social media posts for a language school, where every holiday and special date becomes a reason to talk about learning a new language.":
      "語学学校のチラシとSNS投稿。祝日や行事のたびに、新しい言語を学ぶきっかけを届けています。",
    "Pizza Party flyer with a boy eating a slice of pizza": "ピザを食べる男の子を使った Pizza Party のチラシ",
    "Social media and print": "SNSと印刷物",
    "Event flyers, campaign cards and social media posts": "イベントのチラシ、キャンペーンのカード、SNS投稿",
    "Since May 2026 I have been working as an in-house designer at System Idiomas, creating graphic material for campaigns, social media, print and digital content focused on turning followers into students.":
      "2026年5月から語学学校 System Idiomas でインハウスデザイナーとして働き、フォロワーを生徒に変えることを目指して、キャンペーン、SNS、印刷物、デジタルコンテンツのグラフィックを制作しています。",
    "The brand's red runs through every piece. On top of it, each one gets its own typographic voice: soft, melting lettering for a party, a bold serif for a national holiday, a hand-drawn hashtag for the calendar.":
      "すべてのアイテムにブランドカラーの赤が通っています。そのうえで、それぞれに独自のタイポグラフィの表情を与えました。パーティーにはとろけるようなやわらかいレタリング、記念日には力強いセリフ体、カレンダーには手描きのハッシュタグ。",
    "The Pizza Party flyer invites kids from preschool to 5th grade, with the date, time and place gathered in a sticker-like box so the information is easy to find at a glance. The same key visual was adapted for Instagram, as a feed post and as a story.":
      "Pizza Party のチラシは、未就学児から小学5年生までの子どもたちに向けたもの。日時と場所はステッカー風のボックスにまとめ、ひと目で分かるようにしました。同じキービジュアルを Instagram のフィード投稿とストーリーズにも展開しています。",
    "Pizza Party flyer with a boy eating a slice of pizza and the event information": "ピザを食べる男の子とイベント情報を載せた Pizza Party のチラシ",
    "Phone mockups showing the Pizza Party campaign as an Instagram feed post, on the System Idiomas profile and as a story": "Pizza Party キャンペーンを Instagram のフィード投稿、System Idiomas のプロフィール、ストーリーズとして表示したスマートフォンのモックアップ",
    "Social media": "SNS",
    "Brazilian Cinema Day becomes \"our films have conquered the world, and so can you\". An \"#AnotaAí\" (\"write it down\") series lists the important dates of 2026, and a São João post imagines Brazil's June festivals in English.":
      "ブラジル映画の日の投稿は「私たちの映画は世界を魅了した。次はあなたの番」。シリーズ「#AnotaAí」（メモしておいて）では2026年の大事な日付を紹介し、サン・ジョアン祭の投稿では、ブラジルの6月祭り「フェスタ・ジュニーナ」が英語だったら？と想像をふくらませます。",
    "Red post for Brazilian Cinema Day: our films have conquered the world, and so can you":
      "ブラジル映画の日の赤い投稿：私たちの映画は世界を魅了した。次はあなたの番",
    "Red post with the hand-drawn hashtag AnotaAí, important dates": "手描きのハッシュタグ AnotaAí の赤い投稿、大事な日付",
    "Red post asking what if São João were in English": "サン・ジョアン祭が英語だったら？と問いかける赤い投稿",
    "Previous project: Dona Maria comic book": "前のプロジェクト：漫画『Dona Maria』",
    "Next project: Clauss": "次のプロジェクト：Clauss",
    "Clauss pizzeria rebranding | Victor Dante": "ピザ店 Clauss のリブランディング | Victor Dante",
    "Clauss Pizzaria rebranding by Victor Dante: logo, color palette, typography and social media.": "Victor Dante による Clauss Pizzaria のリブランディング：ロゴ、カラーパレット、タイポグラフィ、SNS。",
    "A rebranding for Clauss, a pizzeria: a new crest-shaped logo with a slice of pizza, a red, green and cream palette and a playful lettering for social media.": "ピザ店 Clauss のリブランディング。ピザを一切れ添えた紋章型の新しいロゴ、赤・緑・クリームのパレット、SNSのための遊び心のあるレタリング。",
    "Clauss Pizzaria logo in cream on red": "赤地にクリームの Clauss Pizzaria のロゴ",
    "Logo, color, typography and social media": "ロゴ、カラー、タイポグラフィ、SNS",
    "Clauss needed an identity as warm and inviting as a pizza night with friends. The new logo places the name inside a crest whose outline works like a crust, with a slice of pepperoni pizza breaking out of the top.":
      "Clauss に必要だったのは、友だちとのピザの夜のように温かく、気軽に入りたくなるアイデンティティでした。新しいロゴは店名を紋章の中に収め、その輪郭がピザの耳の役割を果たし、上からはペパロニピザが一切れ飛び出しています。",
    "A condensed, heavy typeface keeps the name readable on a box, a sign or a phone screen, and a simpler wordmark without the crest works at smaller sizes.":
      "太いコンデンス書体で、箱でも看板でもスマートフォンの画面でも店名が読みやすく、紋章のないシンプルなロゴタイプは小さなサイズでの使用に対応します。",
    "Clauss rebranding panel: logo on red, the lettering dia de pizza on cream and the wordmark on green": "Clauss リブランディングのパネル：赤地のロゴ、クリーム地のレタリング「dia de pizza」、緑地のロゴタイプ",
    "Tomato red, basil green and a mozzarella cream: the palette comes straight from the pizza, and works in any combination of background and logo.": "トマトの赤、バジルの緑、モッツァレラのクリーム。パレットはピザそのものから生まれ、背景とロゴのどの組み合わせでも機能します。",
    "Clauss color palette": "Clauss のカラーパレット",
    "Clauss Pizzaria crest logo in cream on red": "赤地にクリームの Clauss Pizzaria の紋章型ロゴ",
    "Clauss Pizzaria wordmark in cream on dark green": "濃い緑地にクリームの Clauss Pizzaria のロゴタイプ",
    "Pizza day": "ピザの日",
    "For social media, a loose handmade lettering (\"dia de pizza!\", pizza day) sits next to short reminders in the condensed typeface, like \"today is pizza dinner day!\", giving the posts a casual, friendly tone.": "SNSでは、手描きのゆるいレタリング（「dia de pizza!」＝ピザの日）を、「今日はピザディナーの日！」のようなコンデンス書体の短いリマインダーと組み合わせ、投稿に気取らない親しみやすいトーンを与えています。",
    "Red handmade lettering reading dia de pizza on cream, with a reminder that today is pizza dinner day and a pizza slice": "クリーム地に赤い手描きのレタリング「dia de pizza」。今日はピザディナーの日というリマインダーとピザ一切れ",
    "Previous project: System Idiomas": "前のプロジェクト：System Idiomas",
    "Next project: Freela | Motion": "次のプロジェクト：Freela | モーション",
    "Freela | Motion": "Freela | モーション",
    "A kinetic typography piece in After Effects: the word \"Freela\" switches typefaces to say I'm open for freelance work.": "After Effects でつくったキネティックタイポグラフィ。「Freela」という言葉が書体を切り替えながら、フリーランスの仕事を受け付けていることを伝えます。",
    ": Freela motion": "：モーション Freela",
    "Freela | Motion | Victor Dante": "Freela | モーション | Victor Dante",
    "Freela, a kinetic typography piece by Victor Dante made in After Effects: the word Freela switches between typefaces to say he is open for freelance work.": "Freela：Victor Dante が After Effects でつくったキネティックタイポグラフィ。「Freela」という言葉が書体を切り替えながら、フリーランスの仕事を受け付けていることを伝えます。",
    "A short kinetic typography piece made in After Effects to let people know I'm open for freelance work.":
      "フリーランスの仕事を受け付けていることを伝えるために、After Effects でつくった短いキネティックタイポグラフィ。",
    "Animation of the word Freela switching between pixel and script typefaces": "ピクセル書体とスクリプト体を行き来する「Freela」という言葉のアニメーション",
    "Motion design": "モーションデザイン",
    "Personal project": "個人プロジェクト",
    "Kinetic typography in After Effects": "After Effects によるキネティックタイポグラフィ",
    "\"Manda freela\" is Brazilian slang for \"send me freelance work\". This piece turns that line into motion: on a dark, paper-like background, the word \"Freela\" jumps between a pixel sans-serif and a pixel script, while a short note introduces me as a graphic designer, UI/UX designer and creative developer who is available for new projects.":
      "「Manda freela」は、ブラジルのスラングで「フリーランスの仕事をちょうだい」という意味です。この作品はそのフレーズを動きにしたもの。紙のような質感の暗い背景で、「Freela」という言葉がピクセルのサンセリフ体とピクセルのスクリプト体の間を跳ね回り、短いテキストで、新しいプロジェクトを受け付けているグラフィックデザイナー、UI/UX デザイナー、クリエイティブデベロッパーとして自己紹介します。",
    "Freela animation: the word Freela switching between pixel and script typefaces on a dark background": "Freela のアニメーション：暗い背景で、ピクセル書体とスクリプト体を行き来する「Freela」という言葉",
    "Previous project: Clauss": "前のプロジェクト：Clauss",
    "Read about the comic": "漫画について読む",
    "Icon | Zip, by LinkedIn": "アイコン | Zip, by LinkedIn",
    "A temporary profile icon for Zip, LinkedIn's puzzle game, made after the Zip team reached out to me on LinkedIn.":
      "LinkedIn のパズルゲーム Zip のための期間限定プロフィールアイコン。Zip のチームから LinkedIn で声をかけてもらったことがきっかけで制作しました。",
    ": Zip icon": "：Zip のアイコン",
    "Hand-drawn Zip mascot waving next to the digital Zip icon": "手描きの Zip マスコットが、デジタル版の Zip アイコンの隣で手を振っているイラスト",
    "Next project: Zip icon": "次のプロジェクト：Zip のアイコン",
    "Previous project: Zip icon": "前のプロジェクト：Zip のアイコン",
    "A temporary profile icon for Zip, LinkedIn's daily path puzzle, made at the invitation of the Zip team.":
      "LinkedIn の毎日の経路パズル Zip のための、期間限定のプロフィールアイコン。Zip のチームから依頼を受けて制作しました。",
    "Hand-drawn Zip mascot waving": "手を振る手描きの Zip マスコット",
    "Icon design": "アイコンデザイン",
    "Zip, a puzzle by LinkedIn": "Zip, a puzzle by LinkedIn",
    "Temporary profile icon, hand-drawn and digital versions": "期間限定のプロフィールアイコン、手描き版とデジタル版",
    "It all started on LinkedIn. The team behind Zip, LinkedIn's daily puzzle game, reached out to me with a request: a temporary icon for their page.":
      "始まりは LinkedIn でした。LinkedIn の毎日のパズルゲーム Zip のチームから連絡があり、ページ用の期間限定アイコンを依頼されたのです。",
    "The idea comes straight from the game. In Zip you complete a single path through the grid, so the icon's character is that path: a winding orange line with a white dot at each end, bending into the shape of a Z and doubling as a smiling face.": "アイデアはゲームそのものから来ています。Zip ではグリッドを通る1本の道を完成させます。だからアイコンのキャラクターはその道そのもの。両端に白い点がついた曲がりくねったオレンジの線が Z の形に折れ曲がり、笑顔にもなっています。",
    "Two versions": "2つのバージョン",
    "I sent the team two versions of the same idea. The first is hand-drawn: the path becomes a little tile with arms and legs, waving hello with loose, wobbly outlines. The second is a clean digital version that keeps only the essentials, the path, the two dots and the face, with a soft orange gradient on a peach background.": "同じアイデアを2つのバージョンでチームに送りました。1つ目は手描き。道が手足のついた小さなタイルになり、ゆるく揺れる線で手を振っています。2つ目はすっきりとしたデジタル版で、道、2つの点、顔という要素だけを残し、ピーチ色の背景にやわらかなオレンジのグラデーションをかけています。",
    "Hand-drawn Zip mascot: an orange tile with the Zip path, a smiling face, arms and legs, waving": "手描きの Zip マスコット：Zip の道と笑顔、手足がついたオレンジのタイルが手を振っている",
    "Digital Zip icon: an orange path with white dots at each end and a smiling face on a peach background": "デジタル版の Zip アイコン：ピーチ色の背景に、両端に白い点がついたオレンジの道と笑顔",
    "On the page": "ページでの掲載",
    "The hand-drawn version became the profile picture of the Zip, a puzzle by LinkedIn page, which has more than 58 million followers.": "手描きのバージョンは、フォロワー5,800万人以上の「Zip, a puzzle by LinkedIn」ページのプロフィール画像になりました。",
    "Header of the Zip, a puzzle by LinkedIn page, with the hand-drawn mascot as its profile picture": "手描きのマスコットをプロフィール画像にした「Zip, a puzzle by LinkedIn」ページのヘッダー",
    "Victor Dante | Graphic Designer & Front-end Developer": "Victor Dante | グラフィックデザイナー＆フロントエンドデベロッパー",
    "Portfolio of Victor Dante, graphic designer, UI/UX designer and front-end developer in Maceió, Brazil. Visual identity, motion design and websites.": "ブラジル・マセイオのグラフィックデザイナー、UI/UX デザイナー、フロントエンドデベロッパー、Victor Dante のポートフォリオ。ビジュアルアイデンティティ、モーションデザイン、Webサイト。",
    "Victor Dante: graphic designer, UI/UX designer and front-end developer in Maceió, Brazil": "Victor Dante：ブラジル・マセイオのグラフィックデザイナー、UI/UX デザイナー、フロントエンドデベロッパー",
    "Black and white portrait of Victor Dante": "Victor Dante のモノクロのポートレート",
    "Work: Branding, Motion & Web Design | Victor Dante": "作品：ブランディング、モーション、Webデザイン | Victor Dante",
    "Selected projects by Victor Dante: visual identities, rebranding, motion design, social media and institutional campaigns for brands in Brazil.": "Victor Dante の主なプロジェクト：ブラジルのブランドのためのビジュアルアイデンティティ、リブランディング、モーションデザイン、SNS、公共機関のキャンペーン。",
    "Work: branding, motion and web design projects by Victor Dante": "作品：Victor Dante によるブランディング、モーション、Webデザインのプロジェクト",
    "About Victor Dante | Designer & Developer in Maceió": "Victor Dante について | マセイオのデザイナー＆デベロッパー",
    "Victor Dante is a designer in Maceió, Brazil, working across visual design, UI/UX and front-end development. Skills, tools, experience and education.": "Victor Dante はブラジル・マセイオのデザイナーで、ビジュアルデザイン、UI/UX、フロントエンド開発に取り組んでいます。スキル、ツール、経歴、学歴。",
    "dante: Personal Visual Identity | Victor Dante": "dante：パーソナルビジュアルアイデンティティ | Victor Dante",
    "dante, the personal brand of Victor Dante: a lowercase d logo filled with textures and color, with palette, typography, motion and printed applications.":
      "Victor Dante のパーソナルブランド「dante」：テクスチャと色で満たされる小文字の d のロゴと、パレット、タイポグラフィ、モーション、印刷物への展開。",
    "Pera Pera: Book Brand Identity & Packaging | Victor Dante": "Pera Pera：本のブランドのアイデンティティとパッケージ | Victor Dante",
    "Visual identity for Pera Pera, a book brand: Japanese wordmark, color palette, packaging, book bands, business cards and stationery by Victor Dante.": "本のブランド Pera Pera のビジュアルアイデンティティ：日本語のロゴタイプ、カラーパレット、パッケージ、本の帯、名刺、ステーショナリー。Victor Dante 制作。",
    "TRE-AL Institutional Design & Campaigns | Victor Dante": "TRE-AL 公共機関のデザインとキャンペーン | Victor Dante",
    "Institutional design for TRE-AL, the Regional Electoral Court of Alagoas: Elections 2026 campaign, 30 years of the electronic voting machine and social posts.": "アラゴアス地方選挙裁判所 TRE-AL のための公共機関デザイン：2026年選挙キャンペーン、電子投票機30周年、SNS投稿。",
    "Dona Maria: Comic Book Against Fake News | Victor Dante": "Dona Maria：フェイクニュース対策の漫画 | Victor Dante",
    "Dona Maria e o Segredo da Informação de Verdade, a free digital comic book by TRE-AL that helps older people spot fake news. Design by Victor Dante.": "『Dona Maria e o Segredo da Informação de Verdade』は、高齢者がフェイクニュースを見分けられるようにする TRE-AL の無料デジタル漫画です。デザイン：Victor Dante。",
    "System Idiomas: Social Media & Flyer Design | Victor Dante": "System Idiomas：SNSとチラシのデザイン | Victor Dante",
    "Social media posts and event flyers for System Idiomas, a language school, built around the brand's red and custom lettering. Design by Victor Dante.": "語学学校 System Idiomas のためのSNS投稿とイベントのチラシ。ブランドカラーの赤とオリジナルのレタリングを軸にしています。デザイン：Victor Dante。",
    "Clauss Pizzaria: Rebranding & Logo Design | Victor Dante": "Clauss Pizzaria：リブランディングとロゴデザイン | Victor Dante",
    "Rebranding for Clauss Pizzaria by Victor Dante: crest logo with a pizza slice, red, green and cream palette, typography and lettering for social media.": "Victor Dante による Clauss Pizzaria のリブランディング：ピザを一切れ添えた紋章型のロゴ、赤・緑・クリームのパレット、タイポグラフィ、SNS用のレタリング。",
    "Freela: Kinetic Typography in After Effects | Victor Dante": "Freela：After Effects のキネティックタイポグラフィ | Victor Dante",
    "Freela, a kinetic typography motion piece made in After Effects by Victor Dante: the word Freela switches typefaces to announce freelance availability.": "Freela：Victor Dante が After Effects でつくったキネティックタイポグラフィのモーション作品。「Freela」という言葉が書体を切り替えながら、フリーランスの仕事を受け付けていることを伝えます。",
    "Zip, a puzzle by LinkedIn: Profile Icon | Victor Dante": "Zip, a puzzle by LinkedIn：プロフィールアイコン | Victor Dante",
    "A temporary profile icon for Zip, LinkedIn's daily puzzle game, by Victor Dante: a hand-drawn mascot and a digital version of the Zip path, born from a conversation on LinkedIn.": "Victor Dante による、LinkedIn の毎日のパズルゲーム Zip のための期間限定プロフィールアイコン。手描きのマスコットと Zip の道のデジタル版。LinkedIn での会話から生まれました。",
    "Hand-drawn Zip mascot waving next to the digital Zip icon on a peach background": "ピーチ色の背景で、手描きの Zip マスコットがデジタル版の Zip アイコンの隣で手を振っているイラスト",
    "Paper Toys: After Effects Motion Study | Victor Dante": "Paper Toys：After Effects のモーションスタディ | Victor Dante",
    "Paper Toys, an After Effects motion study by Victor Dante: a chain of halftone paper dolls holding hands, inspired by All His Children, by Mike Burton.": "Paper Toys：Victor Dante による After Effects のモーションスタディ。Mike Burton の「All His Children」に着想を得た、手をつなぐ網点のペーパードールの連なり。",
    "An After Effects motion study inspired by \"The Atlantic - All His Children\", by Mike Burton: a chain of paper dolls holding hands that says \"let's work together\".": "Mike Burton の「The Atlantic - All His Children」に着想を得た After Effects のモーションスタディ。手をつないだペーパードールの連なりが「let's work together」（一緒に仕事をしましょう）と語りかけます。",
    "Animation of three halftone paper dolls holding hands above the words let's work together": "let's work together の文字の上で手をつなぐ、網点の3体のペーパードールのアニメーション",
    "Animation in After Effects": "After Effects によるアニメーション",
    "Three paper dolls cut from the same strip hold hands in a loop while their halftone texture shifts from frame to frame, as if the paper itself were alive.":
      "同じ紙から切り出した3体のペーパードールがループの中で手をつなぎ、網点のテクスチャがコマごとに変化して、まるで紙そのものが生きているように見せています。",
    "Paper Toys animation: three halftone paper dolls holding hands above the words let's work together": "Paper Toys のアニメーション：let's work together の文字の上で手をつなぐ、網点の3体のペーパードール",
    "Previous project: Freela | Motion": "前のプロジェクト：Freela | モーション",
    "Next project: Paper Toys": "次のプロジェクト：Paper Toys",
    "Three halftone paper dolls holding hands, from the Paper Toys motion study": "Paper Toys のモーションスタディより、手をつなぐ網点の3体のペーパードール",
    "dante logo on a vintage TV screen": "古いテレビの画面に映る dante のロゴ",
    "Pera Pera logo and visual identity": "Pera Pera のロゴとビジュアルアイデンティティ",
    "TRE-AL Elections 2026 campaign post": "TRE-AL の2026年選挙キャンペーンの投稿",
    "Open Dona Maria comic book": "開かれた漫画『Dona Maria』",
    "Red System Idiomas social media posts": "System Idiomas の赤いSNS投稿",
    "The word Freela animated in pixel typefaces": "ピクセル書体で動く「Freela」という言葉",
    "dante logo spelled with fruit and sticker shapes": "フルーツとステッカーの形で綴った dante のロゴ",
    "Email": "メール",
    "Designer · UI/UX · Front-end": "デザイナー · UI/UX · フロントエンド",
    "Front-end": "フロントエンド",
    "Branding": "ブランディング",
    "Digital": "デジタル",
    "Editorial": "エディトリアル",
    "Design": "デザイン",
    "Motion": "モーション",
    "Rebranding": "リブランディング",
    "Language": "言語",
  };

  /* Idioma atual ------------------------------------------------------------ */
  const KEY = "lang";
  const store = {
    get() {
      try { return localStorage.getItem(KEY); } catch (_) { return null; }
    },
    set(value) {
      try { localStorage.setItem(KEY, value); } catch (_) {}
    },
  };

  // Idiomas disponíveis: o rótulo de cada um fica escrito no próprio idioma
  const LANGS = [
    { code: "en", label: "English", html: "en" },
    { code: "pt", label: "Português", html: "pt-BR" },
    { code: "ja", label: "日本語", html: "ja" },
  ];
  const DICTS = { pt: PT, ja: JA };
  const isLang = (v) => LANGS.some((l) => l.code === v);

  const param = new URLSearchParams(window.location.search).get("lang");
  if (isLang(param)) store.set(param);
  const saved = store.get();
  const lang = isLang(param) ? param : isLang(saved) ? saved : "en";
  const DICT = DICTS[lang] || null;

  const norm = (s) => s.replace(/\s+/g, " ").trim();

  // t("texto em inglês", { to: "..." }): tradução com marcadores {nome} opcionais
  const t = (text, vars) => {
    let out = DICT && DICT[text] !== undefined ? DICT[text] : text;
    if (vars) out = out.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
    return out;
  };

  window.i18n = { lang, t };

  const root = document.documentElement;
  if (DICT) {
    root.lang = LANGS.find((l) => l.code === lang).html;
    root.classList.add("i18n-pending"); // esconde a página até traduzir (ver CSS)
  }
  // Japonês: a Outfit não tem esses caracteres, então carrega a Noto Sans JP
  if (lang === "ja") {
    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap";
    document.head.appendChild(font);
  }

  /* Tradução da página ------------------------------------------------------ */
  const ATTRS = ["alt", "aria-label", "placeholder", "data-tooltip", "title"];

  const translatePage = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) =>
        node.parentElement.closest("script, style, svg") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const raw = node.nodeValue;
      const value = DICT[norm(raw)];
      if (value === undefined) return;
      // Mantém os espaços das pontas (separam palavras de elementos vizinhos)
      node.nodeValue = raw.match(/^\s*/)[0] + value + raw.match(/\s*$/)[0];
    });

    document.querySelectorAll(ATTRS.map((a) => `[${a}]`).join(",")).forEach((el) => {
      ATTRS.forEach((a) => {
        const v = el.getAttribute(a);
        if (v && DICT[norm(v)] !== undefined) el.setAttribute(a, DICT[norm(v)]);
      });
    });

    document.title = t(norm(document.title));
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t(norm(desc.getAttribute("content"))));
  };

  /* Globo de idiomas na navbar --------------------------------------------- */
  // O botão abre um menu com English, Português e 日本語 (cada um no próprio idioma).
  const GLOBE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>';
  const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';

  const choose = (code) => {
    store.set(code);
    const url = new URL(window.location.href);
    url.searchParams.delete("lang"); // senão o ?lang da URL venceria a escolha
    if (url.href === window.location.href) window.location.reload();
    else window.location.href = url.href;
  };

  const addLanguageMenu = () => {
    const nav = document.querySelector("[data-nav]");
    if (!nav) return;
    const label = t("Language");

    const wrap = document.createElement("div");
    wrap.className = "nav__lang-wrap";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav__link nav__lang";
    btn.innerHTML = GLOBE;
    btn.setAttribute("aria-label", label);
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", "lang-menu");
    btn.dataset.tooltip = label;

    const menu = document.createElement("ul");
    menu.className = "lang-menu";
    menu.id = "lang-menu";
    menu.hidden = true;
    menu.setAttribute("aria-label", label);

    LANGS.forEach((l) => {
      const li = document.createElement("li");
      const opt = document.createElement("button");
      opt.type = "button";
      opt.className = "lang-menu__item";
      opt.lang = l.html;
      opt.innerHTML = `<span>${l.label}</span>`;
      if (l.code === lang) {
        opt.setAttribute("aria-current", "true");
        opt.insertAdjacentHTML("beforeend", CHECK);
      }
      opt.addEventListener("click", () => {
        if (l.code === lang) close(true);
        else choose(l.code);
      });
      li.appendChild(opt);
      menu.appendChild(li);
    });

    const items = () => Array.from(menu.querySelectorAll(".lang-menu__item"));
    const open = () => {
      menu.hidden = false;
      wrap.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      (items().find((i) => i.hasAttribute("aria-current")) || items()[0]).focus();
    };
    const close = (focusBtn) => {
      if (menu.hidden) return;
      menu.hidden = true;
      wrap.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      if (focusBtn) btn.focus();
    };

    btn.addEventListener("click", () => (menu.hidden ? open() : close(false)));
    menu.addEventListener("keydown", (e) => {
      const list = items();
      const i = list.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); list[(i + 1) % list.length].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); list[(i - 1 + list.length) % list.length].focus(); }
      else if (e.key === "Home") { e.preventDefault(); list[0].focus(); }
      else if (e.key === "End") { e.preventDefault(); list[list.length - 1].focus(); }
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(true); });
    document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) close(false); });
    wrap.addEventListener("focusout", (e) => { if (e.relatedTarget && !wrap.contains(e.relatedTarget)) close(false); });

    wrap.append(btn, menu);
    nav.appendChild(wrap);
  };

  const run = () => {
    try {
      if (DICT) translatePage();
      addLanguageMenu();
    } finally {
      root.classList.remove("i18n-pending");
    }
  };

  // "interactive" chega antes dos scripts com defer (main.js)
  if (document.readyState === "loading") {
    document.addEventListener("readystatechange", function onReady() {
      if (document.readyState === "loading") return;
      document.removeEventListener("readystatechange", onReady);
      run();
    });
  } else {
    run();
  }
})();
