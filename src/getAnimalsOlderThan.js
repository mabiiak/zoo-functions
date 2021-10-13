const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species.filter((specie) => specie.name === animal)
  .every((specie) => { 
    if (specie.residents.age > age) {;
      return true;
    } else {
      return false
    }
  });

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
