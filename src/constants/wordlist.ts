type Definition = {
  word: string
  definition: string
  example: string
}

const DEFINITIONS: Definition[] = [
  {
    word: 'gorda',
    definition: 'la que se comio juako en jofiel',
    example:
      'nos vamos pA TU CASA GORDA PUTAAAAA',
  },
  {
    word: 'padel',
    definition: 'deporte para putos',
    example:
      'Uuuh esas pal padel juegan eh',
  },
  {
    word: 'cacha',
    definition: 'enemigo de papo',
    example:
      'Cacha hijo de puta te detesto',
  },
  {
    word: 'milei',
    definition: 'futuro presidente pa',
    example: 'Quien es ese Milei q en 2023 saco 20%',
  },
  {
    word: 'crack',
    definition: 'el mas capo',
    example:
      'Como no vas a amar a Crackrrascal',
  },
  {
    word: 'bocha',
    definition: 'dios del rojo',
    example:
      'Pero no hay nadie mas grande q el.bocha',
  },
  {
    word: 'fulbo',
    definition: 'el deporte de messi',
    example:
      'Mareque es la definicion de fulbo',
  },
  {
    word: 'chelo',
    definition: 'el noba y te re suena',
    example:
      'A las 6 juega el rojo: no tamo chelo',
  },
  {
    word: 'colta',
    definition: 'el duko no quiere problemas',
    example:
      'Lesionaba a Messi y salia a matar venezolanos COLTA',
  },
  {
    word: 'clave',
    definition: 'algo ideal',
    example:
      'Duos en platino es la clave para salir de platino',
  },
  {
    word: 'putas',
    definition: 'la jermu tuya',
    example:
      'Todas similarmente igual de putas',
  },
  {
    word: 'jermu',
    definition:
      'lo que tienen algunos privilegiados',
    example:
      'jasjas ya te dormi las 18 lucas y la jermu',
  },
  {
    word: 'pollo',
    definition: 'conseguir algo easy',
    example:
      'yo estoy nazi haciendome pollo a tu jermu rellenandola de leche',
  },
  {
    word: 'virgo',
    definition: 'el mejor mensaje del grupo',
    example:
      'Tomi Messita: soy un virgo',
  },
  {
    word: 'chota',
    definition: 'nefasto',
    example:
      'Che, target es una chota',
  },
  {
    word: 'posta',
    definition: 'la verdad',
    example:
      'POSTA BOLUFO?',
  },
  {
    word: 'river',
    definition: '912 moriste en madrid',
    example:
      'Que venga Holan a River cuando se vaya Gallardo',
  },
  {
    word: 'brazo',
    definition: 'los que algunos tienen y otros no',
    example:
      'Tipo saco la cabeza por la reja y me cazo el brazo',
  },
  {
    word: 'grata',
    definition: 'googlealo',
    example:
      'ella es grata y le gusta la rola',
  },
  {
    word: 'messi',
    definition: 'messita y lio',
    example:
      'No entres a mas lugares messita cagon',
  },
  {
    word: 'novia',
    definition: 'pollerudos',
    example:
      'Le zarpamos la novia a joao',
  },
  {
    word: 'basta',
    definition: 'stop',
    example:
      'Bona: basta de rojos por favor',
  },
  {
    word: 'amigo',
    definition:
      'se usa para referirse a alguien que compartis unos leo matiolis',
    example:
      'no se amigo nosotros descendimos',
  },
  {
    word: 'skere',
    definition: 'duko old',
    example:
      'Pum shakalakapum Skere',
  },
  {
    word: 'lompa',
    definition: 'sinónimo de pantalón.',
    example:
      'Le tuve q prestar mi lompa a un compañero porque se le mojo todo y se iba a laburar pobre',
  },
  {
    word: 'piola',
    definition: 'algo buenardo',
    example:
      'Quiero ver un video pero no encuentro uno piola',
  },
  {
    word: 'sorry',
    definition: 'perdon',
    example:
      'SORRY PAPII YO NO SOY TU MAMI',
  },
  {
    word: 'pique',
    definition: 'jogador do futebol o picnharla',
    example:
      'Y de bruyne le pique un penal a courtois',
  },
  {
    word: 'gorra',
    definition: 'la policia',
    example:
      'Me agarro la gorra, estoy en Devoto, Me armaron causa',
  },
  {
    word: 'pinta',
    definition: 'buena apariencia.',
    example:
      'Cristiano tiene 37 y juega premier pinta para jugar hsata los 39/40 si quiere',
  },
  {
    word: 'minga',
    definition: 'usase para negar lo que dice alguien fuertemente.',
    example:
      'Trini me prestás la remera de encaje para la salida de hoy?" "minga!! la última vez la manchaste toda',
  },
  {
    word: 'lorca',
    definition: 'vesre de "calor".',
    example:
      'Tengo un lorca',
  },
  {
    word: 'yerba',
    definition:
      'hojas desecadas, ligeramente tostadas usadas para elaborar el mate.',
    example:
      'Eso no es yerba Nicki Nicole noooo',
  },
  {
    word: 'bajon',
    definition: 'depresión, falta de ánimo.',
    example:
      'Me bajonee porque no podemos aslir al final :(',
  },
  {
    word: 'ñapis',
    definition: 'juju c piko',
    example:
      'Si igual en una buena joda siempre hay un par de ñapis',
  },
]

let WORDS: string[] = []

DEFINITIONS.forEach(function (item, index) {
  WORDS.push(item.word)
})

export { WORDS, DEFINITIONS }
