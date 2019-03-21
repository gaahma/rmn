const Simulation = require('./models/Simulation');
const my_rules = require('./rule_sets/my_rules.js');
const moment = require('moment');
const now = require('performance-now');


// const date = moment().format('YYYY-MM-DD');

// const start = now().toFixed(3);
// const sim = new Simulation(2031, date, 10000, my_rules);
// const report = sim.run();
// const end = now().toFixed(3);
// // console.log(report);
// console.log(`Report generated in ${((end-start).toFixed(3)/1000).toFixed(3)} sec`);


const bday = moment('1986-09-03').add(10000, 'days').format('YYYY-MM-DD');
const rday = moment('2014-01-23').add(10000, 'days').format('YYYY-MM-DD');
console.log(bday, rday);












