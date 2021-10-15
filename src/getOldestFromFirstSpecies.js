const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/**
*filter 1:
  dado um ID funcionario que employees.id === parametroID
  retorno: array com primeiro animal

*filter 2:
  procurar em species o animalID
  o filter um retorna um array completo do animal, ordenamos os residentes por idade
  depois puxamos o valor do item na posição 0
*/

const employeeResponsibleFor = (id) => employees.filter((person) => person.id === id)
  .map(({ responsibleFor }) => responsibleFor[0]);

const firstAnimal = (idAnimal) => species.filter((animal) => animal.id === idAnimal[0])
  .map(({ residents }) => residents.sort((a, b) => b.age - a.age))
  .map((item) => Object.values(item[0]));

function getOldestFromFirstSpecies(id) {
  return firstAnimal(employeeResponsibleFor(id))[0];
}

module.exports = getOldestFromFirstSpecies;
