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

  entrants.map((pessoa) => {
    if (pessoa.age < 18) {
      child += 1;
    }
    if (pessoa.age >= 18
      && pessoa.age < 50) {
      adult += 1;
    }
    if (pessoa.age >= 50) {
      senior += 1;
    }
    
  });
  return { child, adult, senior };
}

// console.log(countEntrants([{ age: 5 },{  age: 5 },{  age: 5 },{  age: 18 },{  age: 18 },{age: 50 }])) // teste contador de idade

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
