const Rule_Set = require('./models/Rule_Set');
const Calendar = require('./models/Calendar');
const moment = require('moment');
const File_Handler = require('./File_Handler/File_Handler');

const calendar = new Calendar();
const fh = new File_Handler();


const rule = new Rule_Set({
    transaction: {name: "Spotify", value: -11},

    identification_rules: [
        {type: 'simple', prop: 'day', flags: ['Sat']},
        {type: 'simple', prop: 'month', flags: ['Nov']},
    ],
    application_rules: {
        bd_direction: 'next'
    }

});

const whatever = fh.get('my_rules.json');
// fh.save('my_rules.json', whatever);

console.log(whatever[0].transaction);


// const day = calendar.get('2018-11-17');

// console.log(rule.matches(day));

// const ad = calendar.get_applicable_date(day, rule);
// console.log(ad);

// console.log(day.is_bus_day());







