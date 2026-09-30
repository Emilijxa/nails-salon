import type { Language } from "./types";

const es = {
  seo: {
    title: "Neringa | Nail Technician",
    description:
      "Neringa Nail Technician. Manicura profesional y nail art. Consulta servicios, precios y trabajos, y reserva tu cita online.",
  },
  skipToContent: "Saltar al contenido",
  nav: {
    home: "Inicio",
    services: "Servicios",
    gallery: "Galería",
    about: "Sobre mí",
    reviews: "Opiniones",
    contact: "Contacto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    main: "Navegación principal",
    language: "Idioma",
  },
  cta: {
    book: "Reservar cita",
    viewWork: "Ver trabajos",
    instagram: "Sígueme en Instagram",
    whatsapp: "Escribir por WhatsApp",
  },
  hero: {
    tagline: "Manicura cuidada al detalle, pensada para que te sientas bien.",
  },
  services: {
    heading: "Servicios",
    subtitle:
      "Tratamientos pensados para un acabado limpio, elegante y duradero.",
    price: "Precio",
    duration: "Duración",
    bookThis: "Reservar",
    items: {
      semiPermanent: {
        name: "Manicura semipermanente",
        description:
          "Color duradero y un acabado pulido, con atención al detalle en cada uña.",
      },
      gelNails: {
        name: "Uñas de gel",
        description:
          "Forma y resistencia con gel, para un resultado elegante y natural.",
      },
      fill: {
        name: "Relleno",
        description:
          "Mantenimiento del crecimiento para conservar la forma y el acabado.",
      },
      removal: {
        name: "Retirada",
        description:
          "Retirada cuidadosa del producto, respetando la uña natural.",
      },
      nailArt: {
        name: "Nail art",
        description:
          "Detalles a medida: desde un acento discreto hasta un diseño más elaborado.",
      },
    },
  },
  bookingMid: {
    heading: "Encuentra el momento que mejor te venga.",
    body: "Elige tu tratamiento, consulta las citas disponibles y confirma el día y la hora online. El pago se realiza aparte, según el proceso habitual de Neringa.",
  },
  gallery: {
    heading: "Galería",
    subtitle: "Una selección de manicuras y nail art realizados por Neringa.",
    placeholderBadge: "Marcador de posición",
    close: "Cerrar",
    previous: "Imagen anterior",
    next: "Imagen siguiente",
    dialog: "Vista ampliada de la galería",
    counter: "{current} de {total}",
    filmstrip: "Carrusel de trabajos",
    alts: {
      pinkShimmerBeforeAfter:
        "Antes y después: manicura en rosa nude con un brillo perlado.",
      glitterArt: "Manicura almendra en rosa nude con glitter, flor y detalle de strass.",
      milkyWhite: "Manicura corta en blanco lechoso con acabado brillante.",
      roseShimmer: "Manicura en rosa champagne con efecto shimmer.",
      frenchSoft: "Manicura francesa suave en rosa con punta blanca.",
      hotPink: "Manicura ovalada en rosa fucsia brillante.",
      frenchClassic: "Manicura francesa en rosa natural con punta blanca.",
      wineRed: "Manicura cuadrada en burdeos con brillo.",
    },
  },
  about: {
    heading: "Sobre mí",
    p1: "Neringa dedica cada cita a un trabajo limpio, cuidadoso y personalizado. El objetivo es que te sientas a gusto y salgas con uñas que te gusten de verdad.",
    p2: "Cuida la forma, el acabado y los pequeños detalles, para un resultado que se vea natural en tu día a día.",
    p3: "Texto de presentación pendiente de completar. Aquí se podrá añadir más información personal cuando Neringa lo indique. No se incluyen años de experiencia ni titulaciones hasta que se confirmen.",
    portraitAlt: "Neringa, técnica de uñas, en su espacio de trabajo.",
    portraitCaption: "Neringa",
  },
  reviews: {
    heading: "Opiniones",
    subtitle: "",
    client: "Cliente",
    lina: "Lina",
    olga: "Olga",
    rasa: "Rasa",
    ratingLabel: "Valoración: {rating} de 5",
    postedOnLabel: "Publicado el {date}",
    items: {
      placeholder1:
        "¡Neringa fue fabulosa! Una técnica excelente y una conversadora encantadora. Disfruté mucho de mi pedicura.",
      placeholder2:
        "Una experiencia maravillosa, maravillosa, maravillosa. Mi amiga y yo vinimos hoy por primera vez con Neringa. Disfrutamos cada momento. Todo tan limpio. ¡Técnica encantadora! Resultado perfecto. Uñas preciosas y, en conjunto, una experiencia preciosa. Gracias☺️",
      placeholder3:
        "Fue absolutamente encantadora. Prestó mucha atención al detalle, y el diseño quedó perfecto, exactamente como yo quería. No podría estar más contenta con el resultado. ¡La recomiendo totalmente!",
    },
  },
  bookingFinal: {
    heading: "¿Lista para tus próximas uñas?",
    body: "Elige tu servicio, mira los horarios disponibles y reserva tu cita online en unos minutos.",
  },
  contact: {
    heading: "Contacto",
    subtitle: "Estaré encantada de atenderte. Para reservar, lo más sencillo es hacerlo online.",
    location: "Ubicación",
    phone: "Teléfono",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    instagramPending: "Perfil de Instagram pendiente de añadir.",
    email: "Correo",
    hours: "Horario orientativo",
    hoursNote:
      "Este horario es solo informativo. La disponibilidad real se muestra en la reserva.",
    addressNote: "Dirección exacta facilitada al confirmar la cita.",
    locationPending: "Ubicación pendiente de indicar.",
    phonePending: "Teléfono pendiente de indicar.",
    emailPending: "Correo pendiente de indicar.",
  },
  hours: {
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Miércoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sábado",
    sunday: "Domingo",
    closed: "Cerrado",
  },
  footer: {
    privacy: "Privacidad",
    legal: "Aviso legal",
    rights: "Todos los derechos reservados.",
    backHome: "Volver al inicio",
  },
  whatsapp: {
    defaultMessage:
      "Hola Neringa, he visto tu página web y quería hacer una consulta.",
    ariaLabel: "Escribir a Neringa por WhatsApp",
  },
  language: {
    label: "Seleccionar idioma",
  },
  privacy: {
    title: "Política de privacidad",
    updated: "Documento pendiente de completar antes de la publicación.",
    p1: "Esta página web está pensada para presentar los servicios de Neringa Nail Technician y dirigir las reservas al sistema de citas de Square. No se ha añadido un formulario de contacto propio ni un boletín.",
    p2: "Si reservas una cita, tus datos (nombre, correo, teléfono y detalles de la reserva) los trata Square según su propia política de privacidad. Esta web no almacena esa información.",
    p3: "Si escribes por WhatsApp, teléfono, correo o Instagram, el tratamiento de esa conversación depende del servicio que uses. No se instalan cookies de marketing ni herramientas de analítica por defecto.",
    p4: "Antes de publicar el sitio, este texto debe completarse con los datos reales de la responsable del tratamiento (identidad, datos de contacto y, si aplica, NIF). No se incluyen aquí datos fiscales inventados.",
    p5: "Para ejercer derechos de acceso, rectificación, supresión u otros derechos previstos en el RGPD, usa los datos de contacto que se indiquen cuando esta sección esté completa.",
  },
  legal: {
    title: "Aviso legal",
    updated: "Documento pendiente de completar antes de la publicación.",
    p1: "Esta página es un marcador de posición para el aviso legal exigido en España. Debe incluir la identidad de la titular, los datos de contacto y, cuando corresponda, el NIF y el domicilio profesional.",
    p2: "Esos datos no se han inventado. Se añadirán cuando Neringa los facilite.",
    p3: "El contenido de esta web es informativo. Las reservas y la disponibilidad se gestionan a través de Square Appointments.",
    p4: "Las fotografías de la galería muestran trabajos de Neringa.",
  },
};

const en: typeof es = {
  seo: {
    title: "Neringa | Nail Technician",
    description:
      "Neringa Nail Technician. Professional manicures and nail art. Explore services, prices and work, then book your appointment online.",
  },
  skipToContent: "Skip to content",
  nav: {
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    about: "About",
    reviews: "Reviews",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    main: "Main navigation",
    language: "Language",
  },
  cta: {
    book: "Book appointment",
    viewWork: "View work",
    instagram: "Follow me on Instagram",
    whatsapp: "Message on WhatsApp",
  },
  hero: {
    tagline: "Thoughtfully finished manicures, designed to make you feel your best.",
  },
  services: {
    heading: "Services",
    subtitle:
      "Treatments focused on a clean, elegant, lasting finish.",
    price: "Price",
    duration: "Duration",
    bookThis: "Book",
    items: {
      semiPermanent: {
        name: "Gel polish manicure",
        description: "Long-wearing colour and a polished finish, with care given to every nail.",
      },
      gelNails: {
        name: "Gel nails",
        description: "Shape and strength in gel, for an elegant, natural-looking result.",
      },
      fill: {
        name: "Fill",
        description: "Maintenance as the nails grow, to keep the shape and finish.",
      },
      removal: {
        name: "Removal",
        description: "Careful product removal that respects the natural nail.",
      },
      nailArt: {
        name: "Nail art",
        description: "Made-to-measure details, from a quiet accent to a more elaborate design.",
      },
    },
  },
  bookingMid: {
    heading: "Find a time that suits you.",
    body: "Choose your treatment, see available appointments and confirm a day and time online. Payment is arranged separately, according to Neringa’s usual process.",
  },
  gallery: {
    heading: "Gallery",
    subtitle: "A selection of manicures and nail art by Neringa.",
    placeholderBadge: "Placeholder",
    close: "Close",
    previous: "Previous image",
    next: "Next image",
    dialog: "Enlarged gallery view",
    counter: "{current} of {total}",
    filmstrip: "Work filmstrip",
    alts: {
      pinkShimmerBeforeAfter:
        "Before and after: nude-pink manicure with a pearly shimmer.",
      glitterArt: "Almond nails in nude pink with glitter, a floral accent and a crystal detail.",
      milkyWhite: "Short milky-white manicure with a glossy finish.",
      roseShimmer: "Champagne-pink manicure with a shimmer finish.",
      frenchSoft: "Soft French manicure in pink with a white tip.",
      hotPink: "Oval nails in glossy fuchsia pink.",
      frenchClassic: "Natural pink French manicure with a white tip.",
      wineRed: "Square nails in glossy burgundy.",
    },
  },
  about: {
    heading: "About",
    p1: "Neringa gives each appointment clean, careful, personal work. The aim is for you to feel at ease and leave with nails you truly like.",
    p2: "She pays attention to shape, finish and the quiet details, so the result feels natural in everyday life.",
    p3: "Introduction still to be completed. Further personal information can be added here when Neringa provides it. Years of experience and qualifications are not listed until they are confirmed.",
    portraitAlt: "Neringa, nail technician, at her work table.",
    portraitCaption: "Neringa",
  },
  reviews: {
    heading: "Reviews",
    subtitle: "",
    client: "Client",
    lina: "Lina",
    olga: "Olga",
    rasa: "Rasa",
    ratingLabel: "Rating: {rating} out of 5",
    postedOnLabel: "Posted {date}",
    items: {
      placeholder1:
        "Neringa was fabulous! An excellent technician and warm conversationalist. I really enjoyed my pedicure",
      placeholder2:
        "A wonderful, wonderful, wonderful experience. My friend and I came in for our first experience with Neringa today. We loved every moment. So clean. Lovely technician! Perfect results. Beautiful nails and overall a lovely experience. Thank you☺️",
      placeholder3:
        "She was absolutely lovely. She paid great attention to detail, and the design turned out perfect, exactly what I wanted. I couldn’t be happier with the result. Highly recommend!",
    },
  },
  bookingFinal: {
    heading: "Ready for your next set?",
    body: "Choose your service, see available times and book your appointment online in a few minutes.",
  },
  contact: {
    heading: "Contact",
    subtitle: "I would be glad to hear from you. The simplest way to book is online.",
    location: "Location",
    phone: "Phone",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    instagramPending: "Instagram profile still to be added.",
    email: "Email",
    hours: "Indicative hours",
    hoursNote:
      "These hours are for guidance only. Real availability is shown when you book.",
    addressNote: "Exact address provided when the appointment is confirmed.",
    locationPending: "Location still to be added.",
    phonePending: "Phone number still to be added.",
    emailPending: "Email still to be added.",
  },
  hours: {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
  },
  footer: {
    privacy: "Privacy",
    legal: "Legal notice",
    rights: "All rights reserved.",
    backHome: "Back to home",
  },
  whatsapp: {
    defaultMessage: "Hi Neringa, I found your website and wanted to ask you a question.",
    ariaLabel: "Message Neringa on WhatsApp",
  },
  language: {
    label: "Choose language",
  },
  privacy: {
    title: "Privacy policy",
    updated: "This document still needs to be completed before the site goes live.",
    p1: "This website presents the services of Neringa Nail Technician and sends bookings to Square Appointments. There is no contact form or newsletter on this site.",
    p2: "If you book an appointment, Square processes your details (name, email, phone and booking information) under its own privacy policy. This website does not store that information.",
    p3: "If you write via WhatsApp, phone, email or Instagram, that conversation is handled by the service you use. No marketing cookies or analytics tools are installed by default.",
    p4: "Before launch, this page must be completed with the real identity and contact details of the data controller. No invented tax or company information is included here.",
    p5: "To exercise access, rectification, erasure or other rights under the GDPR, use the contact details that will be listed once this section is complete.",
  },
  legal: {
    title: "Legal notice",
    updated: "This document still needs to be completed before the site goes live.",
    p1: "This page is a placeholder for the legal notice required in Spain. It should include the owner’s identity, contact details and, where applicable, tax identification and professional address.",
    p2: "Those details have not been invented. They will be added when Neringa provides them.",
    p3: "The content of this website is informational. Bookings and availability are managed through Square Appointments.",
    p4: "Gallery photographs show Neringa’s work.",
  },
};

const ru: typeof es = {
  seo: {
    title: "Neringa | Nail Technician",
    description:
      "Neringa Nail Technician. Профессиональный маникюр и нейл-арт. Услуги, цены и работы — запись на процедуру онлайн.",
  },
  skipToContent: "Перейти к содержимому",
  nav: {
    home: "Главная",
    services: "Услуги",
    gallery: "Галерея",
    about: "Обо мне",
    reviews: "Отзывы",
    contact: "Контакты",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    main: "Основная навигация",
    language: "Язык",
  },
  cta: {
    book: "Записаться",
    viewWork: "Смотреть работы",
    instagram: "Подписывайтесь в Instagram",
    whatsapp: "Написать в WhatsApp",
  },
  hero: {
    tagline: "Аккуратный маникюр с вниманием к деталям — чтобы вы чувствовали себя прекрасно.",
  },
  services: {
    heading: "Услуги",
    subtitle:
      "Процедуры для чистого, элегантного и стойкого результата.",
    price: "Цена",
    duration: "Длительность",
    bookThis: "Записаться",
    items: {
      semiPermanent: {
        name: "Маникюр с гель-лаком",
        description: "Стойкий цвет и аккуратный финиш, с вниманием к каждому ногтю.",
      },
      gelNails: {
        name: "Гелевые ногти",
        description: "Форма и прочность с гелем — для элегантного, естественного вида.",
      },
      fill: {
        name: "Коррекция",
        description: "Поддержание формы и покрытия по мере отрастания ногтя.",
      },
      removal: {
        name: "Снятие покрытия",
        description: "Бережное снятие материала с заботой о натуральном ногте.",
      },
      nailArt: {
        name: "Нейл-арт",
        description: "Декор по желанию: от сдержанного акцента до более сложного дизайна.",
      },
    },
  },
  bookingMid: {
    heading: "Выберите удобное для вас время.",
    body: "Выберите процедуру, посмотрите свободные слоты и подтвердите день и час онлайн. Оплата проходит отдельно — как обычно принято у Неринги.",
  },
  gallery: {
    heading: "Галерея",
    subtitle: "Подборка маникюра и нейл-арта Неринги.",
    placeholderBadge: "Временное фото",
    close: "Закрыть",
    previous: "Предыдущее изображение",
    next: "Следующее изображение",
    dialog: "Увеличенный просмотр галереи",
    counter: "{current} из {total}",
    filmstrip: "Лента работ",
    alts: {
      pinkShimmerBeforeAfter:
        "До и после: нюдово-розовый маникюр с жемчужным сиянием.",
      glitterArt: "Миндалевидный маникюр в нюдовом розовом с блёстками, цветком и стразом.",
      milkyWhite: "Короткий молочно-белый маникюр с глянцевым покрытием.",
      roseShimmer: "Маникюр цвета шампанского с шиммером.",
      frenchSoft: "Мягкий французский маникюр в розовом с белым кончиком.",
      hotPink: "Овальный маникюр в ярком фуксии.",
      frenchClassic: "Французский маникюр в натуральном розовом с белым кончиком.",
      wineRed: "Квадратный маникюр в бордовом с блеском.",
    },
  },
  about: {
    heading: "Обо мне",
    p1: "Неринга уделяет каждой встрече чистое, внимательное и индивидуальное выполнение. Важно, чтобы вам было комфортно и чтобы ногти вам искренне нравились.",
    p2: "Она следит за формой, финишем и мелкими деталями, чтобы результат выглядел естественно в повседневной жизни.",
    p3: "Текст знакомства ещё предстоит дополнить. Личную информацию можно будет добавить, когда Неринга её предоставит. Стаж и дипломы не указываются, пока они не подтверждены.",
    portraitAlt: "Неринга, мастер маникюра, за рабочим столом.",
    portraitCaption: "Neringa",
  },
  reviews: {
    heading: "Отзывы",
    subtitle: "",
    client: "Клиент",
    lina: "Lina",
    olga: "Olga",
    rasa: "Rasa",
    ratingLabel: "Оценка: {rating} из 5",
    postedOnLabel: "Опубликовано {date}",
    items: {
      placeholder1:
        "Неринга была чудесной! Отличный мастер и тёплая собеседница. Педикюр мне очень понравился.",
      placeholder2:
        "Чудесный, чудесный, чудесный опыт. Мы с подругой пришли сегодня к Неринге в первый раз. Нам понравился каждый момент. Так чисто. Замечательный мастер! Идеальный результат. Красивые ногти и в целом прекрасное впечатление. Спасибо☺️",
      placeholder3:
        "Она была абсолютно чудесной. Она уделила огромное внимание деталям, и дизайн получился идеальным — именно таким, как я хотела. Я невероятно довольна результатом. Очень рекомендую!",
    },
  },
  bookingFinal: {
    heading: "Готовы к новому маникюру?",
    body: "Выберите услугу, посмотрите свободное время и запишитесь онлайн за несколько минут.",
  },
  contact: {
    heading: "Контакты",
    subtitle: "Буду рада вашему сообщению. Самый простой способ записаться — онлайн.",
    location: "Расположение",
    phone: "Телефон",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    instagramPending: "Профиль Instagram ещё не добавлен.",
    email: "Эл. почта",
    hours: "Ориентировочные часы",
    hoursNote:
      "Это часы только для справки. Реальная доступность видна при записи.",
    addressNote: "Точный адрес сообщается после подтверждения записи.",
    locationPending: "Расположение пока не указано.",
    phonePending: "Телефон пока не указан.",
    emailPending: "Эл. почта пока не указана.",
  },
  hours: {
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота",
    sunday: "Воскресенье",
    closed: "Выходной",
  },
  footer: {
    privacy: "Конфиденциальность",
    legal: "Правовая информация",
    rights: "Все права защищены.",
    backHome: "На главную",
  },
  whatsapp: {
    defaultMessage: "Здравствуйте, Неринга! Я нашла ваш сайт и хотела задать вопрос.",
    ariaLabel: "Написать Неринге в WhatsApp",
  },
  language: {
    label: "Выберите язык",
  },
  privacy: {
    title: "Политика конфиденциальности",
    updated: "Документ необходимо заполнить до публикации сайта.",
    p1: "Этот сайт представляет услуги Neringa Nail Technician и направляет запись в систему Square. Собственной формы обратной связи и рассылки здесь нет.",
    p2: "Если вы записываетесь на процедуру, ваши данные (имя, почта, телефон и сведения о записи) обрабатывает Square согласно своей политике. Этот сайт их не хранит.",
    p3: "Если вы пишете в WhatsApp, по телефону, почте или в Instagram, переписку обрабатывает выбранный сервис. Маркетинговые cookie и аналитика по умолчанию не устанавливаются.",
    p4: "Перед запуском эту страницу нужно дополнить реальными данными оператора (личность, контакты и, при необходимости, налоговый номер). Вымышленные реквизиты здесь не приводятся.",
    p5: "Чтобы воспользоваться правами на доступ, исправление, удаление и другими правами по GDPR, используйте контакты, которые появятся после заполнения этого раздела.",
  },
  legal: {
    title: "Правовая информация",
    updated: "Документ необходимо заполнить до публикации сайта.",
    p1: "Это заготовка правового уведомления, обязательного в Испании. В нём должны быть указаны личность владелицы, контакты и, при необходимости, налоговый номер и профессиональный адрес.",
    p2: "Эти сведения не выдуманы. Они будут добавлены, когда Неринга их предоставит.",
    p3: "Содержание сайта носит информационный характер. Запись и свободное время ведутся через Square Appointments.",
    p4: "Фотографии в галерее — работы Неринги.",
  },
};

const lt: typeof es = {
  seo: {
    title: "Neringa | Nail Technician",
    description:
      "Neringa Nail Technician. Profesionalus manikiūras ir nail art. Paslaugos, kainos ir darbai — rezervuokite vizitą internetu.",
  },
  skipToContent: "Pereiti prie turinio",
  nav: {
    home: "Pradžia",
    services: "Paslaugos",
    gallery: "Galerija",
    about: "Apie mane",
    reviews: "Atsiliepimai",
    contact: "Kontaktai",
    openMenu: "Atidaryti meniu",
    closeMenu: "Uždaryti meniu",
    main: "Pagrindinė navigacija",
    language: "Kalba",
  },
  cta: {
    book: "Rezervuoti vizitą",
    viewWork: "Peržiūrėti darbus",
    instagram: "Sekite mane Instagram",
    whatsapp: "Rašyti per WhatsApp",
  },
  hero: {
    tagline: "Kruopščiai atliktas manikiūras, sukurtas tam, kad jaustumėtės gerai.",
  },
  services: {
    heading: "Paslaugos",
    subtitle:
      "Procedūros švariam, elegantiškam ir ilgaamžiui rezultatui.",
    price: "Kaina",
    duration: "Trukmė",
    bookThis: "Rezervuoti",
    items: {
      semiPermanent: {
        name: "Semipermanentinis manikiūras",
        description: "Ilgai išliekanti spalva ir tvarkinga apdaila, rūpestingai kiekvienam nagui.",
      },
      gelNails: {
        name: "Geliniai nagai",
        description: "Forma ir tvirtumas su geliu — elegantiškam, natūraliam vaizdui.",
      },
      fill: {
        name: "Korekcija",
        description: "Priežiūra nagams augant, kad išliktų forma ir apdaila.",
      },
      removal: {
        name: "Nuėmimas",
        description: "Atsargus dangos nuėmimas, tausojant natūralų nagą.",
      },
      nailArt: {
        name: "Nail art",
        description: "Individualūs akcentai: nuo ramaus akcento iki sudėtingesnio piešinio.",
      },
    },
  },
  bookingMid: {
    heading: "Raskite jums tinkamiausią laiką.",
    body: "Pasirinkite procedūrą, peržiūrėkite laisvus laikus ir patvirtinkite dieną bei valandą internetu. Atsiskaitymas vyksta atskirai, pagal įprastą Neringos tvarką.",
  },
  gallery: {
    heading: "Galerija",
    subtitle: "Neringos manikiūro ir nail art darbų atranka.",
    placeholderBadge: "Laikina iliustracija",
    close: "Uždaryti",
    previous: "Ankstesnis vaizdas",
    next: "Kitas vaizdas",
    dialog: "Išdidinta galerijos peržiūra",
    counter: "{current} iš {total}",
    filmstrip: "Darbų juosta",
    alts: {
      pinkShimmerBeforeAfter:
        "Prieš ir po: nude rožinis manikiūras su perlamutriniu švytėjimu.",
      glitterArt: "Migdolų formos manikiūras nude rožinė su blizgučiais, gėle ir kristalu.",
      milkyWhite: "Trumpas pieniškai baltas manikiūras su blizgia danga.",
      roseShimmer: "Šampaninės rožinės manikiūras su švytėjimo efektu.",
      frenchSoft: "Švelnus prancūziškas manikiūras rožine su baltu galiuku.",
      hotPink: "Ovalus manikiūras ryškia fuksijos spalva.",
      frenchClassic: "Prancūziškas manikiūras natūralia rožine su baltu galiuku.",
      wineRed: "Kvadratinis manikiūras blizgia bordo spalva.",
    },
  },
  about: {
    heading: "Apie mane",
    p1: "Kiekvienam vizitui Neringa skiria švarų, rūpestingą ir asmeninį darbą. Svarbu, kad jaustumėtės ramiai ir išeitumėte su nagais, kurie jums iš tikrųjų patinka.",
    p2: "Ji atidžiai žiūri į formą, apdailą ir smulkias detales, kad rezultatas atrodytų natūraliai kasdienybėje.",
    p3: "Pristatymo tekstas dar pildomas. Daugiau asmeninės informacijos galima įrašyti, kai Neringa ją pateiks. Darbo stažas ir kvalifikacijos nenurodomi, kol nėra patvirtinti.",
    portraitAlt: "Neringa, nagų meistrė, prie darbo stalo.",
    portraitCaption: "Neringa",
  },
  reviews: {
    heading: "Atsiliepimai",
    subtitle: "",
    client: "Klientė",
    lina: "Lina",
    olga: "Olga",
    rasa: "Rasa",
    ratingLabel: "Įvertinimas: {rating} iš 5",
    postedOnLabel: "Paskelbta {date}",
    items: {
      placeholder1:
        "Neringa buvo nuostabi! Puiki meistrė ir šilta pašnekovė. Pedikiūras man labai patiko.",
      placeholder2:
        "Nuostabi, nuostabi, nuostabi patirtis. Su drauge šiandien pirmą kartą atėjome pas Neringą. Mums patiko kiekviena akimirka. Taip švaru. Nuostabi meistrė! Tobulas rezultatas. Gražūs nagai ir apskritai miela patirtis. Ačiū☺️",
      placeholder3:
        "Ji buvo visiškai nuostabi. Ji labai atidžiai žiūrėjo į detales, o dizainas išėjo tobulas — būtent toks, kokio norėjau. Esu nepaprastai patenkinta rezultatu. Labai rekomenduoju!",
    },
  },
  bookingFinal: {
    heading: "Pasiruošusi naujam manikiūrui?",
    body: "Pasirinkite paslaugą, peržiūrėkite laisvus laikus ir rezervuokite vizitą internetu per kelias minutes.",
  },
  contact: {
    heading: "Kontaktai",
    subtitle: "Mielai atsakysiu. Paprasčiausia rezervuoti vizitą internetu.",
    location: "Vieta",
    phone: "Telefonas",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    instagramPending: "Instagram profilis dar nepridėtas.",
    email: "El. paštas",
    hours: "Orientacinės valandos",
    hoursNote:
      "Šios valandos tik informacinės. Tikras laisvas laikas matomas rezervuojant.",
    addressNote: "Tikslus adresas pateikiamas patvirtinus vizitą.",
    locationPending: "Vieta dar nenurodyta.",
    phonePending: "Telefonas dar nenurodytas.",
    emailPending: "El. paštas dar nenurodytas.",
  },
  hours: {
    monday: "Pirmadienis",
    tuesday: "Antradienis",
    wednesday: "Trečiadienis",
    thursday: "Ketvirtadienis",
    friday: "Penktadienis",
    saturday: "Šeštadienis",
    sunday: "Sekmadienis",
    closed: "Nedirbama",
  },
  footer: {
    privacy: "Privatumas",
    legal: "Teisinė informacija",
    rights: "Visos teisės saugomos.",
    backHome: "Grįžti į pradžią",
  },
  whatsapp: {
    defaultMessage:
      "Sveiki, Neringa, pamačiau jūsų svetainę ir norėjau pasikonsultuoti.",
    ariaLabel: "Rašyti Neringai per WhatsApp",
  },
  language: {
    label: "Pasirinkti kalbą",
  },
  privacy: {
    title: "Privatumo politika",
    updated: "Šį dokumentą reikia užpildyti prieš svetainės paleidimą.",
    p1: "Ši svetainė pristato Neringa Nail Technician paslaugas ir nukreipia rezervacijas į Square sistemą. Čia nėra atskiros kontaktų formos ar naujienlaiškio.",
    p2: "Jei rezervuojate vizitą, jūsų duomenis (vardą, el. paštą, telefoną ir rezervacijos informaciją) tvarko Square pagal savo politiką. Ši svetainė tų duomenų nesaugo.",
    p3: "Jei rašote per WhatsApp, telefonu, el. paštu ar Instagram, pokalbį tvarko ta paslauga, kuria naudojatės. Rinkodaros slapukai ir analitika pagal numatymą neįdiegti.",
    p4: "Prieš paleidimą šį puslapį reikia papildyti tikrais duomenų valdytojos tapatybės ir kontaktų duomenimis. Čia nėra sugalvotų mokestinių rekvizitų.",
    p5: "Norėdami pasinaudoti teise susipažinti, ištaisyti, ištrinti ar kitomis BDAR teisėmis, naudokite kontaktus, kurie bus nurodyti užpildžius šį skyrių.",
  },
  legal: {
    title: "Teisinė informacija",
    updated: "Šį dokumentą reikia užpildyti prieš svetainės paleidimą.",
    p1: "Tai Ispanijoje privalomo teisinio pranešimo vieta. Jame turi būti savininkės tapatybė, kontaktai ir, jei taikoma, mokesčių mokėtojo kodas bei profesinis adresas.",
    p2: "Šie duomenys nėra sugalvoti. Jie bus įrašyti, kai Neringa juos pateiks.",
    p3: "Svetainės turinys informacinis. Rezervacijas ir laisvą laiką tvarko Square Appointments.",
    p4: "Galerijos nuotraukos rodo Neringos darbus.",
  },
};

export const translations: Record<Language, typeof es> = {
  es,
  en,
  ru,
  lt,
};

export type Translation = typeof es;
