import { VISUALS } from './visual-assets.js';

// SØD Library curation switchboard.
// To make a book fully operational later, only fill pdfUrl / summaryUrl / audioUrl.
// pdfUrl may be a direct PDF URL. summaryUrl and audioUrl may be YouTube URLs.
export const libraryBooks = [
  {
    id:'book-01',
    priority:1,
    title:'Cómo ganar amigos e influir sobre las personas',
    author:'Dale Carnegie',
    category:'Liderazgo',
    shortDescription:'Un clásico sobre comunicación, empatía, influencia y relaciones humanas.',
    longDescription:'Publicado originalmente en 1936, Dale Carnegie reúne principios prácticos para relacionarse mejor con otras personas, escuchar con atención, evitar confrontaciones inútiles y ejercer influencia sin recurrir a la imposición. Sigue siendo una referencia central en comunicación interpersonal y liderazgo.',
    year:'1936',language:'Español',
    tags:['Relaciones','Comunicación','Influencia'],
    cover:VISUALS.libraryBook01,
    pdfFileName:'Como Ganar Amigos e Influir Sobre Las Personas.PDF',
    pdfUrl:'',summaryUrl:'',audioUrl:'',
    recommended:true,featured:true
  },
  {
    id:'book-02',priority:7,title:'Burlar al diablo',author:'Napoleon Hill',category:'Mentalidad',
    shortDescription:'Una conversación alegórica sobre miedo, indecisión, hábitos y control de la propia mente.',
    longDescription:'Escrito por Napoleon Hill en 1938 y publicado de manera póstuma décadas después, el libro presenta una entrevista ficticia con “el Diablo” para explorar por qué las personas quedan atrapadas en el miedo, la procrastinación y la falta de propósito definido. Su idea central es recuperar dominio sobre el pensamiento y la dirección personal.',
    year:'2011 · publicación póstuma',language:'Español',tags:['Miedo','Propósito','Disciplina mental'],cover:VISUALS.libraryBook03,
    pdfFileName:'feismo.com-burlar-al-diablo-secretos-desde-la-cripta-napoleon-hill-pr_318d8a3c4cdf2159610cf42eb72f64e4.pdf',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:true,featured:false
  },
  {
    id:'book-03',priority:5,title:'El monje que vendió su Ferrari',author:'Robin Sharma',category:'Propósito',
    shortDescription:'Una fábula sobre propósito, disciplina interior, equilibrio y transformación personal.',
    longDescription:'Robin Sharma narra la historia de Julian Mantle, un abogado exitoso cuya crisis de salud lo lleva a replantear por completo su manera de vivir. A través de una fábula accesible, el libro desarrolla ideas sobre propósito, autodisciplina, dominio de la mente, tiempo y servicio.',
    year:'1997',language:'Español',tags:['Propósito','Disciplina','Transformación'],cover:VISUALS.libraryBook04,
    pdfFileName:'EL-MONJE-QUE-VENDIO-SU-FERRARI-AUTOR-ROBIN-SHARMA.pdf',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:true,featured:true
  },
  {
    id:'book-04',priority:2,title:'Piense y hágase rico',author:'Napoleon Hill',category:'Riqueza',
    shortDescription:'Un clásico sobre propósito definido, deseo, decisión, persistencia y logro.',
    longDescription:'Publicado en 1937, Piense y hágase rico sintetiza principios que Napoleon Hill asoció con personas de gran éxito. Aunque suele leerse como un libro financiero, su núcleo es más amplio: claridad de propósito, autosugestión, planificación, decisión y persistencia como herramientas para transformar intención en resultado.',
    year:'1937',language:'Español',tags:['Riqueza','Propósito','Persistencia'],cover:VISUALS.libraryBook05,
    pdfFileName:'Adelanto-Piense-y-hagase-rico.pdf',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:true,featured:true
  },
  {
    id:'book-05',priority:3,title:'Los secretos de la mente millonaria',author:'T. Harv Eker',category:'Riqueza',
    shortDescription:'Creencias, hábitos financieros y patrones mentales asociados a la relación con el dinero.',
    longDescription:'T. Harv Eker propone que cada persona desarrolla un “patrón financiero” a partir de experiencias, mensajes familiares y creencias aprendidas. El libro busca hacer visibles esas asociaciones para poder reemplazar hábitos y marcos mentales que dificultan una relación más deliberada con el dinero.',
    year:'2005',language:'Español',tags:['Dinero','Creencias','Mentalidad'],cover:VISUALS.libraryBook06,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:true,featured:true
  },
  {
    id:'book-06',priority:10,title:'Poder sin límites',author:'Tony Robbins',category:'Desarrollo personal',
    shortDescription:'Un libro sobre estados internos, creencias, comunicación y rendimiento personal.',
    longDescription:'Publicado en 1986, Tony Robbins combina ideas de programación neurolingüística, fisiología, lenguaje y modelado de conductas para explicar cómo las personas pueden modificar estados internos y estrategias de acción. Es uno de los títulos tempranos más influyentes de su trabajo.',
    year:'1986',language:'Español',tags:['PNL','Estados internos','Rendimiento'],cover:VISUALS.libraryBook08,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:false,featured:false
  },
  {
    id:'book-07',priority:11,title:'El secreto',author:'Rhonda Byrne',category:'Espiritualidad',
    shortDescription:'Una introducción popular a la ley de atracción, enfoque mental y visualización.',
    longDescription:'Publicado en 2006, El secreto popularizó la idea de la ley de atracción mediante testimonios y enseñanzas sobre pensamiento, gratitud y visualización. Dentro de SØD conviene leerlo como una obra cultural influyente sobre mentalidad, no como una explicación científica de causalidad.',
    year:'2006',language:'Español',tags:['Visualización','Gratitud','Ley de atracción'],cover:VISUALS.libraryBook07,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:false,featured:false
  },
  {
    id:'book-08',priority:8,title:'El club de las 5 de la mañana',author:'Robin Sharma',category:'Hábitos',
    shortDescription:'Una fábula práctica sobre rutina matinal, foco, aprendizaje y disciplina.',
    longDescription:'Robin Sharma presenta una narrativa alrededor de una rutina de mañana destinada a proteger atención, energía y tiempo de crecimiento personal. El libro combina ficción con métodos de productividad y propone comenzar el día con bloques deliberados de movimiento, reflexión y aprendizaje.',
    year:'2018',language:'Español',tags:['Hábitos','Mañanas','Foco'],cover:VISUALS.libraryBook09,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:true,featured:false
  },
  {
    id:'book-09',priority:14,title:'Si lo crees, lo creas',author:'Brian Tracy',category:'Mentalidad',
    shortDescription:'Una guía para revisar pensamientos limitantes y construir una mentalidad orientada a la acción.',
    longDescription:'Brian Tracy desarrolla ideas sobre autoconcepto, objetivos, responsabilidad y creencias que condicionan el comportamiento. El libro propone identificar patrones mentales limitantes y sustituirlos por decisiones y hábitos compatibles con los resultados que se quieren construir.',
    year:'2017',language:'Español',tags:['Creencias','Objetivos','Acción'],cover:VISUALS.libraryBook10,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:false,featured:false
  },
  {
    id:'book-10',priority:6,title:'Deja de ser tú',author:'Joe Dispenza',category:'Conciencia',
    shortDescription:'Una propuesta sobre hábitos mentales, emoción, meditación y cambio personal.',
    longDescription:'Joe Dispenza explora cómo pensamientos, emociones y conductas repetidas contribuyen a mantener una identidad conocida. El libro combina divulgación, ejercicios de meditación y una narrativa de cambio personal orientada a interrumpir patrones automáticos.',
    year:'2012',language:'Español',tags:['Meditación','Identidad','Cambio'],cover:VISUALS.libraryBook11,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:true,featured:true
  },
  {
    id:'book-11',priority:12,title:'El Kybalión',author:'Tres Iniciados',category:'Filosofía',
    shortDescription:'Una exposición de siete principios atribuidos a la tradición hermética.',
    longDescription:'Publicado a comienzos del siglo XX, El Kybalión presenta siete principios herméticos: mentalismo, correspondencia, vibración, polaridad, ritmo, causa y efecto, y género. Es una obra esotérico-filosófica influyente y debe leerse dentro de ese marco histórico y simbólico.',
    year:'1908',language:'Español',tags:['Hermetismo','Principios','Simbolismo'],cover:VISUALS.libraryBook12,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:false,featured:false
  },
  {
    id:'book-12',priority:13,title:'La magia de pensar en grande',author:'David J. Schwartz',category:'Desarrollo personal',
    shortDescription:'Una obra clásica sobre confianza, ambición, acción y expansión de expectativas.',
    longDescription:'David J. Schwartz argumenta que la manera de pensar condiciona el tipo de objetivos que una persona se permite perseguir. El libro trabaja confianza, iniciativa, liderazgo y hábitos de pensamiento orientados a ampliar posibilidades de acción.',
    year:'1959',language:'Español',tags:['Confianza','Ambición','Acción'],cover:VISUALS.libraryBook15,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:false,featured:false
  },
  {
    id:'book-13',priority:15,title:'Las siete leyes espirituales del éxito',author:'Deepak Chopra',category:'Espiritualidad',
    shortDescription:'Siete principios breves sobre propósito, intención, desapego y abundancia.',
    longDescription:'Deepak Chopra articula siete ideas espirituales para pensar el éxito más allá del rendimiento: potencialidad pura, dar, karma, mínimo esfuerzo, intención y deseo, desapego y propósito de vida. Es un texto breve y accesible dentro de su marco filosófico-espiritual.',
    year:'1994',language:'Español',tags:['Propósito','Desapego','Intención'],cover:VISUALS.libraryBook16,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:false,featured:false
  },
  {
    id:'book-14',priority:16,title:'Metafísica 4 en 1',author:'Conny Méndez',category:'Metafísica',
    shortDescription:'Una recopilación popular de enseñanzas metafísicas, decretos y trabajo con creencias.',
    longDescription:'Metafísica 4 en 1 reúne textos de Conny Méndez que difundieron en América Latina una visión práctica de metafísica, pensamiento positivo, decretos y transformación de creencias. Es una obra relevante para comprender esa tradición espiritual popular.',
    year:'Varias ediciones',language:'Español',tags:['Metafísica','Creencias','Decretos'],cover:VISUALS.libraryBook17,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:false,featured:false
  },
  {
    id:'book-15',priority:9,title:'Los cuatro acuerdos',author:'Don Miguel Ruiz',category:'Sabiduría',
    shortDescription:'Cuatro compromisos personales inspirados en una interpretación moderna de sabiduría tolteca.',
    longDescription:'Don Miguel Ruiz propone cuatro acuerdos: ser impecable con la palabra, no tomarse nada personalmente, no hacer suposiciones y hacer siempre lo máximo posible. El libro utiliza una narrativa espiritual para revisar lenguaje, interpretación y relaciones.',
    year:'1997',language:'Español',tags:['Lenguaje','Relaciones','Acuerdos'],cover:VISUALS.libraryBook18,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:true,featured:false
  },
  {
    id:'book-16',priority:4,title:'El poder del ahora',author:'Eckhart Tolle',category:'Conciencia',
    shortDescription:'Una obra central sobre presencia, identificación con el pensamiento y experiencia del presente.',
    longDescription:'Eckhart Tolle explora la tendencia de la mente a vivir atrapada en pasado y futuro, y propone volver deliberadamente al momento presente. El libro desarrolla nociones de ego, observación del pensamiento, aceptación y presencia consciente.',
    year:'1997',language:'Español',tags:['Presencia','Ego','Silencio'],cover:VISUALS.libraryBook02,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:true,featured:true
  },
  {
    id:'book-17',priority:17,title:'Padre rico, padre pobre',author:'Robert T. Kiyosaki',category:'Riqueza',
    shortDescription:'Una introducción popular a activos, pasivos, educación financiera y flujo de dinero.',
    longDescription:'Robert Kiyosaki contrasta dos maneras de entender trabajo y dinero para introducir conceptos como activos, pasivos, flujo de caja y educación financiera. El libro busca cambiar la pregunta de “cómo ganar más” a “cómo construir activos que trabajen por vos”.',
    year:'1997',language:'Español',tags:['Finanzas','Activos','Educación'],cover:VISUALS.libraryBook13,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:false,featured:false
  },
  {
    id:'book-18',priority:18,title:'Las 48 leyes del poder',author:'Robert Greene',category:'Estrategia',
    shortDescription:'Una lectura histórica y estratégica sobre poder, reputación, influencia y conflicto.',
    longDescription:'Robert Greene organiza episodios históricos y observaciones sobre conducta en 48 leyes relacionadas con poder e influencia. El libro es deliberadamente amoral en su enfoque y funciona mejor como mapa para reconocer dinámicas de poder que como manual normativo de conducta.',
    year:'1998',language:'Español',tags:['Poder','Estrategia','Influencia'],cover:VISUALS.libraryBook14,
    pdfFileName:'',pdfUrl:'',summaryUrl:'',audioUrl:'',recommended:false,featured:false
  }
];

// Video shelves remain operational without pretending a URL exists.
// Fill youtubeUrl and the button becomes an embedded YouTube player.
export const libraryVideos = [
  {id:'video-01',section:'Más recomendados',title:'Cómo ganar amigos e influir sobre las personas · resumen',description:'Resumen curado del libro de Dale Carnegie.',duration:'Próximamente',youtubeUrl:'',bookId:'book-01'},
  {id:'video-02',section:'Más recomendados',title:'Piense y hágase rico · ideas centrales',description:'Principios esenciales de Napoleon Hill.',duration:'Próximamente',youtubeUrl:'',bookId:'book-04'},
  {id:'video-03',section:'Más recomendados',title:'El poder del ahora · resumen',description:'Presencia, ego y silencio en una pieza breve.',duration:'Próximamente',youtubeUrl:'',bookId:'book-16'},
  {id:'video-04',section:'Conciencia y propósito',title:'Deja de ser tú · análisis',description:'Identidad, repetición y meditación.',duration:'Próximamente',youtubeUrl:'',bookId:'book-10'},
  {id:'video-05',section:'Conciencia y propósito',title:'Los cuatro acuerdos · resumen',description:'Lenguaje, interpretación y vínculos.',duration:'Próximamente',youtubeUrl:'',bookId:'book-15'},
  {id:'video-06',section:'Riqueza y mentalidad',title:'Los secretos de la mente millonaria · resumen',description:'Creencias y patrón financiero.',duration:'Próximamente',youtubeUrl:'',bookId:'book-05'},
  {id:'video-07',section:'Riqueza y mentalidad',title:'Padre rico, padre pobre · resumen',description:'Activos, pasivos y educación financiera.',duration:'Próximamente',youtubeUrl:'',bookId:'book-17'},
  {id:'video-08',section:'Hábitos y desarrollo',title:'El club de las 5 de la mañana · resumen',description:'Rutina matinal, foco y disciplina.',duration:'Próximamente',youtubeUrl:'',bookId:'book-08'}
];

export const libraryCategories = [
  'Todos','Riqueza','Mentalidad','Liderazgo','Propósito','Desarrollo personal','Hábitos','Conciencia','Espiritualidad','Filosofía','Metafísica','Sabiduría','Estrategia'
];

export const libraryRecommended = libraryBooks.filter(book=>book.recommended).sort((a,b)=>a.priority-b.priority);

export function getLibraryBook(id){return libraryBooks.find(book=>book.id===id)||null}

export function youtubeEmbedUrl(url=''){
  try{
    if(!url)return '';
    const parsed=new URL(url);
    if(parsed.hostname.includes('youtu.be'))return `https://www.youtube.com/embed/${parsed.pathname.replace('/','')}`;
    if(parsed.hostname.includes('youtube.com')){
      if(parsed.pathname.startsWith('/embed/'))return url;
      const id=parsed.searchParams.get('v');
      if(id)return `https://www.youtube.com/embed/${id}`;
    }
  }catch{}
  return '';
}
