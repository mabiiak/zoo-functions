const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/**
 * is manager - verifica se o colaborador é um gerente ou não
 * filtrar pelo id retornando booleano
 *
 * se responsibleFor > 3
 * $$ manager === [stephanieId] ou []
 */

function isManager(id) {
  const findId = employees.filter((person) =>
    `${person.firstName.toLowerCase()}Id` === id);

  const findManager = findId.some((item) =>
    item.managers.length === 0 || item.responsibleFor.length > 3);

  return findManager;
}

console.log(isManager('olaId'));

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
