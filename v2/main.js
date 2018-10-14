const moment =require('moment');
// const Day = require('./models/Day');
// const Rule = require('./models/Rule');
// const App= require('./controllers/App');
// const View = require('./view/View.js');
const Calendar = require('./models/Calendar');

// const day_count = parseInt(process.argv[2]);
// const starting_bal = parseFloat(process.argv[3]);

// if(isNaN(day_count) || isNaN(starting_bal)){
//     throw new Error("Only numeric input accepted");
// }

const calendar = new Calendar();
let now = moment().format('YYYY-MM-DD');
calendar.get_date(now);
now = moment().add(1, 'day').format('YYYY-MM-DD');
calendar.get_date(now);
console.log(calendar);

