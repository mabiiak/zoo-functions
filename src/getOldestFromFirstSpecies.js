const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
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
  o filter um retorna um array, logo o filter dois trabalha com a posição[0]
    *sort dentro do filtro, pois fora ele não consegue acessar
      ordenamos o array criado com filter2
      do mais velho para o mais novo com base no residents.age
      filter2 retornou um array de obejtos, sort não está acessando :/
OKOK

*retono final?
*map:
  percorrei filter2 já ordenado,
  criar array com: [name, sexo, age]
  o item [0] do filter2
*/

const employeeResponsibleFor = (id) => employees.filter((person) => person.id === id)
  .map(({ responsibleFor }) => responsibleFor[0]);

const firstAnimal = (idAnimal) => species.filter((animal) => animal.id === idAnimal[0])
  .map(({ residents }) => residents.sort((a, b) => b.age - a.age))
  .map((animal) => `${animal[0].name} , ${animal[0].sex} , ${animal[0].age}`);
  // .map((animal) => [animal.name, animal.sex , animal.age]);
  // o array contem 3 item- length 2| atualmente ele é um só

function getOldestFromFirstSpecies(id) {
  return firstAnimal(employeeResponsibleFor(id));
}

console.log(getOldestFromFirstSpecies(olaId));

module.exports = getOldestFromFirstSpecies;
