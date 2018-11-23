const Rule_Set = require('./models/Rule_Set');
const Calendar = require('./models/Calendar');
const moment = require('moment');
const File_Handler = require('./File_Handler/File_Handler');
const Ledger = require('./models/Ledger');

const calendar = new Calendar();
// const fh = new File_Handler();



let date = moment().format('YYYY-MM-DD');

const timeline = calendar.define_timeline(date, 365);
const my_rules = require('./rule_sets/my_rules.js').map(rule => new Rule_Set(rule));
const ledger = new Ledger();
// console.log(timeline);
timeline.forEach(date => {
    const day = calendar.get(date);
    my_rules.forEach(rule => {
        if(rule.matches(day)){
            const applicable_date = calendar.get_applicable_date(day, rule);
            ledger.write(applicable_date, rule.transaction);
        }
    });
});


ledger.calculate(2396, timeline);

const report = ledger.report(timeline);

console.log(report);












