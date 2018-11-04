const Day = require('./models/Day');
const Rule = require('./models/Rule');
const Calendar = require('./models/Calendar');

const calendar = new Calendar();
const day = calendar.get_date('2018-11-04');
const rule = new Rule('name', ['Sun'], 'next');
if(rule.matches(day)){
    let apply_to_date = calendar.get_applicable_date(day, rule.require_bus_day);
    console.log(apply_to_date);
}







// console.log(day.eom);





