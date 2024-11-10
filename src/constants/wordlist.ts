type Definition = {
  word: string
  definition: string
  example: string
}

const DEFINITIONS: Definition[] = [
  {
    word: 'pecado',
    definition: 'nico',
    example:
      'EL PRIMER PECADO CAPITAL DE LOSNSUGARDS DADDYS',
  },
  {
    word: 'audios',
    definition: 'messi',
    example:
      'El que manda audios en re contra puto a partir de este momento',
  },
  {
    word: 'sida',
    definition: 'bona',
    example:
      'como que no tuvieron nunca sida????',
  },
  {
    word: 'vocacion',
    definition: 'messi',
    example:
      'Veo un culo y entrego hasta mi vocacion no puede ser',
  },
  {
    word: 'fonseca',
    definition: 'lucho',
    example:
      'Yo pensando q era argentino fonseca',
  },
  {
    word: 'arroz',
    definition: 'joako',
    example:
      'Mati Díaz: YA ESTÁ EL ARROZ CHICOS',
  }, {
    word: 'descuajeringo',
    definition: 'nico',
    example:
      'ME DESCUAJERINGO LA VIDA',
  }, {
    word: 'peron',
    definition: 'bona',
    example:
      'VIVA PERÓN',
  }, {
    word: 'nelson',
    definition: 'nico',
    example:
      'asjdjasd bona le di rt a lo q rteaste vos y me lo faveo walter nelson',
  }, {
    word: 'guardavidas',
    definition: 'joako',
    example:
      'Con que te pensas que siguen arriba los guardavidas que salen todos los dias',
  },
  {
    word: 'chillar',
    definition: 'bona',
    example:
      'Veni que te hago chillar el ogt puta',
  }, {
    word: 'autoridad',
    definition: 'nico',
    example:
      'Sonos la autoridad sabes q esta negra d mierda la proxima la hago mierda',
  }, {
    word: 'policia',
    definition: 'lucho',
    example:
      'Me cruce un policia y me robo',
  }, {
    word: 'beat',
    definition: 'nico',
    example:
      'VENI QUE TE JAGO EL BEAT CACHETEANDOTE BIEN EL ORTO',
  }, {
    word: 'pito',
    definition: 'bona',
    example:
      'Hay que conformarse con menos de 150kg y que no tenga pito',
  }, {
    word: 'abogarca',
    definition: 'lucho',
    example:
      'Tengo el mismo vocabulario q un abogarca',
  }, {
    word: 'madrid',
    definition: 'joako',
    example:
      'Filial Argentina de Guardavidas en Madrid',
  },
  {
    word: 'mommys',
    definition: 'nico',
    example:
      'Y q nuestras novias hagan un sugar mommys',
  },
  {
    word: 'pintura',
    definition: 'messi',
    example:
      'Debe ser por q en casa tengo toda la pintura salida',
  },
  {
    word: 'matraca',
    definition: 'nico',
    example:
      'Me estan dando matraca con TODO',
  },
  {
    word: 'edad',
    definition: 'messi',
    example:
      'Man hace 8 meses no veo a una mina de mi edad',
  }, {
    word: 'independiente',
    definition: 'nico',
    example:
      'se siente tipo: fua pensar q ahora nos damos besitos y en 10 años vas a estar pasando el trapo mientras miro el partido de independiente pensando que puta q sos',
  }, {
    word: 'lapicera',
    definition: 'bona',
    example:
      'Todo para decir que rellenó la lapicera',
  },
  {
    word: 'emergencia',
    definition: 'nico',
    example:
      'debe ser q no les gustaa esa parte de la casa donde tengo atadas un par d minusas de emergencia',
  },
  {
    word: 'novio',
    definition: 'messi',
    example:
      'El día q hable con una mina me pongo de novio',
  }, {
    word: 'cortante',
    definition: 'nico',
    example:
      'T CHAMUYABA MI EX CUÑADITA Y VOS ERAS RE CORTANTE',
  }, {
    word: 'jermu',
    definition: 'bona',
    example:
      'Si te chamuyas a una soltera sos vos contra 30 si te chamuyas a la jermu de nico sos vos contra 1',
  },

]

let WORDS: string[] = []

DEFINITIONS.forEach(function (item, index) {
  WORDS.push(item.word)
})

export { WORDS, DEFINITIONS }
