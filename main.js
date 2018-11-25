const Simulation = require('./models/Simulation');
const my_rules = require('./rule_sets/my_rules.js');
const moment = require('moment');



let date = moment().format('YYYY-MM-DD');

const sim = new Simulation(2396, date, 20, my_rules);
console.log(sim.run());














