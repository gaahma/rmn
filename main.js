const Rule_Set = require('./models/Rule_Set');
const Calendar = require('./models/Calendar');
const moment = require('moment');
const File_Handler = require('./File_Handler/File_Handler');

const calendar = new Calendar();
// const fh = new File_Handler();

const my_rules = 
    require('./rule_sets/my_rules.js').map(rule => new Rule_Set(rule));

let date = moment().format('YYYY-MM-DD');

// console.log(my_rules);
const timeline = [];
for (let i = 0; i< 10; i++){
    date = moment(date).add(1, 'day').format('YYYY-MM-DD');
    timeline.push(date);
}
const transactions = {};

timeline.forEach(date => {
    const day = calendar.get(date);
    my_rules.forEach(rule => {
        const applicable_date = calendar.get_applicable_date(day, rule);
        if(rule.matches(day)){
            if(!transactions.hasOwnProperty(applicable_date)){
                transactions[applicable_date] = [];
            }
            transactions[applicable_date].push(rule.transaction);
        }
    });
});
let report = "";
timeline.forEach(date => {
    report += date +
        "\n" +
        `${transactions[date].name} : ${transactions[date].amt}\n\n`
});

console.log(report);












