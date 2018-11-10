const Day = require('./models/Day');
const Rule = require('./models/Rule');
const SecondaryRule = require('./models/SecondaryRule');
const Calendar = require('./models/Calendar');
const moment = require('moment');


const calendar = new Calendar();
const date = calendar.get('2018-11-24');



const rule = new SecondaryRule('week', 2, '2018-11-09');


const bool = rule.matches(date);
console.log(bool);
// const account = {
//     starting_balance: 400,
//     rules: [
//         new Rule('name', ['Fri'], 'prev', {name: 'Payday', amt: 300}),
//         new Rule('date', [2], 'prev', {name: 'Netflix', amt: -11}),
//         new Rule('date', [9], 'prev', {name: 'Hulu', amt: -9}),
//         new Rule('date', [16], null, {name: 'Natural Gas', amt: -20}),
//         new Rule('eom', ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'], 'prev', {name: 'Spotify', amt: -11})
//     ]
// }
// if(rule.matches(day)){
//     let apply_to_date = calendar.get_applicable_date(day, rule);
//     console.log(apply_to_date);
// }





