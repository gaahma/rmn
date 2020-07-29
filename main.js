const Simulation = require('./models/Simulation');
const my_rules = require('./rule_sets/test_rules.json');
const moment = require('moment');



const date = moment().format('YYYY-MM-DD');

const sim = new Simulation(3000, date, 60, my_rules);
console.log(sim.run());














