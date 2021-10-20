const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
/**
 * getSchedule() | emptyParameter() ---> retorta um objeto com os dias segunda {'officeHour': , exibition [array de animais]}
 *
 * getSchedule('qualquercoisa') ---> retorta um objeto com os dias segunda {'officeHour': , exibition [array de animais]}
 *
 * getSchedule('monday') ---> retorna um objeto 'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }, <<<< find
 *
 * getSchedule('lions') | findAminal ---> retorna um array com os dias que o animal esta em exibição [PRONTO]
 */

// function emptyParameter() {
//   const ter = { Tuesday: {
//     oficceHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
//     exhibition: ['vacas'],
//   },
//   };

//   // const days = [ter, 'Friday', 'Saturday', 'Sunday', 'Monday'];
//   return days;
// }

// console.log(emptyParameter());

const findDay = (scheduleTarget) => {
  // Pegamos os valores do obejto hour e filtramos qual contem o dia buscado
  if (scheduleTarget === 'Monday') {
    return { [scheduleTarget]: {
      officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
    } };
  }

  const chekDay = Object.entries(hours).find((day) => day[0] === scheduleTarget)[1];
  const { open } = chekDay;
  const { close } = chekDay;

  // Procura animais que tenham o dia parametro em availability e retornar um array com name
  const dayShowAnimal = species.filter((specie) => specie.availability.includes(scheduleTarget))
    .map((animal) => animal.name);

  return { [scheduleTarget]: {
    officeHour: `Open from ${open}am until ${close}pm`, exhibition: dayShowAnimal,
  } };
};

// console.log(findDay('Monday'));
// console.log(findDay('Tuesday'));

const findAminal = (scheduleTarget) => {
  const animalFindDay = species.find((specie) => specie.name === scheduleTarget);
  if (animalFindDay) return animalFindDay.availability;
  return findDay(scheduleTarget);
};

function getSchedule(scheduleTarget) {
  return findAminal(scheduleTarget);
}

// console.log(getSchedule('Monday'));

module.exports = getSchedule;
