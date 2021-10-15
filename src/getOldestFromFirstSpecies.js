const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
// const data = require('../data/zoo_data');
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
// const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';

/**
*filter 1:
  dado um ID funcionario
  e employees.id === parametroID
  retorno: array com iformações do funcionario
  map para buscar o ID do primeiro animal
OK

*filter 2:
  procurar em species o animalID - desconstrução?
*retorno: array completo com todos os animais daquela especie
OK

*sort:
  ordenamos o array criado com filter2,
  do mais velho para o mais novo com base no residents.age
  filter2 retornou um array de obejtos, sort não está acessando :/
*

*retono final?
*map:
  percorrei filter2 já ordenado,
  criar array com: [name, sexo, age]
  o item [0] do filter2
*/

const employeeResponsibleFor = (id) => employees.filter((person) => person.id === id)
  .map(({ responsibleFor }) => responsibleFor[0]);

console.log(employeeResponsibleFor(burlId)); // retorna ID animal [0]

// filter 2
const firstAnimal = (idAnimal) => species.filter((animal) => animal.id === idAnimal)
  .map(({ residents }) => residents);

console.log(firstAnimal('0938aa23-f153-4937-9f88-4858b24d6bce'));
// retorna lista daquela espécie, porém como vamos passar o filter1 como função?
console.log(firstAnimal(employeeResponsibleFor(burlId)));

function getOldestFromFirstSpecies(id) {
  // adicione
}

module.exports = getOldestFromFirstSpecies;
