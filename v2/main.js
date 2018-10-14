const moment =require('moment');
const Calendar = require('./models/Calendar');


const calendar = new Calendar();
console.log(calendar.get('1972-01-12'));


