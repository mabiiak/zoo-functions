const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/**
  recebe um array com dados de visitantes ---> retorna objeto com a contagem { child: 3, adult: 2, senior: 1 }
  pessoa < 18 === child
  pessoa >= 18 && <= 50 === adult
  pessoa > 50 === senior
*/

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;

  entrants.forEach((pessoa) => {
    if (pessoa.age < 18) child += 1;
    if (pessoa.age >= 18 && pessoa.age < 50) adult += 1;
    if (pessoa.age >= 50) senior += 1;
  });
  return { child, adult, senior };
}

// console.log(countEntrants({}));

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) return 0;

  const ageObj = countEntrants(entrants);
  let ticket = 0;

  const priceChild = ageObj.child * prices.child;
  const priceAdult = ageObj.adult * prices.adult;
  const priceSenior = ageObj.senior * prices.senior;
  ticket = priceChild + priceAdult + priceSenior;

  return ticket;
}

// console.log(calculateEntry([
//   { name: 'linda', age: 5 },
//   { name: 'socorro', age: 18 },
//   { name: 'anastacia', age: 18 },
//   { name: 'gertrudes', age: 50 }
// ]))

// console.log(calculateEntry())

module.exports = { calculateEntry, countEntrants };
