const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let testAge;

  species.filter((specie) => specie.name === animal)
    .forEach((prop) => {
      const selecionado = prop.residents;
      testAge = selecionado.every((res) => res.age > age);
    });

  return testAge;
}

module.exports = getAnimalsOlderThan;
