const dimensoes = [
  { altura: 10, comprimento: 20},
  { altura: 2, comprimento: 4},
  { altura: 1, comprimento: 1},
  { altura: 50, comprimento: 50}
]

const somaAreas = dimensoes.map(poligono => poligono.altura * poligono.comprimento)
                           .reduce((soma,area)=> soma+=area,0);

console.log(somaAreas);