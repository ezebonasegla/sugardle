type Definition = {
  word: string
  definition: string
  example: string
}

const DEFINITIONS: Definition[] = [
  {
    word: 'nazi',
    definition: 'hitler moment',
    example:
      'Ta nazi eh ya esta metido',
  },
  {
    word: 'absolut',
    definition: 'dale nico no te hagas el boludo',
    example:
      'nico o nicomprame el absolut de miami hijo de puta',
  },
  {
    word: 'problema',
    definition: 'lo que causan ellas',
    example:
      'no puedo hablar con nadie, todas me bloquean, cual es mi problema',
  },
  {
    word: 'celula',
    definition: 'la cosa que se mueve',
    example:
      'tipos d joako la celula',
  },
  {
    word: 'buitre',
    definition: 'chaja',
    example:
      'El verdad buitre',
  },
  {
    word: 'esponja',
    definition: 'con lo que te limpias el culo',
    example:
      'Tenia concha o una esponja de metal',
  },
  {
    word: 'caño',
    definition: 'dos significados',
    example:
      'ME DUELE LA CABEZA DE LA CHOTA NO SE SI SE LA PUSE A UNA MINA O AL CAÑO DE ESCAPE DEL AUTO',
  },
  {
    word: 'desnudo',
    definition: 'bona sobrio',
    example:
      'ESTOY DESNUDO',
  },
  {
    word: 'context',
    definition: 'contexto',
    example:
      'OUT OF CONTEXT BONASEGLA',
  },
  {
    word: 'corcho',
    definition: 'esta loco',
    example:
      'el loco corcho',
  },
  {
    word: 'emilia',
    definition: 'la jermu del duko o ex depende cuando te toque esta palabra',
    example:
      'No va a salir ni a palos menos que esta con emilia',
  },
  {
    word: 'neymar',
    definition: 'jogo bonito',
    example:
      'Neymar viendo a Emilia con Duki',
  },
  {
    word: 'quilmes',
    definition: 'la mejor ciudad',
    example:
      'Vivo en Quilmes y no conozco el bosque',
  },
  {
    word: 'falcioni',
    definition: 'el dt mas veterano del mundo',
    example:
      'Parece que falcioni nos sigue',
  },
  {
    word: 'cutarra',
    definition: 'nadie sabe que significa',
    example:
      'Cutarra no era marianetti?',
  },
  {
    word: 'cutarra',
    definition: 'nadie sabe que significa',
    example:
      'Cutarra no era marianetti?',
  },
  {
    word: 'riñon',
    definition: 'parte del cuerpo',
    example:
      'Yo mañana voy a dejar hasta el riñon para comprar dolares',
  },
  {
    word: 'osm',
    definition: 'jueguito',
    example:
      'Dice Batakis q si compro 5 dolares de osm dejo sin laburo a la mitad de Chaco',
  },
  {
    word: 'qatar',
    definition: 'mundial do fuchibol',
    example:
      'Che juako no te lleva a Qatar la chica esta',
  },
  {
    word: 'flores',
    definition: 'peligrosas',
    example:
      '1 medio, de flores buensa no tan buenas',
  },
  {
    word: 'ruggeri',
    definition: 'el rustico',
    example:
      'es una cuarto de libra pero te la trae ruggeri en moto',
  },
  {
    word: 'discord',
    definition: 'para el among us',
    example:
      'Yo ya empece a abrir discord',
  },







]

let WORDS: string[] = []

DEFINITIONS.forEach(function (item, index) {
  WORDS.push(item.word)
})

export { WORDS, DEFINITIONS }
