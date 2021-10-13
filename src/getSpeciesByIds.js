const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const especimeUnico = species.filter((animal) => animal.id === ids[0]);
  const especimes = species.filter((animal) => animal.id === ids[0] || animal.id === ids[1]);

  if (ids.length === 1) {
    return especimeUnico;
  }
  if (ids.length > 1) {
    return especimes;
  }
  return [];
};

module.exports = getSpeciesByIds;
