const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
/**
 * const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

 * getSchedule() ---> retorta um objeto com os dias segunda {'officeHour': , exibition [array de animais]}

 * getSchedule('qualquercoisa') ---> retorta um objeto com os dias segunda {'officeHour': , exibition [array de animais]}

 * getSchedule('monday') | findDay ---> retorna um objeto 'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }, <<<< find

 * getSchedule('lions') | findAminal ---> retorna um array com os dias que o animal esta em exibição [PRONTO]
 */

// testar se o parametro existe em sepcie.name ou hours day

const findDay = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return { [scheduleTarget]: {
      officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
    } };
  }

  // Pegamos os valores do objeto hour e filtramos qual contem o dia buscado
  const chekDay = Object.entries(hours).find((day) => day[0] === scheduleTarget)[1];
  const { open, close } = chekDay;

  // Procura animais que tenham o dia parametro em availability e retornar um array com name
  const dayShowAnimal = species.filter((specie) => specie.availability.includes(scheduleTarget))
    .map((animal) => animal.name);
  return { [scheduleTarget]: {
    officeHour: `Open from ${open}am until ${close}pm`, exhibition: dayShowAnimal,
  } };
};

const findAminal = (scheduleTarget) => {
  const animalFindDay = species.find((specie) => specie.name === scheduleTarget);
  if (animalFindDay) return animalFindDay.availability;
  return findDay(scheduleTarget);
};

const emptyParameter = () => {
  const allDays = Object.entries(hours).map((day) => day[0]); // descobrimos os dias da programação
  const obj = {}; // setamos um objeto vazio

  allDays.forEach((day) => { // dentro do for each chamamos nosso bjeto, e atribuimos propriedades
    const dayHours = Object.entries(hours).find((dayHour) => dayHour[0] === day)[1]; // descobre os horarios do dia parametro
    const { open, close } = dayHours;

    obj[day] = {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: species.filter((specie) => specie.availability.includes(day))
        .map((animal) => animal.name),
    };
  });

  obj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return obj;
};

const testParameter = (scheduleTarget) => {
  const daysOfZoo = Object.entries(hours).map((day) => day[0]);
  const includeAnimals = species.some(({ name }) => name.includes(scheduleTarget));
  const includeDay = daysOfZoo.some((day) => day.includes(scheduleTarget));

  if (includeAnimals === false
    && includeDay === false) return emptyParameter();
  return findAminal(scheduleTarget);
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) return emptyParameter();
  return testParameter(scheduleTarget);
}

module.exports = getSchedule;
