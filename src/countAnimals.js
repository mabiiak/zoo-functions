const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Feito com a ajuda de: Fumagalli e Matheus Cabral

function countAnimals(animal) {
  // counterAnimals()---> return especies e sua quantidade dentro de um objeto
  if (animal === undefined) {
    return species.reduce((acc, { name, residents }) =>
      ({ ...acc, [name]: residents.length }), {});
  }
  // counterAnimals( { specie: 'penguins' }) ----> return um numero (residents.length)
  // counterAnimals( { specie: 'giraffes', sex: 'female' } ) ----> return um numero (residents.filter(sex))
  const { specie, sex } = animal;

  if (sex) {
    return species.find(({ name }) => specie === name)
      .residents.filter((res) => res.sex === sex).length;
  }
  return species.find(({ name }) => specie === name).residents.length;
}

module.exports = countAnimals;
