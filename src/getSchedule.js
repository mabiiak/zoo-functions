const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
/**
 * getSchedule() | emptyParameter() ---> retorta um objeto com os dias segunda {'officeHour': , exibition [array de animais]}
 *
 * getSchedule('qualquercoisa') ---> retorta um objeto com os dias segunda {'officeHour': , exibition [array de animais]}
 *
 * getSchedule('monday') ---> retorna um objeto 'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }, <<<< find
 *
 * getSchedule('lions') | findAminal ---> retorna um array com os dias que o animal esta em exibição
 */

function emptyParameter() {
  const ter = { Tuesday: {
    oficceHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: ['vacas'],
  },
  };

  const days = [ter, 'Friday', 'Saturday', 'Sunday', 'Monday'];
  return days;
}

console.log(emptyParameter());

const findAminal = (scheduleTarget) => {
  const animalFindDay = species.find((specie) => specie.name === scheduleTarget).availability;

  return animalFindDay;
};

function getSchedule(scheduleTarget) {
  return findAminal(scheduleTarget);
}

module.exports = getSchedule;
