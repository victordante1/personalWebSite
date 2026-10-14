/* ==========================================================================
   Victor Dante | Portfolio: idioma (inglês / português)

   O site é escrito em inglês. Com o português escolhido, este script troca
   textos, atributos (alt, aria-label, placeholder, tooltip), o <title> e a
   meta description usando o dicionário PT abaixo, cuja chave é o texto em
   inglês (espaços normalizados). Texto sem tradução fica em inglês.

   Carrega no <head> SEM defer, antes do main.js: traduz quando o HTML termina
   de ser lido (readyState "interactive"), que acontece antes dos scripts com
   defer. Assim o texto digitado da home, o embaralhar e os cards já trabalham
   com o texto traduzido. Trocar de idioma salva a escolha e recarrega a página.

   Também aceita ?lang=pt ou ?lang=en na URL (útil para compartilhar).
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
    "Connect with me": "Me encontre nas redes",
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
    "View more": "Ver mais",
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
    "Campaigns for the 2026 elections, the identity for 30 years of the electronic voting machine and a comic book against fake news.":
      "Campanhas para as eleições de 2026, a identidade dos 30 anos da urna eletrônica e uma revista em quadrinhos contra fake news.",
    ": TRE-AL institutional design": ": design institucional TRE-AL",
    "Comic book | TRE-AL": "Revista em quadrinhos | TRE-AL",
    "Dona Maria, a free digital comic book that helps older people recognize misinformation and fake news.":
      "Dona Maria, uma revista em quadrinhos digital e gratuita que ajuda pessoas idosas a reconhecer desinformação e fake news.",
    ": Dona Maria comic book": ": revista em quadrinhos Dona Maria",
    "Social media | System Idiomas": "Redes sociais | System Idiomas",
    "Flyers and social media cards for a language school, built around the brand's red and a different lettering for each date.":
      "Flyers e cards para redes sociais de uma escola de idiomas, construídos sobre o vermelho da marca e um lettering diferente para cada data.",
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
    "hello tag sticker dante": "adesivo de crachá hello dante",
    "I design, prototype and build digital experiences.": "Eu desenho, prototipo e construo experiências digitais.",
    "I'm Victor Dante, a designer based in Maceió, Brazil. My roots are in visual design, and I'm currently expanding my practice into UI/UX and front-end development.":
      "Sou Victor Dante, designer em Maceió, Brasil. Minha base é o design visual, e hoje estou expandindo minha prática para UI/UX e desenvolvimento front-end.",
    "Visual Design": "Design visual",
    "Brand identities, editorial pieces, campaigns, motion graphics, social media and environmental applications. I care about hierarchy, rhythm and the details that make a visual system feel intentional.":
      "Identidades de marca, peças editoriais, campanhas, motion graphics, redes sociais e aplicações em ambientes. Me importo com hierarquia, ritmo e os detalhes que fazem um sistema visual parecer intencional.",
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
    "Institutional Designer": "Designer institucional",
    "Current": "Atual",
    "Areas of work": "Áreas de atuação",
    "Campaigns": "Campanhas",
    "Social Media": "Redes sociais",
    "I create visual materials for the school’s marketing and communication, including social media content, promotional campaigns, event materials, digital and print assets, and visual identities for specific initiatives. I also work with art direction, typography, composition, and visual hierarchy while maintaining brand consistency across different formats and channels.":
      "Crio materiais visuais para o marketing e a comunicação da escola, incluindo conteúdo para redes sociais, campanhas promocionais, materiais de eventos, peças digitais e impressas e identidades visuais para iniciativas específicas. Também trabalho com direção de arte, tipografia, composição e hierarquia visual, mantendo a consistência da marca em diferentes formatos e canais.",
    "Institutional Designer — Intern": "Designer institucional — Estágio",
    "Illustration": "Ilustração",
    "Public Communication": "Comunicação pública",
    "I created graphic materials for informational campaigns, social media, print collateral, and digital content focused on citizenship, informed voting, and electoral transparency. I worked with communication, legal, and administrative teams to translate technical and legal content into clear and accessible visual formats.":
      "Criei materiais gráficos para campanhas informativas, redes sociais, impressos e conteúdo digital com foco em cidadania, voto consciente e transparência eleitoral. Trabalhei com as equipes de comunicação, jurídica e administrativa para transformar conteúdos técnicos e jurídicos em formatos visuais claros e acessíveis.",
    "Educational": "Educativo",
    "Institutional": "Institucional",
    "Print": "Impresso",
    "I designed visual materials for institutional and educational campaigns across digital and print media. I transformed technical and regulatory information into clear and accessible content while collaborating with communication and compliance teams to ensure consistent use of the Council’s visual identity.":
      "Desenvolvi materiais visuais para campanhas institucionais e educativas em mídias digitais e impressas. Transformei informações técnicas e regulatórias em conteúdo claro e acessível, em parceria com as equipes de comunicação e de conformidade para garantir o uso consistente da identidade visual do Conselho.",
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
    "Expected graduation · 2027.1": "Previsão de conclusão · 2027.1",
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
    "Logo, color, typography, motion and applications": "Logo, cor, tipografia, motion e aplicações",
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
      "Ao lado do monograma minimalista existe uma versão expressiva do nome, em colagem, feita de frutas, etiquetas e formas de adesivo. Ela traz as referências pop e do dia a dia que moldam meu trabalho e dá à marca espaço para ser barulhenta quando o contexto pede.",
    "Colorful collage wordmark spelling dante with fruits, labels and stickers on a black background":
      "Logotipo colorido em colagem formando dante com frutas, etiquetas e adesivos sobre fundo preto",
    "Stationery and posters": "Papelaria e pôsteres",
    "An ID card, a monogram poster and a poster listing the things I love (chess, frogs, skate, darts, video games, guitar) show how the \"d\" carries photos, icons and illustrations while the colors keep everything together.":
      "Uma carteirinha, um pôster com o monograma e um pôster com as coisas que eu amo (xadrez, sapos, skate, dardos, videogame, guitarra) mostram como o \"d\" carrega fotos, ícones e ilustrações enquanto as cores mantêm tudo unido.",
    "Blue ID card, green poster with the d monogram and red poster with white icons of hobbies":
      "Carteirinha azul, pôster verde com o monograma d e pôster vermelho com ícones brancos de hobbies",
    "The identity was also made to move. Small loops for social media and for this portfolio bring the mark to life on an old TV, in a pixel-art computer and in a set of paper toys.":
      "A identidade também foi feita para se mover. Pequenos loops para redes sociais e para este portfólio dão vida à marca numa TV antiga, num computador em pixel art e num conjunto de paper toys.",
    "Animation of the dante d appearing on an old television screen": "Animação do d de dante aparecendo na tela de uma televisão antiga",
    "Pixel-art animation of a smiling retro computer": "Animação em pixel art de um computador retrô sorrindo",
    "Paper toy figures holding hands above the words let us work together": "Bonecos de papel de mãos dadas acima das palavras vamos trabalhar juntos",
    "Applications": "Aplicações",
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
    "Pera Pera (ペラペラ) is a Japanese onomatopoeia for the sound of pages being flipped. The name became the starting point for a book brand whose whole experience revolves around the moment a new story arrives at the reader's door.":
      "Pera Pera (ペラペラ) é uma onomatopeia japonesa para o som de páginas sendo folheadas. O nome virou o ponto de partida de uma marca de livros cuja experiência inteira gira em torno do momento em que uma nova história chega à porta do leitor.",
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
    "Pink door hanger reading in progress, on a blue background": "Aviso de porta rosa de leitura em andamento, sobre fundo azul",
    "Lime door hanger reading in progress, on a pink background": "Aviso de porta lima de leitura em andamento, sobre fundo rosa",
    "Previous project: dante": "Projeto anterior: dante",
    "Next project: TRE-AL": "Próximo projeto: TRE-AL",

    /* Projeto: TRE-AL --------------------------------------------------------- */
    "TRE-AL institutional design | Victor Dante": "Design institucional TRE-AL | Victor Dante",
    "Institutional design for TRE-AL by Victor Dante: Elections 2026 campaign, 30 years of the electronic voting machine identity and a comic book against misinformation.":
      "Design institucional para o TRE-AL por Victor Dante: campanha das Eleições 2026, identidade dos 30 anos da urna eletrônica e uma revista em quadrinhos contra a desinformação.",
    "Institutional design for the Regional Electoral Court of Alagoas: social media campaigns for the 2026 elections, the identity for 30 years of the electronic voting machine and a comic book against misinformation.":
      "Design institucional para o Tribunal Regional Eleitoral de Alagoas: campanhas para as redes sociais nas eleições de 2026, a identidade dos 30 anos da urna eletrônica e uma revista em quadrinhos contra a desinformação.",
    "Elections 2026 post: who decides the future is whoever shows up": "Post das Eleições 2026: quem decide o futuro é quem aparece",
    "Institutional design": "Design institucional",
    "TRE-AL, Regional Electoral Court of Alagoas": "TRE-AL, Tribunal Regional Eleitoral de Alagoas",
    "Social media, visual identity, editorial and print": "Redes sociais, identidade visual, editorial e impressos",
    "From February 2025 to May 2026 I worked as an institutional designer at the Regional Electoral Court of Alagoas (TRE-AL), creating graphic material for informative campaigns, social media, print and digital content focused on citizenship.":
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
    "The story follows Dona Maria through everyday situations: messages on her phone, links shared in family groups, news that seem too urgent to be true. Along the way she learns to spot misleading content, check the origin of what she receives before passing it on and look for answers on the official channels of the Electoral Justice.":
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
    "Flyers and social media cards for a language school, where every commemorative date becomes a reason to talk about learning a new language.":
      "Flyers e cards para redes sociais de uma escola de idiomas, onde cada data comemorativa vira um motivo para falar sobre aprender um novo idioma.",
    "Pizza Party flyer with a boy eating a slice of pizza": "Flyer da Pizza Party com um menino comendo uma fatia de pizza",
    "Social media and print": "Redes sociais e impressos",
    "Event flyers, campaign cards and social media posts": "Flyers de eventos, cards de campanha e posts para redes sociais",
    "Since May 2026 I have been working as an institutional designer at System Idiomas, creating graphic material for informative campaigns, social media, print and digital content focused on turning followers into students.":
      "Desde maio de 2026 trabalho como designer institucional na System Idiomas, criando materiais gráficos para campanhas informativas, redes sociais, impressos e conteúdo digital com foco em transformar seguidores em alunos.",
    "The brand's red runs through every piece. On top of it, each one gets its own typographic voice: a soft, melting lettering for a party, a bold serif for a commemorative date, a hand-drawn hashtag for the calendar.":
      "O vermelho da marca percorre todas as peças. Sobre ele, cada uma ganha sua própria voz tipográfica: um lettering macio, derretendo, para uma festa, uma serifa robusta para uma data comemorativa, uma hashtag desenhada à mão para o calendário.",
    "The Pizza Party flyer invites kids from nursery to 5th grade, with the date, time and place gathered in a sticker-like box so the information is easy to find at a glance. The same key visual was adapted for Instagram, as a feed post and as a story.":
      "O flyer da Pizza Party convida crianças do maternal ao 5º ano, com data, horário e local reunidos num box em estilo adesivo para que a informação seja fácil de achar num relance. O mesmo key visual foi adaptado para o Instagram, como post no feed e como story.",
    "Pizza Party flyer with a boy eating a slice of pizza and the event information": "Flyer da Pizza Party com um menino comendo uma fatia de pizza e as informações do evento",
    "Phone mockups showing the Pizza Party campaign as an Instagram feed post, on the System Idiomas profile and as a story":
      "Mockups de celular mostrando a campanha Pizza Party como post no feed do Instagram, no perfil da System Idiomas e como story",
    "Social media": "Redes sociais",
    "Brazilian Cinema Day becomes \"our films have conquered the world, and so can you\". A \"#AnotaAí\" series lists the important dates of 2026, and a São João post asks what the June festivities would be like in English.":
      "O Dia do Cinema Brasileiro vira \"nossos filmes conquistaram o mundo, e você também pode\". Uma série \"#AnotaAí\" lista as datas importantes de 2026, e um post de São João pergunta como seria a festa junina em inglês.",
    "Red post for Brazilian Cinema Day: our films have conquered the world, and so can you":
      "Post vermelho para o Dia do Cinema Brasileiro: nossos filmes conquistaram o mundo, e você também pode",
    "Red post with the hand-drawn hashtag AnotaAí, important dates": "Post vermelho com a hashtag AnotaAí desenhada à mão, datas importantes",
    "Red post asking what if São João was in English": "Post vermelho perguntando e se o São João fosse em inglês",
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
    "A condensed, heavy typeface keeps the name readable on a box, a sign or a phone screen, and a simpler wordmark without the crest covers the smaller applications.":
      "Uma tipografia condensada e pesada mantém o nome legível numa caixa, numa fachada ou na tela do celular, e um logotipo mais simples, sem o brasão, atende as aplicações menores.",
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
    "A short kinetic typography piece made in After Effects to say I'm open for freelance work: the word \"Freela\" keeps changing its typeface, from pixel to script and back.":
      "Uma peça curta de tipografia cinética feita no After Effects para avisar que estou aberto a freelas: a palavra \"Freela\" não para de trocar de fonte, do pixel ao script e de volta.",
    "Animation of the word Freela switching between pixel and script typefaces": "Animação da palavra Freela alternando entre fontes pixel e script",
    "Motion design": "Motion design",
    "Personal project": "Projeto pessoal",
    "Kinetic typography in After Effects": "Tipografia cinética no After Effects",
    "\"Manda freela\" is how Brazilians ask for freelance work. This piece turns that line into motion: on a dark, paper-like background, the word \"Freela\" jumps between a pixel sans-serif and a pixel script, while a short note introduces me as a graphic designer, UI/UX designer and creative developer who is available for new projects.":
      "\"Manda freela\" é o jeito brasileiro de pedir trabalho freelance. Esta peça transforma essa frase em movimento: sobre um fundo escuro com textura de papel, a palavra \"Freela\" pula entre uma fonte pixel sem serifa e uma pixel script, enquanto um texto curto me apresenta como designer gráfico, designer UI/UX e desenvolvedor criativo disponível para novos projetos.",
    "Freela animation: the word Freela switching between pixel and script typefaces on a dark background":
      "Animação Freela: a palavra Freela alternando entre fontes pixel e script sobre fundo escuro",
    "Previous project: Clauss": "Projeto anterior: Clauss",
    "Read about the comic": "Saiba mais sobre a HQ",

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
    "A motion study made in After Effects, inspired by \"The Atlantic - All His Children\", by Mike Burton. Three paper dolls cut from the same strip hold hands in a loop, their halftone texture shifting from frame to frame, above the words \"let's work together\".":
      "Um estudo de motion feito no After Effects, inspirado em \"The Atlantic - All His Children\", de Mike Burton. Três bonecos de papel recortados da mesma tira dão as mãos em loop, com a textura de retícula mudando a cada quadro, acima das palavras \"let's work together\" (vamos trabalhar juntos).",
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

  const param = new URLSearchParams(window.location.search).get("lang");
  if (param === "pt" || param === "en") store.set(param);
  const lang = param === "pt" || param === "en" ? param : store.get() === "pt" ? "pt" : "en";

  const norm = (s) => s.replace(/\s+/g, " ").trim();

  // t("texto em inglês", { to: "..." }): tradução com marcadores {nome} opcionais
  const t = (text, vars) => {
    let out = lang === "pt" && PT[text] !== undefined ? PT[text] : text;
    if (vars) out = out.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
    return out;
  };

  window.i18n = { lang, t };

  const root = document.documentElement;
  if (lang === "pt") {
    root.lang = "pt-BR";
    root.classList.add("i18n-pending"); // esconde a página até traduzir (ver CSS)
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
      const value = PT[norm(raw)];
      if (value === undefined) return;
      // Mantém os espaços das pontas (separam palavras de elementos vizinhos)
      node.nodeValue = raw.match(/^\s*/)[0] + value + raw.match(/\s*$/)[0];
    });

    document.querySelectorAll(ATTRS.map((a) => `[${a}]`).join(",")).forEach((el) => {
      ATTRS.forEach((a) => {
        const v = el.getAttribute(a);
        if (v && PT[norm(v)] !== undefined) el.setAttribute(a, PT[norm(v)]);
      });
    });

    document.title = t(norm(document.title));
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t(norm(desc.getAttribute("content"))));
  };

  /* Botão EN/PT na navbar --------------------------------------------------- */
  // Mostra o idioma para onde o clique leva; o rótulo fica nesse idioma.
  const addToggle = () => {
    const nav = document.querySelector("[data-nav]");
    if (!nav) return;
    const next = lang === "pt" ? "en" : "pt";
    const label = next === "pt" ? "Ver em português" : "View in English";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav__link nav__lang";
    btn.textContent = next.toUpperCase();
    btn.lang = next === "pt" ? "pt-BR" : "en";
    btn.setAttribute("aria-label", label);
    btn.dataset.tooltip = label;
    btn.addEventListener("click", () => {
      store.set(next);
      const url = new URL(window.location.href);
      url.searchParams.delete("lang"); // senão o ?lang da URL venceria a escolha
      if (url.href === window.location.href) window.location.reload();
      else window.location.href = url.href;
    });
    nav.appendChild(btn);
  };

  const run = () => {
    try {
      if (lang === "pt") translatePage();
      addToggle();
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
