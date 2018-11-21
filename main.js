const Rule_Set = require('./models/Rule_Set');
const Calendar = require('./models/Calendar');
const moment = require('moment');
const File_Handler = require('./File_Handler/File_Handler');
const rule_params = require('./rule_sets/my_rules.js');
const calendar = new Calendar();
// const fh = new File_Handler();

const my_rules = rule_params.map(rule => new Rule_Set(rule));
let epoch = moment().format('YYYY-MM-DD');

// console.log(my_rules);
const timeline = [epoch];
for (let i = 0; i< 10; i++){
    epoch = moment(epoch).add(1, 'day').format('YYYY-MM-DD');
    timeline.push(epoch);
}

timeline.forEach(date => {
    const day = calendar.get(date);
    my_rules.forEach(rule => {
        if(rule.matches(day)){
            console.log(day.epoch);
        }
    })
})










