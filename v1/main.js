const moment =require('moment');
// const Day = require('./models/Day');
// const Rule = require('./models/Rule');
const App= require('./controllers/App');
const View = require('./view/View.js');

const day_count = parseInt(process.argv[2]);
const starting_bal = parseFloat(process.argv[3]);

if(isNaN(day_count) || isNaN(starting_bal)){
    throw new Error("Only numeric input accepted");
}

console.log(`Current date: ${moment().format('ddd ll')}\n`);


const app = new App(day_count, starting_bal);
console.log(`Parsing through ${day_count} days...\n`);
app.apply_rules();
app.calc();
let view = new View();
view.display(app.period);
// app.period[0].is_nth_day_of_month()
// console.log(JSON.stringify({period: app.period}, null, 2));