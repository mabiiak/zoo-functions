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
  const findId = employees.filter((person) => person.id === id);
  const findManager = findId.some((item) =>
    item.managers.length === 0 || item.responsibleFor.length > 3);

  return findManager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter(({ managers }) => managers.includes(managerId))
    .map((person) => `${person.firstName} ${person.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
