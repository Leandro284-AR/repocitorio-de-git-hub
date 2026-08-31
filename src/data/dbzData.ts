import { Race, Character, Transformation, Saga, Episode, Movie, BlogPost, FAQItem, CVData, CourseInfo } from '../types';

export const RACES_DATA: Race[] = [
  {
    id: 'saiyajin',
    badge: 'S',
    badgeColor: 'bg-amber-500 text-black',
    name: 'SAIYAJIN',
    origin: 'Planeta Vegeta (Originalmente Planeta Sadala)',
    desc: 'La raza guerrera más poderosa y temida del universo 7. Originalmente del Planeta Vegeta, los Saiyajin poseen una biología diseñada para el combate y la adaptación extrema. Su rasgo más letal es el Zenkai: un aumento exponencial de poder cada vez que sobreviven a heridas mortales al borde de la muerte.',
    knownMembers: ['Goku (Kakarrotto)', 'Vegeta', 'Gohan (Híbrido)', 'Trunks (Híbrido)', 'Goten (Híbrido)', 'Bardock', 'Raditz', 'Broly'],
    distinctiveTraits: [
      'Cola de mono prensil que permite la transformación en Ozaru (Mono Gigante)',
      'Cabello negro rígido que nunca cambia de forma ni longitud desde su nacimiento',
      'Hambre voraz para reponer su altísimo consumo calórico y metabólico',
      'Zenkai: aumento de poder tras recuperarse de batallas extremas',
      'Acceso a transformaciones legendarias de Super Saiyajin y ki divino'
    ]
  },
  {
    id: 'terricolas',
    badge: 'T',
    badgeColor: 'bg-sky-500 text-white',
    name: 'TERRÍCOLAS (HUMANOS E HÍBRIDOS)',
    origin: 'Planeta Tierra',
    desc: 'Los habitantes originarios de la Tierra. Aunque su fuerza física promedio es modesta en la escala cósmica, han demostrado un refinamiento excepcional en el control del ki y la creación de técnicas marciales ingeniosas (como el Kienzan, Kikoho y Mafuba). Los híbridos Saiyajin-humano superan incluso a los Saiyajin puros en potencial latente.',
    knownMembers: ['Krilin', 'Yamcha', 'Tenshinhan', 'Chaoz', 'Maestro Roshi', 'Bulma (Científica)', 'Mr. Satán', 'Videl', 'Gohan (Híbrido)'],
    distinctiveTraits: [
      'Extraordinaria versatilidad técnica y creatividad en combate',
      'Gran ingenio científico y tecnológico (Capsule Corp)',
      'Híbridos Saiyajin-terrícola con potencial de ki emocional desbordante',
      'Capacidad de manipular el ki con entrenamiento en la Escuela Tortuga y Grulla'
    ]
  },
  {
    id: 'namekianos',
    badge: 'N',
    badgeColor: 'bg-emerald-500 text-white',
    name: 'NAMEKIANOS',
    origin: 'Planeta Namek',
    desc: 'Seres andróginos de piel verde nativos del pacífico Planeta Namek. Se dividen en dos clanes: el Clan Dragón (creadores de las místicas Esferas del Dragón con habilidades mágicas y curativas) y el Clan Guerrero (luchadores con poder y velocidad formidables). Poseen capacidad de regeneración celular instantánea y fusión corporal.',
    knownMembers: ['Piccolo', 'Dende', 'Nail', 'Gran Patriarca (Guru)', 'Kami-sama', 'Slug'],
    distinctiveTraits: [
      'Regeneración de extremidades siempre que su núcleo cerebral esté intacto',
      'Fusión namekiana: asimilación voluntaria que multiplica permanentemente el poder',
      'Capacidad mística para crear y revitalizar las Esferas del Dragón',
      'Nutrición basada exclusivamente en agua potable (no requieren comida sólida)',
      'Oído ultrasensible y elasticidad en sus extremidades'
    ]
  },
  {
    id: 'raza-freezer',
    badge: 'F',
    badgeColor: 'bg-purple-600 text-white',
    name: 'RAZA DE FREEZER (DEMONIOS DEL FRÍO)',
    origin: 'Origen Desconocido (Mutantes del Espacio Exterior)',
    desc: 'Una estirpe mutante y aristocrática con un poder destructivo natural tan descomunal que requieren crear formas de regresión para suprimir su propia energía y no destruir sus alrededores. Son tiranos despiadados con una fisiología capaz de sobrevivir en el vacío absoluto del espacio y soportar mutilaciones severas.',
    knownMembers: ['Freezer', 'King Cold', 'Cooler', 'Kuriza', 'Frost (Universo 6)'],
    distinctiveTraits: [
      'Capacidad de múltiples metamorfosis regresivas y formas doradas evolutivas',
      'Supervivencia en el vacío del espacio interestelar sin respiración',
      'Poder innato titánico sin necesidad de haber entrenado en su juventud',
      'Colas prensiles letales usadas como látigos en combate cerrado'
    ]
  },
  {
    id: 'androides',
    badge: 'A',
    badgeColor: 'bg-cyan-500 text-black',
    name: 'ANDROIDES Y BIO-ANDROIDES',
    origin: 'Planeta Tierra (Laboratorio Secreto del Dr. Gero)',
    desc: 'Construcciones cibernéticas, humanos biomecánicamente modificados a nivel celular y bio-androides creados por el genio criminal Dr. Gero de la Patrulla Roja. Su objetivo primordial fue la aniquilación de Son Goku. No emiten ki detectable por los rastreadores y poseen fuentes de energía inagotables.',
    knownMembers: ['Androide Número 17', 'Androide Número 18', 'Androide Número 16', 'Cell (Bio-androide)', 'Dr. Gero (Androide 20)', 'Androide 19'],
    distinctiveTraits: [
      'Reactores de energía perpetua infinita (sin fatiga muscular)',
      'Ausencia total de firma de ki rastreable para los guerreros Z',
      'Inmunidad al envejecimiento biológico y a enfermedades humanas',
      'Capacidad de absorción de energía y material genético combinado (en Cell)'
    ]
  },
  {
    id: 'majin',
    badge: 'M',
    badgeColor: 'bg-pink-500 text-white',
    name: 'RAZA MAJIN / DEMONIOS MÁGICOS',
    origin: 'Creación Cósmica / Hechicería de Bibidi',
    desc: 'Entidades milenarias compuestas por una masa elástica maleable de energía mágica caótica. Poseen una capacidad de regeneración molecular prácticamente inmortal: pueden recomponerse a partir de humo o cenizas microscópicas. Además, tienen la habilidad de convertir a sus oponentes en dulces y absorberlos.',
    knownMembers: ['Majin Boo (Inocente)', 'Super Boo', 'Kid Boo', 'Majin Boo Maldad Pura'],
    distinctiveTraits: [
      'Regeneración a nivel subatómico mientras quede una molécula de materia',
      'Elasticidad corporal infinita y metamorfosis física instantánea',
      'Rayo mágico transmutador (transforma enemigos en chocolate o dulces)',
      'Absorción biológica que copia poderes, inteligencia y técnicas de la víctima'
    ]
  }
];

export const CHARACTERS_DATA: Character[] = [
  {
    id: 'goku',
    name: 'Son Goku (Kakarrotto)',
    japaneseName: '孫悟空',
    race: 'Saiyajin',
    role: 'hero',
    desc: 'Protagonista indiscutible de Dragon Ball Z. Nacido en el Planeta Vegeta como Kakarrotto y enviado a la Tierra, fue educado con bondad por su abuelo Son Gohan. Su pasión inquebrantable por superarse y medirse ante los más fuertes lo ha llevado a alcanzar el estatus de guerrero supremo del universo.',
    debut: 'Dragon Ball Episodio 1 / DBZ Episodio 1',
    debutEp: 'Episodio 1',
    specialTechniques: ['Kamehameha', 'Genkidama (Spirit Bomb)', 'Kaio-ken (x2 a x20)', 'Teletransportación (Shunkan Ido)', 'Puño del Dragón'],
    powerLevelEstimate: '150.000.000 (SSJ Namek) → Miles de millones en Buu Saga',
    avatarIcon: '🥋',
    accentColor: '#ff8c00'
  },
  {
    id: 'vegeta',
    name: 'Vegeta IV (Príncipe Saiyajin)',
    japaneseName: 'ベジータ',
    race: 'Saiyajin',
    role: 'hero',
    desc: 'El orgulloso Príncipe de todos los Saiyajin. Inicialmente un frío conquistador espacial despiadado, experimenta una de las evoluciones de personaje más profundas de la historia, transformándose en el leal defensor de la Tierra, esposo de Bulma, padre y el más grande rival de Goku.',
    debut: 'Dragon Ball Z Episodio 2 (Mencionado) / Episodio 5',
    debutEp: 'Episodio 5',
    specialTechniques: ['Garlick Hō (Galick Gun)', 'Big Bang Attack', 'Final Flash', 'Ataque de Brillo Final', 'Destello Espiritual'],
    powerLevelEstimate: '18.000 (Llegada Tierra) → Igualdad con Goku en SSJ2 Majin',
    avatarIcon: '👑',
    accentColor: '#3b82f6'
  },
  {
    id: 'gohan',
    name: 'Son Gohan',
    japaneseName: '孫悟飯',
    race: 'Saiyajin / Terrícola (Híbrido)',
    role: 'hero',
    desc: 'Primogénito de Goku y Milk (Chi-Chi). Desde pequeño demostró un potencial de combate latente infinitamente superior al de su padre cuando es impulsado por la furia. Fue el primer guerrero de la historia en despertar la fase de Super Saiyajin 2 para derrotar a Cell.',
    debut: 'Dragon Ball Z Episodio 1',
    debutEp: 'Episodio 1',
    specialTechniques: ['Masenko', 'Kamehameha Padre-Hijo', 'Ráfaga de Ki Definitiva', 'Estado Místico Definitivo (Ultimate Gohan)'],
    powerLevelEstimate: 'Superior a Super Buu en estado Definitivo Místico',
    avatarIcon: '⚡',
    accentColor: '#8b5cf6'
  },
  {
    id: 'piccolo',
    name: 'Piccolo Jr.',
    japaneseName: 'ピッコロ',
    race: 'Namekiano (Clan Guerrero)',
    role: 'hero',
    desc: 'Reencarnación e hijo de Piccolo Daimaku. Tras comenzar como archienemigo de Goku, forjó un lazo irrompible con el joven Gohan durante su entrenamiento, transformándose en el estratega más sabio, protector y valiente de los Guerreros Z.',
    debut: 'Dragon Ball Episodio 123 / DBZ Episodio 1',
    debutEp: 'Episodio 1',
    specialTechniques: ['Makankosappo (Cañón de Haz Especial)', 'Granada de Luz', 'Granada Infernal Masiva', 'Regeneración'],
    powerLevelEstimate: '1.200.000 (Fusión con Nail) → Comparable a Androide 17 tras unirse con Kami',
    avatarIcon: '🟢',
    accentColor: '#22c55e'
  },
  {
    id: 'krillin',
    name: 'Krilin',
    japaneseName: 'クリリン',
    race: 'Terrícola',
    role: 'hero',
    desc: 'El mejor amigo y compañero de entrenamiento de Goku desde la infancia en el templo del Maestro Roshi. Considerado el humano puro más poderoso del planeta Tierra, su valentía para enfrentar a dioses y tiranos espaciales no tiene comparación.',
    debut: 'Dragon Ball Episodio 14 / DBZ Episodio 1',
    debutEp: 'Episodio 1',
    specialTechniques: ['Kienzan (Disco Destructor)', 'Taiyoken (Bengala Solar)', 'Kamehameha Doble', 'Dispersión de Ki'],
    powerLevelEstimate: '75.000 (Potencial desbloqueado en Namek por el Gran Patriarca)',
    avatarIcon: '✨',
    accentColor: '#eab308'
  },
  {
    id: 'bulma',
    name: 'Bulma Brief',
    japaneseName: 'ブルマ',
    race: 'Terrícola',
    role: 'hero',
    desc: 'Genio científica, inventora del Radar del Dragón y heredera de la multimillonaria Capsule Corporation. Sin sus naves espaciales, máquinas del tiempo y soporte logístico de vanguardia, los Guerreros Z no habrían triunfado jamás.',
    debut: 'Dragon Ball Episodio 1 / DBZ Episodio 1',
    debutEp: 'Episodio 1',
    specialTechniques: ['Radar del Dragón', 'Cápsulas Hoi-Poi', 'Nave Espacial con Gravedad x100', 'Máquina del Tiempo'],
    powerLevelEstimate: 'Poder de Intelecto Infinito (Científica de élite)',
    avatarIcon: '🔬',
    accentColor: '#06b6d4'
  },
  {
    id: 'trunks',
    name: 'Trunks del Futuro',
    japaneseName: 'トランクス (未来)',
    race: 'Saiyajin / Terrícola (Híbrido)',
    role: 'hero',
    desc: 'Hijo de Vegeta y Bulma proveniente de una línea temporal postapocalíptica devastada por los Androides. Viajó en el tiempo para advertir a Goku sobre su enfermedad cardíaca y salvar el destino de ambos mundos con su fiel espada.',
    debut: 'Dragon Ball Z Episodio 119',
    debutEp: 'Episodio 119',
    specialTechniques: ['Buster Cañón (Burning Attack)', 'Espada Brillante (Shining Sword Attack)', 'Cúpula de Calor (Heat Dome)'],
    powerLevelEstimate: 'Capaz de partir a Mecha Freezer en dos en segundos',
    avatarIcon: '🗡️',
    accentColor: '#a855f7'
  },
  {
    id: 'freezer',
    name: 'Freezer',
    japaneseName: 'フリーザ',
    race: 'Raza de Freezer (Demonio del Frío)',
    role: 'villain',
    desc: 'El emperador del universo y tirano galáctico que comandó la destrucción del Planeta Vegeta por temor a la leyenda del Super Saiyajin. Responsable directo del exterminio namekiano y la muerte de Krilin.',
    debut: 'Dragon Ball Z Episodio 44',
    debutEp: 'Episodio 44',
    specialTechniques: ['Death Beam (Rayo Mortal)', 'Supernova Planetaria', 'Death Ball', 'Discos Cortantes Guiados (Tsuibari Kienzan)'],
    powerLevelEstimate: '530.000 (Forma 1) → 120.000.000 (100% de Poder Máximo)',
    avatarIcon: '🟣',
    accentColor: '#9333ea'
  },
  {
    id: 'cell',
    name: 'Cell (Forma Perfecta)',
    japaneseName: 'セル',
    race: 'Bio-androide Genético',
    role: 'villain',
    desc: 'La creación biológica suprema del Dr. Gero. Creado a partir de las células de Goku, Vegeta, Piccolo, Freezer y King Cold. Tras absorber a los Androides 17 y 18 alcanzó la perfección estética y marcial, organizando el torneo del Cell Game.',
    debut: 'Dragon Ball Z Episodio 141 (Forma Imperfecta) / 152 (Semi) / 160 (Perfecto)',
    debutEp: 'Episodio 141',
    specialTechniques: ['Kamehameha Solar Destructor', 'Makankosappo', 'Regeneración Namekiana con Núcleo', 'Generación de Cell Juniors'],
    powerLevelEstimate: 'Capaz de aniquilar el Sistema Solar completo con un solo Kamehameha',
    avatarIcon: '🪲',
    accentColor: '#16a34a'
  },
  {
    id: 'majin-boo',
    name: 'Majin Boo (Super Boo / Kid Boo)',
    japaneseName: '魔人ブウ',
    race: 'Majin',
    role: 'villain',
    desc: 'Una fuerza de la naturaleza mágica ancestral despertada por el hechicero Babidi. Capaz de desintegrar planetas enteros por puro capricho y regenerarse de cualquier daño. Requirió la Genkidama Universal de Goku para ser erradicado.',
    debut: 'Dragon Ball Z Episodio 232 (Gordo) / 254 (Super) / 276 (Kid Boo)',
    debutEp: 'Episodio 232',
    specialTechniques: ['Rayo de Chocolate', 'Grito Dimensional Rompe-Espacio', 'Esfera de Choque Planetario (Vanishing Ball)', 'Absorción'],
    powerLevelEstimate: 'Poder de distorsión de la realidad y peligro dimensional cósmico',
    avatarIcon: '🍬',
    accentColor: '#ec4899'
  },
  {
    id: 'raditz',
    name: 'Raditz',
    japaneseName: 'ラディッツ',
    race: 'Saiyajin',
    role: 'villain',
    desc: 'Hermano mayor biológico de Son Goku e hijo de Bardock. Su llegada a la Tierra al inicio de DBZ marcó el comienzo de la era espacial de la serie, revelando por primera vez la identidad extraterrestre de Goku.',
    debut: 'Dragon Ball Z Episodio 1',
    debutEp: 'Episodio 1',
    specialTechniques: ['¡Muere Doble Domingo!', 'Fin de Semana Brillante', 'Sábado Crush'],
    powerLevelEstimate: '1.500 (Equivalente al poder de un Saibaiman de élite)',
    avatarIcon: '🦹',
    accentColor: '#ef4444'
  }
];

export const TRANSFORMATIONS_DATA: Transformation[] = [
  {
    id: 'ssj1',
    badge: 'SS1',
    badgeColor: 'bg-amber-500 text-black',
    name: 'SUPER SAIYAJIN (SSJ 1)',
    multiplier: 'x50 sobre poder base',
    debut: 'Episodio 95 / 107 (DBZ)',
    desc: 'La legendaria transformación que despierta una vez cada mil años ante un arrebato incontrolable de ira justificada en un corazón puro o enfocado. El cabello se eriza y tiñe de rubio resplandeciente, el iris se torna esmeralda y el cuerpo se envuelve en un aura dorada ardiente.',
    users: ['Goku', 'Vegeta', 'Gohan', 'Trunks del Futuro', 'Goten', 'Trunks niño', 'Gotenks', 'Vegetto', 'Gogeta', 'Broly'],
    auraColor: '#facc15'
  },
  {
    id: 'ssj2',
    badge: 'SS2',
    badgeColor: 'bg-amber-400 text-black',
    name: 'SUPER SAIYAJIN 2 (MÁS ALLÁ DEL LÍMITE)',
    multiplier: 'x100 sobre poder base (x2 sobre SSJ1)',
    debut: 'Episodio 191 (Cell Games)',
    desc: 'El estado perfeccionado del Super Saiyajin. La masa muscular se define rígidamente sin perder velocidad, el cabello se torna más puntiagudo y destellos de relámpagos bioeléctricos azules/dorados crepitan continuamente alrededor del aura de ki.',
    users: ['Gohan (Primer despertar ante Cell)', 'Goku', 'Vegeta (Majin Vegeta)', 'Trunks del Futuro'],
    auraColor: '#eab308'
  },
  {
    id: 'ssj3',
    badge: 'SS3',
    badgeColor: 'bg-yellow-400 text-black',
    name: 'SUPER SAIYAJIN 3 (PINÁCULO CLÁSICO)',
    multiplier: 'x400 sobre poder base (x4 sobre SSJ2)',
    debut: 'Episodio 245 (Frente a Majin Boo)',
    desc: 'El límite extremo al que un cuerpo biológico puede llevar el poder del ki Saiyajin. Las cejas desaparecen pronunciando un arco supraorbital imponente y la cabellera rubia dorada crece desmesuradamente hasta las rodillas. Genera un consumo titánico de energía vital en el mundo de los vivos.',
    users: ['Goku', 'Gotenks (Fusión de Goten y Trunks)'],
    auraColor: '#fde047'
  },
  {
    id: 'ssj-god',
    badge: 'SSG',
    badgeColor: 'bg-red-600 text-white',
    name: 'SUPER SAIYAJIN DIOS (KI DIVINO)',
    multiplier: 'Escala Divina Incalculable',
    isDivine: true,
    debut: 'Película La Batalla de los Dioses (2013)',
    desc: 'Alcanzado mediante un ritual de cinco Saiyajins de corazón puro que canalizan su luz hacia un sexto guerrero. El cuerpo del usuario se vuelve esbelto y rejuvenecido, el cabello y los ojos adquieren un tono rubí/carmesí flamígero y el ki deja de ser detectable por seres mortales comunes.',
    users: ['Goku', 'Vegeta'],
    auraColor: '#ef4444'
  },
  {
    id: 'ssj-blue',
    badge: 'SSB',
    badgeColor: 'bg-sky-500 text-white',
    name: 'SUPER SAIYAJIN BLUE (SSGSS)',
    multiplier: 'Super Saiyajin con Ki Divino',
    isDivine: true,
    debut: 'Película La Resurrección de Freezer (2015)',
    desc: 'La evolución definitiva resultante de transformarse en Super Saiyajin mientras se retiene el poder divino del Super Saiyajin Dios. Combina una serenidad mental de concentración absoluta con una potencia destructiva capaz de medirse ante los Dioses de la Destrucción.',
    users: ['Goku', 'Vegeta', 'Vegetto Blue', 'Gogeta Blue'],
    auraColor: '#0284c7'
  }
];

export const SAGAS_DATA: Saga[] = [
  {
    id: 'saga-saiyajin',
    title: 'SAGA SAIYAJIN',
    episodes: 'Episodios 1 al 35 (35 capítulos)',
    years: '1989 - 1990',
    villain: 'Raditz, Nappa y Vegeta',
    accentColor: '#f97316',
    desc: 'Comienza con la impactante revelación del origen extraterrestre de Son Goku con la llegada de su hermano Raditz. Tras el sacrificio heroico de Goku, los Guerreros Z entrenan intensamente durante un año en la Tierra esperando la llegada de los príncipes invasores Nappa y Vegeta, culminando en la legendaria batalla del desierto.',
    highlights: [
      'Sacrificio de Goku y entrenamiento en el Más Allá con Kaio-sama',
      'Entrenamiento extremo de Gohan en el desierto con Piccolo',
      'Muerte de Yamcha, Chaoz, Tenshinhan y Piccolo protegiendo a Gohan',
      'Goku usando el Kaio-ken x4 y el choque de Kamehameha contra el Galick Hō de Vegeta',
      'Vegeta transformándose en Mono Gigante (Ozaru) y el corte de cola por Yajirobe'
    ]
  },
  {
    id: 'saga-freezer',
    title: 'SAGA DE NAMEK Y FREEZER',
    episodes: 'Episodios 36 al 107 (72 capítulos)',
    years: '1990 - 1991',
    villain: 'Freezer, Zarbon, Dodoria y las Fuerzas Especiales Ginyu',
    accentColor: '#9333ea',
    desc: 'Gohan, Krilin y Bulma viajan al distante Planeta Namek con el propósito de utilizar las Esferas del Dragón originales para resucitar a sus compañeros caídos. Allí descubren que el despiadado emperador espacial Freezer y un traicionero Vegeta también buscan las esferas para obtener la inmortalidad eterna.',
    highlights: [
      'Goku entrenando en la nave espacial a 100 veces la gravedad de la Tierra',
      'La hilarante y temible llegada de las Fuerzas Especiales Ginyu',
      'Vegeta eliminando a Zarbon, Dodoria y recolectando esferas con audacia',
      'Freezer desatando sus 4 transformaciones y atravesando a Krilin',
      'Muerte de Krilin e histórico despertar de Goku como Super Saiyajin'
    ]
  },
  {
    id: 'saga-cell',
    title: 'SAGA DE LOS ANDROIDES Y CELL',
    episodes: 'Episodios 108 al 194 (87 capítulos)',
    years: '1992 - 1993',
    villain: 'Cell Perfecto, Dr. Gero (A20), A19, A17, A18 y A16',
    accentColor: '#22c55e',
    desc: 'Trunks del Futuro aparece para salvar a Goku y avisar que en tres años la humanidad será masacrada por dos androides. Sin embargo, los eventos temporales se alteran dando paso a la aparición de Cell, una bio-creatura del Dr. Gero que busca absorber a los androides para alcanzar su Forma Perfecta y convocar los Cell Games.',
    highlights: [
      'Trunks derrotando a Mecha Freezer y King Cold en segundos con su espada',
      'Entrenamiento en la Habitación del Tiempo (Room of Spirit and Time)',
      'Vegeta desatando el Super Saiyajin Ascendido y el Final Flash ante Cell',
      'El discurso y sacrificio del Androide 16 para liberar la furia de Gohan',
      'Gohan alcanzando el Super Saiyajin 2 y el Kamehameha Padre-Hijo'
    ]
  },
  {
    id: 'saga-buu',
    title: 'SAGA DE MAJIN BOO',
    episodes: 'Episodios 195 al 291 (97 capítulos)',
    years: '1993 - 1996',
    villain: 'Majin Boo (Inocente / Super Buu / Kid Boo) y Babidi',
    accentColor: '#ec4899',
    desc: 'Siete años después del Cell Game, la Tierra vive en paz hasta la celebración del 25° Torneo de Artes Marciales. Los secuaces del hechicero Babidi recolectan la energía del combate para despertar a Majin Boo, un monstruo mágico ancestral que fuerza a los Guerreros Z a explorar fusiones milagrosas y el ki del SSJ3.',
    highlights: [
      'La batalla de orgullo entre Goku SSJ2 y Majin Vegeta',
      'El supremo y trágico sacrificio de Vegeta desintegrándose con su Final Explosion',
      'Presentación del Super Saiyajin 3 de Goku haciendo temblar la Tierra',
      'Aparición de fusiones legendarias: Gotenks (Danza Metamor) y Vegetto (Pendientes Pothala)',
      'La Super Genkidama con la energía de todos los terrícolas para eliminar a Kid Boo'
    ]
  }
];

export const EPISODES_DATA: Episode[] = [
  { number: 1, title: 'Un mini-Goku es su nombre: Gohan', saga: 'Saiyajin', desc: 'Aparece un misterioso niño con cola llamado Gohan y se revela el origen extraterrestre de Goku.', isKeyEpisode: true },
  { number: 2, title: 'Un guerrero de extraordinario poder con un gran secreto', saga: 'Saiyajin', desc: 'Raditz llega a la Tierra y secuestra a Gohan, obligando a Goku y Piccolo a unirse.', isKeyEpisode: true },
  { number: 5, title: '¡Goku muere! Solo queda una última oportunidad', saga: 'Saiyajin', desc: 'Piccolo lanza el Makankosappo atravesando a Raditz y a Goku, quien se sacrifica.', isKeyEpisode: true },
  { number: 28, title: '¡El poder de los Saiyajins! Nappa y Vegeta atacan', saga: 'Saiyajin', desc: 'Los guerreros Z enfrentan con valentía pero terribles bajas a los invasores Saiyajin.' },
  { number: 30, title: '¡Batalla ardiente! Goku contra Vegeta', saga: 'Saiyajin', desc: 'Comienza el legendario choque entre el guerrero de clase baja y el príncipe Saiyajin.', isKeyEpisode: true },
  { number: 35, title: '¡Cambio de planes! Gohan, Krilin y Bulma rumbo a Namek', saga: 'Saiyajin', desc: 'Tras la dura batalla en la Tierra, los sobrevivientes parten hacia el planeta Namek.', isKeyEpisode: true },
  { number: 66, title: '¡Un poder colosal! El legendario Goku llega al rescate', saga: 'Freezer', desc: 'Goku aterriza en Namek tras entrenar a gravedad x100 y derrota a Recoome de un golpe.' },
  { number: 86, title: '¡Vegeta muere! El orgullo del príncipe guerrero', saga: 'Freezer', desc: 'Vegeta le ruega a Goku en lágrimas que derrote a Freezer con manos saiyajin antes de morir.' },
  { number: 95, title: '¡Por fin se transforma! Son Goku el legendario Super Saiyajin', saga: 'Freezer', desc: 'Freezer asesina a Krilin provocando la cólera que desata al legendario Super Saiyajin.', isKeyEpisode: true },
  { number: 105, title: '¡Freezer derrotado! El golpe final lleno de furia', saga: 'Freezer', desc: 'Goku responde al último ataque desesperado de Freezer en el Namek a punto de explotar.' },
  { number: 120, title: '¡Un segundo Super Saiyajin! Trunks derrota a Freezer', saga: 'Cell', desc: 'Un misterioso joven del futuro aparece y rebana a Mecha Freezer con su espada.', isKeyEpisode: true },
  { number: 141, title: '¡Un enemigo desconocido! El nacimiento del bio-androide Cell', saga: 'Cell', desc: 'Piccolo descubre los horrores del monstruo Cell en la misteriosa ciudad de Ginger Town.' },
  { number: 184, title: '¡La tragedia del Androide 16! Gohan desata su furia oculta', saga: 'Cell', desc: 'Cell destruye al Androide 16 haciendo estallar el legendario Super Saiyajin 2 en Gohan.', isKeyEpisode: true },
  { number: 191, title: '¡La batalla termina! El Kamehameha Padre e Hijo de Gohan', saga: 'Cell', desc: 'Con el espíritu de su padre guiando su mano, Gohan borra a Cell de la existencia.', isKeyEpisode: true },
  { number: 237, title: '¡Por los que amo! El sacrificio final de Majin Vegeta', saga: 'Majin Boo', desc: 'Vegeta abraza a Trunks por primera vez y desata una explosión nuclear para redimirse.', isKeyEpisode: true },
  { number: 245, title: '¡Impresionante! El poder máximo del Super Saiyajin 3', saga: 'Majin Boo', desc: 'Goku demuestra ante Babidi y Majin Boo el poder oculto de su fase tres haciendo temblar el mundo.', isKeyEpisode: true },
  { number: 268, title: '¡Nace Vegetto! La fusión definitiva con los pendientes Pothala', saga: 'Majin Boo', desc: 'Goku y Vegeta se fusionan creando al guerrero invencible para humillar a Super Buu.', isKeyEpisode: true },
  { number: 286, title: '¡El guerrero más fuerte del universo! La Genkidama Final', saga: 'Majin Boo', desc: 'Toda la humanidad brinda su energía para erradicar el mal de Kid Boo para siempre.', isKeyEpisode: true }
];

export const MOVIES_DATA: Movie[] = [
  { number: 1, title: '¡Devuélveme a mi Gohan! (Zona de Muerte)', year: 1989, villain: 'Garlic Jr.', desc: 'Garlic Jr. secuestra al pequeño Gohan para apoderarse de la Esfera de cuatro estrellas y desear la inmortalidad eterna.', duration: '41 min' },
  { number: 2, title: 'El hombre más fuerte de este mundo', year: 1990, villain: 'Dr. Wheelo y Dr. Kochin', desc: 'El Dr. Wheelo busca transferir su cerebro mecánico al cuerpo del hombre más fuerte del mundo tras descongelarse.', duration: '59 min' },
  { number: 3, title: 'La gran batalla decisiva por la Tierra (El Árbol del Poder)', year: 1990, villain: 'Turles (Saiyajin renegado)', desc: 'Turles llega a la Tierra para plantar el Árbol Sagrado que absorbe la energía vital de todo el planeta para crear frutos de poder.', duration: '60 min' },
  { number: 4, title: 'El Super Guerrero Son Goku (Lord Slug)', year: 1991, villain: 'Super Namekiano Lord Slug', desc: 'Un namekiano malvado ancestral congela la Tierra para convertirla en su nave planetaria y recuperar su juventud con las esferas.', duration: '52 min' },
  { number: 5, title: 'Los rivales más poderosos (Cooler)', year: 1991, villain: 'Cooler (Hermano mayor de Freezer)', desc: 'Cooler llega a la Tierra para vengar el honor manchado de su linaje tras la supuesta muerte de Freezer a manos de un Saiyajin.', duration: '47 min' },
  { number: 6, title: '¡Choque! Los guerreros de 10.000 millones de poder (Cooler Metálico)', year: 1992, villain: 'Metal Cooler y Big Gete Star', desc: 'Cooler se fusiona con la computadora espacial Big Gete Star y asedia el Nuevo Planeta Namek con un ejército de clones de titanio.', duration: '45 min' },
  { number: 7, title: '¡Batalla extrema! Los tres grandes Super Saiyajins', year: 1992, villain: 'Androides 13, 14 y 15 (Super A13)', desc: 'Las supercomputadoras del Dr. Gero despiertan tres androides adicionales que se baten a muerte contra Goku, Vegeta y Trunks.', duration: '46 min' },
  { number: 8, title: '¡Arde! Super batalla feroz (Broly el Super Saiyajin Legendario)', year: 1993, villain: 'Broly y Paragus', desc: 'Paragus atrae a Vegeta al Nuevo Planeta Vegeta para coronarlo rey, escondiendo el despertar incontrolable del mítico Broly.', duration: '72 min' },
  { number: 9, title: '¡La galaxia está en peligro! Un guerrero super increíble (Bojack)', year: 1993, villain: 'Bojack y los Guerreros de Plata', desc: 'Aprovechando la muerte de Kaio-sama del Norte, Bojack escapa de su prisión cósmica e irrumpe en el torneo de artes marciales de Mr. Satán.', duration: '50 min' },
  { number: 10, title: 'El regreso del guerrero legendario (Broly 2)', year: 1994, villain: 'Broly', desc: 'Broly sobrevive al choque espacial y aterriza congelado en la Tierra, despertando ante los llantos de Goten para ser enfrentado por Gohan.', duration: '52 min' },
  { number: 11, title: '¡El combate definitivo! Bio-Broly', year: 1994, villain: 'Bio-Broly', desc: 'Muestras genéticas de Broly son manipuladas por científicos inescrupulosos creando un monstruo biológico mutante enfrentado por Goten, Trunks y A18.', duration: '46 min' },
  { number: 12, title: '¡El renacer de la fusión! Goku y Vegeta (Janemba)', year: 1995, villain: 'Janemba', desc: 'Un accidente en la máquina purificadora de almas del Más Allá desata la maldad pura de Janemba, requiriendo el nacimiento de Gogeta.', duration: '50 min' },
  { number: 13, title: 'El ataque del dragón (Hildegarn y Tapion)', year: 1995, villain: 'Hildegarn', desc: 'El hechicero Hoi libera al legendario héroe Tapion y a la bestia devoradora de mundos Hildegarn, forzando a Goku a usar el Puño del Dragón.', duration: '52 min' },
  { number: 14, title: 'Dragon Ball Z: La Batalla de los Dioses', year: 2013, villain: 'Beerus (Dios de la Destrucción)', desc: 'Beerus despierta tras 39 años buscando al Dios Super Saiyajin profetizado por el Pez Oráculo, poniendo a prueba el destino del planeta.', duration: '85 min' },
  { number: 15, title: 'Dragon Ball Z: La Resurrección de Freezer', year: 2015, villain: 'Golden Freezer y Sorbet', desc: 'Sorbet reúne las Esferas de la Tierra para resucitar al tirano espacial, quien entrena por 4 meses para alcanzar su brillante forma dorada.', duration: '93 min' }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'akira-toriyama-legado',
    title: 'El Legado Inmortal de Akira Toriyama: Cómo DBZ Redefinió el Anime',
    subtitle: 'Un tributo al maestro del manga y su influencia en generaciones de animadores y programadores',
    author: 'Leandro Daniel Martínez',
    authorRole: 'Estudiante Técnico & Creador de la Enciclopedia',
    date: '28 de Agosto, 2026',
    readTime: '6 min de lectura',
    category: 'Análisis & Tributo',
    summary: 'Exploramos los principios narrativos y visuales con los que Akira Toriyama transformó el género shonen mundial, inspirando a millones a perseverar, aprender informática y superarse constantemente.',
    contentSections: [
      {
        heading: '1. Introducción y Filosofía del Shonen Moderno',
        subheading: 'La sencillez visual al servicio de la emoción pura',
        paragraphs: [
          'Cuando Akira Toriyama comenzó a dibujar Dragon Ball en la revista Weekly Shōnen Jump en 1984, pocos imaginaban que sentaría las bases matemáticas y estéticas del género de acción para los siguientes 40 años.',
          'A diferencia de otros mangas de la época con tramas excesivamente complejas, Toriyama priorizó la legibilidad espacial de las viñetas: líneas cinéticas limpias, coreografías marciales fluidas y un mensaje universal de auto-superación.',
          'Goku no pelea por odio ni por venganza; pelea por el gozo genuino de empujar sus propios límites frente a oponentes más preparados.'
        ],
        callout: '«Si no intentas superar tus propios límites hoy, nunca sabrás de lo que eres capaz mañana». — Filosofía Toriyama'
      },
      {
        heading: '2. Innovaciones Técnicas en Animación y Narrativa',
        subheading: 'Uso del color, auras de ki y transformaciones escalonadas',
        paragraphs: [
          'Una de las anécdotas más célebres en la industria del anime y el diseño gráfico es el origen del Super Saiyajin rubio: Toriyama decidió que el cabello fuera claro para ahorrarle a su asistente horas de rellenar tinta negra en cada viñeta semanal.',
          'Esta genialidad pragmática terminó convirtiéndose en el símbolo cultural más reconocible de la animación japonesa en el mundo entero.'
        ],
        codeOrPreSnippet: `+-------------------------------------------------------------+
| ESCALA TEMPORAL DE TRANSMISIÓN DE SAGAS (1989 - 1996)       |
+-------------------+---------------+-------------------------+
| SAGA              | EPISODIOS     | AUDIENCIA PROMEDIO (JP) |
+-------------------+---------------+-------------------------+
| Saga Saiyajin     | 001 - 035     | 20.5% Rating TV Fuji    |
| Saga Namek/Freezer| 036 - 107     | 22.3% Rating TV Fuji    |
| Saga Androides    | 108 - 194     | 24.8% Rating (Pico Cell)|
| Saga Majin Boo    | 195 - 291     | 21.0% Rating TV Fuji    |
+-------------------+---------------+-------------------------+`
      },
      {
        heading: '3. Conclusiones y Conexión con la Informática Escolar',
        subheading: 'La mentalidad del guerrero aplicada a la programación',
        paragraphs: [
          'Como estudiante de una escuela técnica en informática, aprender a programar algoritmos y resolver problemas complejos requiere la misma perseverancia de un entrenamiento en la Habitación del Tiempo.',
          'Este proyecto web nació en el aula de informática como homenaje al creador que nos enseñó a nunca rendirnos ante el primer error de compilación.'
        ]
      }
    ],
    tags: ['Akira Toriyama', 'Manga', 'Historia Anime', 'Cultura Pop', 'Educación Técnica'],
    comments: [
      {
        id: 'c1',
        author: 'Profesor Carlos Gómez',
        avatar: '👨‍🏫',
        date: '29 de Agosto, 2026',
        content: 'Excelente análisis Leandro. Muy bien estructurado el uso de encabezados para el trabajo práctico de diseño web y la aplicación del bloque preformateado.',
        likes: 14
      },
      {
        id: 'c2',
        author: 'Martín Kakarotto_99',
        avatar: '⚡',
        date: '29 de Agosto, 2026',
        content: '¡Totalmente de acuerdo! La transformación de Super Saiyajin en Namek cambió para siempre la historia de la tele.',
        likes: 8
      }
    ]
  },
  {
    id: 'analisis-potencial-gohan',
    title: 'El Enigma de Gohan: ¿Por qué Posee el Mayor Potencial Latente?',
    subtitle: 'Un estudio de la biología híbrida Saiyajin-humana y su rendimiento en momentos de crisis',
    author: 'Leandro Daniel Martínez',
    authorRole: 'Estudiante Técnico & Redactor',
    date: '25 de Agosto, 2026',
    readTime: '5 min de lectura',
    category: 'Biología & Ki',
    summary: 'Analizamos por qué los híbridos entre Saiyajin y terrícola generan picos emocionales de ki capaces de superar a los guerreros de élite pura.',
    contentSections: [
      {
        heading: '1. La Genética del Híbrido Saiyajin-Terrícola',
        subheading: 'Complementariedad biológica y plasticidad de ki',
        paragraphs: [
          'Desde el primer episodio de Dragon Ball Z, cuando Gohan rompe la cápsula espacial de Raditz con un nivel de poder de 1.307 (superando tanto a Goku como a Piccolo juntos), Toriyama dejó en claro una regla fundamental:',
          'Los Saiyajin puros tienen instinto guerrero constante, pero sus emociones son frías. Los terrícolas tienen una empatía profunda. Al combinarse ambas especies, la emoción humana actúa como un catalizador nuclear que desata el ki Saiyajin sin frenos.'
        ]
      },
      {
        heading: '2. Comparativa de Niveles en Momentos Clave',
        subheading: 'Lecturas de Scouter registradas en los arcos oficiales',
        paragraphs: [
          'A continuación presentamos una tabla de lecturas de poder tomadas durante los momentos más decisivos de la infancia de Gohan:'
        ],
        codeOrPreSnippet: `>>> LECTURAS DE SCOUTER (RADITZ / FREEZER / CELL SAGA)
------------------------------------------------------------
[ESTADO EMOCIONAL]       | [UNIDADES DE KI ESTIMADAS]
Tranquilo (Inicio Z)     : 1 unidad (Ocultación involuntaria)
Llorando ante Raditz     : 710 unidades
Furia Desatada c/Raditz  : 1.307 unidades (¡Alerta Scouter!)
Vs Freezer 2da Forma     : > 1.000.000 (Ráfaga Masenko)
SSJ2 en Cell Game        : Superior a cualquier guerrero vivo
Definitivo Místico       : Humilló por completo a Super Buu
------------------------------------------------------------`
      },
      {
        heading: '3. Reflexión Final',
        subheading: 'La vocación de Gohan: sabio y protector',
        paragraphs: [
          'Gohan no sueña con ser el más fuerte por ego; sueña con ser un gran investigador y cuidar a su familia. Su poder sólo aparece cuando los demás están en peligro real, convirtiéndolo en un héroe entrañable.'
        ]
      }
    ],
    tags: ['Gohan', 'Super Saiyajin 2', 'Niveles de Poder', 'Scouter', 'Análisis'],
    comments: [
      {
        id: 'c3',
        author: 'Valeria S.',
        avatar: '👩‍💻',
        date: '26 de Agosto, 2026',
        content: 'Me encanta que destaques el aspecto humano de Gohan. Muy clara la explicación de los niveles.',
        likes: 5
      }
    ]
  },
  {
    id: 'lineas-temporales-trunks',
    title: 'Guía de Líneas Temporales: Cómo Funciona el Multiverso de Trunks',
    subtitle: 'Desmitificando los viajes en el tiempo del Dr. Gero, Cell y la máquina de Capsule Corp',
    author: 'Leandro Daniel Martínez',
    authorRole: 'Estudiante Técnico & Redactor',
    date: '20 de Agosto, 2026',
    readTime: '7 min de lectura',
    category: 'Ciencia Ficción & Teorías',
    summary: 'Explicación técnica y ordenada de cómo Dragon Ball Z aplica la teoría de mundos paralelos en lugar de la paradoja del abuelo.',
    contentSections: [
      {
        heading: '1. Principio de Ramificación Multiversal',
        subheading: 'Por qué cambiar el pasado no borra el futuro de origen',
        paragraphs: [
          'En Dragon Ball Z, viajar al pasado no reescribe la propia línea de tiempo del viajero. En su lugar, el viaje crea una ramificación cuántica alternativa.',
          'Cuando Trunks le entrega la medicina para el corazón a Goku en la Línea Principal, su propio futuro apocalíptico sigue existiendo exactamente igual.'
        ]
      },
      {
        heading: '2. Estructura de las 4 Líneas Principales en DBZ',
        subheading: 'Mapeo esquemático de los 4 universos temporales',
        paragraphs: [
          'Durante la saga de Cell interactúan 4 líneas de tiempo distintas creadas por los múltiples saltos temporales:'
        ],
        codeOrPreSnippet: `===============================================================
MAPA DE LÍNEAS TEMPORALES EN DRAGON BALL Z (SAGA CELL)
===============================================================
[LÍNEA 1] - Futuro Original : Goku muere por virus. A17 y A18 matan a todos. Trunks viaja.
[LÍNEA 2] - Línea Principal : Trunks salva a Goku. Ocurre el Cell Game. Gohan gana.
[LÍNEA 3] - Línea de Cell   : Trunks desactiva androides con control, pero Cell lo mata y roba máquina.
[LÍNEA 4] - Futuro Salvado  : Trunks regresa del Cell Game entrenado y pulveriza a A17, A18 y Cell.
===============================================================`
      },
      {
        heading: '3. Conclusión Lógica',
        paragraphs: [
          'Este modelo es idéntico a la teoría de interpretación de muchos mundos de Hugh Everett en mecánica cuántica, lo que demuestra la riqueza de la ciencia ficción en DBZ.'
        ]
      }
    ],
    tags: ['Trunks del Futuro', 'Líneas Temporales', 'Multiverso', 'Capsule Corp'],
    comments: [
      {
        id: 'c4',
        author: 'Nico Tech',
        avatar: '🤖',
        date: '22 de Agosto, 2026',
        content: '¡Al fin entiendo la línea de tiempo de donde vino el Cell que peleó en el Cell Game! Muy bien resumido en el gráfico ASCII.',
        likes: 9
      }
    ]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'f1',
    category: 'Historia y Canon',
    question: '¿Cuál es la diferencia exacta entre Dragon Ball y Dragon Ball Z?',
    answer: 'Dragon Ball narra las aventuras de Goku desde niño hasta su juventud, centradas en el descubrimiento de las 7 Esferas del Dragón, el entrenamiento con el Maestro Roshi y los Torneos de Artes Marciales (Tenkaichi Budokai). Dragon Ball Z comienza cinco años después, cuando Goku ya es adulto y padre de Gohan, cambiando el enfoque hacia amenazas extraterrestres, su herencia Saiyajin y batallas cósmicas.',
    detail: 'En el manga original de Akira Toriyama toda la obra se llamó simplemente «Dragon Ball». La «Z» fue añadida por Toei Animation para el anime.'
  },
  {
    id: 'f2',
    category: 'Historia y Canon',
    question: '¿Qué significa la letra "Z" en el título de Dragon Ball Z?',
    answer: 'Akira Toriyama propuso la letra "Z" al equipo de producción de Toei Animation porque es la última letra del abecedario romano. Su intención era señalar que esta sería la etapa final y definitiva de la historia de Goku, aunque el colosal éxito mundial motivó la creación de continuaciones posteriores como DB Super.',
    detail: 'Toriyama confesó en entrevistas que en aquel momento sentía que ya se estaba quedando sin ideas para prolongar la historia indefinidamente.'
  },
  {
    id: 'f3',
    category: 'Poder y Combate',
    question: '¿Cuál es el multiplicador oficial de poder del Super Saiyajin?',
    answer: 'De acuerdo con las guías oficiales aprobadas por Akira Toriyama (como la enciclopedia Daizenshuu 7), el estado básico de Super Saiyajin (Fase 1) multiplica el poder base del guerrero exactamente por 50 veces. El Super Saiyajin 2 duplica al SSJ1 (x100 sobre base), y el Super Saiyajin 3 cuadruplica al SSJ2 (x400 sobre base).',
    detail: 'Esto explica por qué Goku pudo superar a Freezer 100% de poder (120 millones) al alcanzar 150 millones con su poder base de 3 millones en Namek.'
  },
  {
    id: 'f4',
    category: 'Películas',
    question: '¿Son canon las 15 películas clásicas de Dragon Ball Z?',
    answer: 'La mayoría de las 13 películas originales de DBZ (de 1989 a 1995) no forman parte de la continuidad principal o canon del manga, sino que son historias alternativas ("What If") pensadas para festivales de cine de Toei Animation. Sin embargo, las dos últimas películas ("La Batalla de los Dioses" de 2013 y "La Resurrección de Freezer" de 2015) sí contaron con guion directo de Toriyama y son plenamente canónicas.',
    detail: 'Personajes icónicos como Broly y Gogeta fueron canonizados oficialmente más adelante con películas modernas como Dragon Ball Super: Broly (2018).'
  },
  {
    id: 'f5',
    category: 'Técnicas y Fusiones',
    question: '¿Cuál es la diferencia entre la Danza de la Fusión (Gotenks/Gogeta) y los Pendientes Pothala (Vegetto)?',
    answer: 'La Danza Metamor requiere que ambos guerreros tengan estaturas, contexturas y niveles de ki exactamente idénticos y sincronicen una coreografía milimétrica; su duración es de 30 minutos. La fusión con Pendientes Pothala es divina e instantánea al colocarse los zarcillos en orejas opuestas, no requiere igualar ki y genera un poder superior gracias a la unión multiplicativa.',
    detail: 'Originalmente en DBZ se creía que los Pothala eran eternos para todos, pero en DB Super se aclaró que en mortales dura aproximadamente 1 hora.'
  },
  {
    id: 'f6',
    category: 'Objetos Místicos',
    question: '¿Cuántos deseos conceden las Esferas del Dragón de la Tierra y las de Namek?',
    answer: 'Shenlong (Tierra) concedía originalmente 1 deseo individual. Tras ser recreado por Dende en la Saga de Cell, pasó a conceder 3 deseos (o 2 si se resucita a una multitud). Por su parte, Porunga (Namek) concede 3 deseos independientes y puede resucitar personas múltiples veces, aunque en un inicio solo revivía a una persona por deseo.',
    detail: 'Para invocar a Porunga es obligatorio hablar en el idioma nativo de Namek.'
  }
];

export const CV_DATA: CVData = {
  fullName: 'Leandro Daniel Martínez',
  title: 'Estudiante de Escuela Técnica en Informática',
  specialty: 'Desarrollo Web Frontend · Redes y Telecomunicaciones · Soporte y Mantenimiento de Hardware',
  location: 'Salta Capital, Argentina',
  email: 'leandrodanielmartinez812@gmail.com',
  phone: '+54 9 387 6131204',
  github: 'https://github.com/leandromartinez-tech',
  linkedin: 'https://linkedin.com/in/leandro-daniel-martinez',
  profileSummary: 'Estudiante de ciclo superior en Escuela de Educación Secundaria Técnica con especialidad en Informática y Programación. Apasionado por el desarrollo de software, la arquitectura de páginas web modernas y el mantenimiento de infraestructura de redes. Experiencia práctica en construcción de proyectos con HTML5 semántico, CSS3, JavaScript, React y Linux, además de sólida formación en armado, diagnóstico de hardware y configuración de entornos de servidor.',
  education: [
    {
      institution: 'Escuela de Educación Secundaria Técnica (E.E.S.T.) con Orientación en Informática',
      degree: 'Título de Técnico en Informática Personal y Profesional (En curso / Ciclo Superior)',
      status: 'Cursando último ciclo formativo con excelente promedio académico',
      period: '2021 - Presente',
      location: 'Salta Capital, Argentina',
      details: [
        'Materias destacadas: Programación Estructurada y Orientada a Objetos, Modelos y Sistemas, Bases de Datos, Redes Informáticas, Arquitectura de Computadoras, Laboratorio de Hardware y Seguridad de Sistemas.',
        'Participación activa en ferias de ciencias y muestras anuales de tecnología escolar con proyectos de software.',
        'Prácticas profesionalizantes orientadas a la resolución de problemas técnicos reales en entornos educativos y comunitarios.'
      ]
    },
    {
      institution: 'Cursos y Trayectos de Formación Continua',
      degree: 'Especializaciones en Desarrollo Web Frontend, Python y Fundamentos de Redes Cisco',
      status: 'Certificaciones complementarias aprobadas',
      period: '2024 - 2026',
      location: 'Modalidad Online y Presencial',
      details: [
        'Curso de Desarrollo Web Moderno: HTML5 Semántico, CSS Grid, Flexbox y JavaScript ES6+.',
        'Introducción a Redes TCP/IP y Enrutamiento con Cisco Packet Tracer.',
        'Control de versiones con Git & GitHub para trabajo en equipo.'
      ]
    }
  ],
  experience: [
    {
      role: 'Pasante / Ayudante de Laboratorio de Informática',
      companyOrContext: 'Gabinete de Computación - Escuela Técnica',
      period: 'Marzo 2025 - Presente',
      type: 'Práctica Profesionalizante Escolar',
      responsibilities: [
        'Mantenimiento preventivo y correctivo de más de 30 equipos de escritorio con sistemas operativos Windows 10/11 y Linux Ubuntu.',
        'Configuración de cableado estructurado UTP Categoría 6, crimpado de fichas RJ45, switches y routers de aula.',
        'Instalación de paquetes de software educativo, entornos de desarrollo (VS Code, Python, Node.js) y clonación de discos con Clonezilla.',
        'Asistencia técnica a docentes y alumnos en la resolución de fallas de software, conectividad LAN e impresoras de red.'
      ]
    },
    {
      role: 'Desarrollador Web Junior & Soporte Técnico Independiente',
      companyOrContext: 'Proyectos Personales y Servicios Particulares',
      period: '2024 - Presente',
      type: 'Freelance / Proyectos Propios',
      responsibilities: [
        'Diseño y maquetación de sitios web responsivos utilizando HTML5, Tailwind CSS, TypeScript y React.',
        'Diagnóstico de fallas en PC y notebooks: cambio de pastas térmicas, actualización de memorias RAM, migración a discos SSD y formateo limpio.',
        'Desarrollo de la aplicación interactiva «Dragon Ball Z Enciclopedia» con navegación SPA, buscador y blog de artículos.'
      ]
    }
  ],
  skills: [
    {
      category: 'Desarrollo Web & Programación',
      skills: [
        { name: 'HTML5 Semántico (etiquetas header, nav, section, article, footer, hr, pre, br, p)', level: 95 },
        { name: 'CSS3 / Tailwind CSS / Flexbox / Grid', level: 90 },
        { name: 'JavaScript ES6+ & TypeScript', level: 85 },
        { name: 'React 18/19 & Componentes Funcionales', level: 80 },
        { name: 'Python (Algoritmos y Scripts de Automatización)', level: 75 },
        { name: 'SQL & Modelado de Bases de Datos Relacionales', level: 70 }
      ]
    },
    {
      category: 'Hardware, Redes & Sistemas Operativos',
      skills: [
        { name: 'Armado, Limpieza y Reparación de Computadoras (PC / Notebooks)', level: 95 },
        { name: 'Instalación y Configuración de Linux (Ubuntu, Debian) y Windows', level: 90 },
        { name: 'Redes LAN, Subnetting IPv4, Cableado UTP y Cisco Packet Tracer', level: 85 },
        { name: 'Diagnóstico de Memorias RAM, Fuentes de Poder, Discos SSD/HDD', level: 90 },
        { name: 'Virtualización con VirtualBox y Comandos Bash / Terminal', level: 80 }
      ]
    },
    {
      category: 'Herramientas de Software & Metodologías',
      skills: [
        { name: 'Git & GitHub (Control de versiones, branches, commits)', level: 85 },
        { name: 'Visual Studio Code / Extensiones / Depuración', level: 90 },
        { name: 'Vite / npm / Entornos de empaquetado moderno', level: 80 },
        { name: 'Trabajo en equipo, pensamiento analítico y documentación técnica', level: 95 }
      ]
    }
  ],
  projects: [
    {
      name: 'Enciclopedia Interactiva de Dragon Ball Z',
      role: 'Desarrollador Principal & Diseñador UI/UX',
      period: '2026',
      description: 'Plataforma web integral de divulgación con catálogo de razas, personajes, transformaciones, episodios, blog de artículos con comentarios en vivo, sección de CV y FAQ interactivo.',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'HTML5 Semántico', 'Vite']
    },
    {
      name: 'Script de Diagnóstico Rápido de Red y Hardware para Laboratorios',
      role: 'Autor y Programador',
      period: '2025',
      description: 'Script automatizado en Python y Bash que realiza ping a servidores DNS, comprueba la IP asignada por DHCP, mide la temperatura de CPU y lista el espacio en disco de los equipos escolares.',
      technologies: ['Python 3', 'Bash Scripting', 'Linux Ubuntu', 'Comandos de Red']
    },
    {
      name: 'Sistema de Préstamo de Libros y Componentes para Taller Técnico',
      role: 'Desarrollador de Base de Datos y Frontend',
      period: '2025',
      description: 'Aplicación prototipo para registrar el inventario de herramientas, multímetros, cables y protoboards del laboratorio de la escuela.',
      technologies: ['JavaScript', 'HTML5/CSS3', 'LocalStorage / SQLite']
    }
  ],
  certifications: [
    { title: 'Técnico en Informática (En Formación Final)', issuer: 'Dirección de Educación Técnico Profesional', year: '2026' },
    { title: 'Fundamentos de Redes y Conectividad', issuer: 'Cisco Networking Academy', year: '2025' },
    { title: 'Desarrollo Web Frontend Moderno', issuer: 'Plataforma de Capacitación Tecnológica', year: '2025' },
    { title: 'Taller de Seguridad e Higiene en Laboratorios de Informática', issuer: 'E.E.S.T.', year: '2024' }
  ],
  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés Técnico', level: 'Intermedio (Lectura fluida de documentación técnica, manuales de hardware y especificaciones de software)' }
  ],
  technicalScript: `#!/usr/bin/env python3
# ==============================================================================
# SCRIPT DE DIAGNÓSTICO DE RED Y ESTADO DE HARDWARE PARA EQUIPOS ESCOLARES
# Desarrollado por: Leandro Daniel Martínez - Estudiante Técnico en Informática
# ==============================================================================
import platform
import subprocess
import socket
import datetime

def diagnosticar_sistema():
    print("==================================================")
    print(" REPORTE DE AUDITORÍA TÉCNICA - LABORATORIO E.E.S.T.")
    print(" Fecha y Hora:", datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    print("==================================================")
    
    # 1. Información del Sistema Operativo y Arquitectura
    so = platform.system()
    version = platform.release()
    arquitectura = platform.machine()
    print(f"[*] Sistema Operativo : {so} ({version})")
    print(f"[*] Arquitectura CPU  : {arquitectura}")
    print(f"[*] Nombre de Host    : {socket.gethostname()}")
    
    # 2. Diagnóstico de Conectividad de Red Local e Internet
    servidor_dns = "8.8.8.8"
    print(f"[*] Verificando enlace hacia DNS ({servidor_dns})...", end=" ")
    try:
        resultado = subprocess.run(
            ["ping", "-c", "2", servidor_dns] if so != "Windows" else ["ping", "-n", "2", servidor_dns],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            timeout=3
        )
        if resultado.returncode == 0:
            print("[EN LÍNEA / OK]")
        else:
            print("[FALLO DE CONEXIÓN]")
    except Exception as e:
        print(f"[ERROR DE EJECUCIÓN: {e}]")
        
    print("--------------------------------------------------")
    print(" Diagnóstico finalizado con éxito. Equipo listo.")
    print("==================================================")

if __name__ == "__main__":
    diagnosticar_sistema()`
};

export const COURSE_DATA: CourseInfo = {
  title: 'CURSO UNIVERSITARIO DE ANÁLISIS NARRATIVO, DISEÑO DE PERSONAJES Y TRANSMEDIA EN DRAGON BALL Z',
  subtitle: 'Guía Integral de Estudio Académico: Cosmología, Biomecánica del Ki, Arcos Dramáticos y Semiótica del Shonen',
  code: 'DBZ-ACA-401',
  level: 'Nivel Técnico / Superior',
  duration: '64 Horas Cátedra (8 Módulos Teórico-Prácticos)',
  modality: 'Online Asincrónico con Talleres Prácticos y Evaluaciones por Etapas',
  certificate: 'Certificado de Aprobación en Guionismo y Análisis Transmedia',
  instructor: 'Cátedra de Narrativa Gráfica & Laboratorio de Informática Aplicada',
  description: 'Este programa de formación académica ofrece un estudio exhaustivo sobre el universo creado por Akira Toriyama. A través de una metodología rigurosa, el estudiante analizará las estructuras mitológicas, los sistemas de combate, las curvas de progresión de poder y las estrategias de adaptación audiovisual que convirtieron a Dragon Ball Z en el pilar del anime moderno.',
  objectives: [
    'Dominar los principios estructurales del viaje del héroe aplicados a las cuatro sagas principales (Saiyajin, Freezer, Cell y Majin Buu).',
    'Comprender la física ficticia y la termodinámica del Ki, así como las escalas de poder oficiales documentadas en los Daizenshuu.',
    'Analizar la evolución psicológica de los personajes arquetípicos: la redención del antihéroe (Vegeta), la crisis generacional (Gohan) y la pureza marcial (Goku).',
    'Implementar metodologías de diseño de personajes, siluetas icónicas y paletas de color en proyectos transmedia contemporáneos.'
  ],
  prerequisites: [
    'Conocimientos básicos de narrativa audiovisual o apreciación cinematográfica.',
    'Haber visualizado o leído los arcos fundamentales del manga/anime de Dragon Ball Z.'
  ],
  topics: [
    {
      id: 'modulo-1',
      topicNumber: 1,
      topicTitle: 'MÓDULO 1: COSMOLOGÍA, MITOLOGÍA Y JERARQUÍAS UNIVERSALES',
      description: 'Exploración de la estructura ontológica del macrocosmos: el reino de los vivos, el otro mundo, las esferas del dragón y las deidades creadoras y destructoras.',
      duration: '8 Horas',
      level: 'Fundamentos',
      badge: 'Módulo Teórico',
      subtopics: [
        {
          subtopicTitle: 'Subtema 1.1: La Geografía del Macrocosmos y el Más Allá',
          estimatedMinutes: '45 min',
          summary: 'Cartografía del Universo 7 según el Daizenshuu 7.<br />Estructura esférica dividida entre el Reino Mortal, el Paraíso, el Infierno y el Reino de los Supremos Kaiosamas.',
          details: [
            {
              studyTitle: 'Detalle de Estudio 1.1.1: El Palacio de Enma Daioh y el Camino de la Serpiente',
              content: 'Análisis del juicio kármico de las almas y la travesía de un millón de kilómetros como rito iniciático para alcanzar el entrenamiento del Kaio del Norte.',
              keyPoints: [
                'Longitud mística del camino: 1,000,000 km sobre el mar de nubes del Infierno.',
                'Condición espiritual: Preservación del cuerpo físico para guerreros virtuosos.',
                'Gravedad diferencial: El planeta de Kaio posee 10 veces la gravedad terrestre en un diámetro de apenas decenas de metros.'
              ],
              evaluationQuestion: '¿Por qué Enma Daioh permitió a Goku conservar su cuerpo físico tras su primer fallecimiento ante Raditz?'
            },
            {
              studyTitle: 'Detalle de Estudio 1.1.2: Las Jerarquías Divinas y el Rol de los Kaioshin',
              content: 'Organización de los dioses creadores (Shinjin) y su contraparte de equilibrio destructivo en la escala cósmica.',
              keyPoints: [
                'Árbol Kaiju: Origen vegetal de los Shinjin nacidos del Árbol del Mundo en el Planeta Kaishin.',
                'Potara vs Danza de la Fusión: Naturaleza divina de la unión de pendientes y su carácter permanente para deidades.',
                'La Espada Z: Sello místico que aprisionó al Anciano Kaioshin de hace 15 generaciones.'
              ],
              evaluationQuestion: 'Explique la diferencia de efectividad y tiempo de duración entre la Fusión Potara y la Danza Metamor.'
            }
          ]
        },
        {
          subtopicTitle: 'Subtema 1.2: El Origen de las Esferas del Dragón y los Namekuseijins',
          estimatedMinutes: '50 min',
          summary: 'La magia de los clanes dragón de Namek.<br />Límites, restricciones y condiciones de resurrección entre Shenron y Porunga.',
          details: [
            {
              studyTitle: 'Detalle de Estudio 1.2.1: El Gran Patriarca y las Reglas de Porunga',
              content: 'Comparativa de capacidades: Shenron concede 1 deseo (luego 2/3 con Dende) pero puede revivir a multitudes; Porunga concede 3 deseos pero originalmente sólo revivía a 1 individuo por deseo.',
              keyPoints: [
                'Idioma sagrado Namekiano: Clave obligatoria para formular deseos ante Porunga.',
                'Vínculo vital: Si el creador de las esferas muere, las esferas se convierten en piedra inerte.'
              ],
              evaluationQuestion: '¿Cuál fue la táctica de Kaio del Norte en Namek para sincronizar los deseos de Shenron y Porunga?'
            }
          ]
        }
      ]
    },
    {
      id: 'modulo-2',
      topicNumber: 2,
      topicTitle: 'MÓDULO 2: BIOMECÁNICA DEL KI, FISIOLOGÍA SAIYAJIN Y ESCALAS DE PODER',
      description: 'Estudio de la energía vital interna (Genki, Yuki, Shoki), la genética del Zenkai y la progresión matemática de los multiplicadores.',
      duration: '12 Horas',
      level: 'Técnico / Analítico',
      badge: 'Ciencia de Combate',
      subtopics: [
        {
          subtopicTitle: 'Subtema 2.1: La Triada del Ki (Genki, Yuki, Shoki)',
          estimatedMinutes: '60 min',
          summary: 'Desglose formulado por Akira Toriyama sobre los componentes del Ki.<br />Diferenciación entre vigor físico, coraje mental y serenidad emocional.',
          details: [
            {
              studyTitle: 'Detalle de Estudio 2.1.1: Componentes Esenciales de la Energía Vital',
              content: 'El Ki no es simplemente fuerza bruta; es la conjunción equilibrada de tres estados psico-fisiológicos indispensables para proyectar ráfagas energéticas.',
              keyPoints: [
                'Genki (元気): Vigor y energía física pura; base de la Genkidama.',
                'Yūki (勇気): Coraje, determinación y valentía en el campo de batalla.',
                'Shōki (正気): Mente clara, juicio correcto y control de las emociones.'
              ],
              evaluationQuestion: '¿Por qué la técnica de la Genkidama requiere que el usuario posea un corazón puro y sereno?'
            }
          ]
        },
        {
          subtopicTitle: 'Subtema 2.2: Fisiología de las Transformaciones de Super Saiyajin',
          estimatedMinutes: '75 min',
          summary: 'Genética de las Células S, detonantes emocionales y multiplicadores oficiales.<br />Evolución desde el SSJ Ordinario hasta el SSJ3 y el Estado Definitivo de Gohan.',
          details: [
            {
              studyTitle: 'Detalle de Estudio 2.2.1: Multiplicadores Matemáticos de Combate',
              content: 'Documentación canónica sobre la amplificación del poder base según las guías Daizenshuu y Super Exciting Guide.',
              keyPoints: [
                'Super Saiyajin Grado 1: Multiplicador x50 sobre el poder base.',
                'Super Saiyajin 2: Multiplicador x100 sobre el poder base (2x SSJ1).',
                'Super Saiyajin 3: Multiplicador x400 sobre el poder base (4x SSJ2), con un severo drenaje de estamina.',
                'Estado Definitivo (Ultimate Gohan): Desbloqueo del 100% del potencial latente sin gasto acelerado de energía.'
              ],
              evaluationQuestion: '¿Por qué la forma Super Saiyajin Grado 3 (Dai San Dankai de Trunks) resultó inefectiva en combate real frente a Cell?'
            }
          ]
        }
      ]
    },
    {
      id: 'modulo-3',
      topicNumber: 3,
      topicTitle: 'MÓDULO 3: ESTRUCTURA DRAMÁTICA, ARCOS NARRATIVOS Y DISEÑO DE ANTAGONISTAS',
      description: 'Análisis de los cuatro grandes arcos argumentales de DBZ y los modelos de antagonistas: el invasor colonial, el tirano corporativo, la amenaza biológica y el caos primordial.',
      duration: '14 Horas',
      level: 'Avanzado / Guionismo',
      badge: 'Diseño Narrativo',
      subtopics: [
        {
          subtopicTitle: 'Subtema 3.1: Arquetipos de Villanos y sus Simbolismos',
          estimatedMinutes: '90 min',
          summary: 'La evolución temática del antagonismo en la serie.<br />De la amenaza familiar y bélica (Saiyajin) a la destrucción existencial y psicológica (Majin Buu).',
          details: [
            {
              studyTitle: 'Detalle de Estudio 3.1.1: Freezer y la Metáfora de la Especulación Inmobiliaria',
              content: 'Toriyama concibió a Freezer inspirándose en los especuladores de bienes raíces de la burbuja económica japonesa de los años 80, presentándolo como un emperador inmobiliario intergaláctico.',
              keyPoints: [
                'Modelo de conquista: Conquista planetaria sistemática mediante la purga de especies nativas para su reventa.',
                'Estructura jerárquica: Organización piramidal con fuerzas especiales de élite (Fuerzas Especiales Ginyu).',
                'Sadismo aristocrático: Contraste entre modales corteses y crueldad despiadada.'
              ],
              evaluationQuestion: '¿Qué elementos visuales y narrativos diferencian la transformación final de Freezer de sus fases previas?'
            },
            {
              studyTitle: 'Detalle de Estudio 3.1.2: Cell y el Terror Biológico de la Perfección',
              content: 'Diseño biomecánico y estructura narrativa de cuenta regresiva hacia el torneo de artes marciales.',
              keyPoints: [
                'Consumo y absorción: Uso de la cola retráctil para absorber la bio-materia de ciborgs 17 y 18.',
                'Mosaico genético: Concentración del ADN de Goku, Vegeta, Piccolo, Freezer y King Cold.',
                'Arrogancia intelectual: Organización del Torneo de Cell para poner a prueba su perfección absoluta.'
              ],
              evaluationQuestion: 'Explique cómo el despertar del Super Saiyajin 2 de Gohan descompone psicológicamente la ilusión de perfección de Cell.'
            }
          ]
        }
      ]
    },
    {
      id: 'modulo-4',
      topicNumber: 4,
      topicTitle: 'MÓDULO 4: GUÍA PRÁCTICA DE REPASO, AUTOEVALUACIÓN Y PROYECTO FINAL',
      description: 'Síntesis de conceptos clave, compendio de términos canónicos, glosario técnico y pautas para la elaboración del ensayo de graduación.',
      duration: '10 Horas',
      level: 'Evaluación y Cierre',
      badge: 'Taller Práctico',
      subtopics: [
        {
          subtopicTitle: 'Subtema 4.1: Glosario Técnico y Formulario de Examen Final',
          estimatedMinutes: '60 min',
          summary: 'Revisión cruzada de terminología oficial en japonés y traducciones latinas.<br />Instrucciones para la entrega de la monografía analítica del curso.',
          details: [
            {
              studyTitle: 'Detalle de Estudio 4.1.1: Parámetros del Trabajo Monográfico de Fin de Cursada',
              content: 'El estudiante deberá redactar un ensayo comparativo de 5 páginas analizando el arco de redención de Vegeta o la dinámica de legado generacional entre Goku y Gohan.',
              keyPoints: [
                'Estructura académica: Introducción, Hipótesis, Desarrollo con citas canónicas y Conclusión.',
                'Fuentes requeridas: Citas del Manga original (tomos 17 al 42) y guías Daizenshuu.',
                'Defensa oral: Exposición de 10 minutos ante el comité evaluador del taller de informática.'
              ],
              evaluationQuestion: 'Sintetice en 3 premisas el impacto de la muerte de Goku frente a Cell en la psicología del joven Trunks del Futuro.'
            }
          ]
        }
      ]
    }
  ]
};

