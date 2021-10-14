const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/**
   *  testar se a função esta vazia e retornar obj {}
   *
   * percorrer funcionarios nome testando parametro
   *
   * percorrer funcionarios sobrenome testando parametro
   */

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }

  const fullName = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  return fullName;
};

module.exports = getEmployeeByName;
