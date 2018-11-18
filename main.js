const Rule_Set = require('./models/Rule_Set');
const Calendar = require('./models/Calendar');
const moment = require('moment');

const calendar = new Calendar();


const rule = new Rule_Set({
    transaction: {name: "Spotify", value: -11},

    identification_rules: [
        {type: 'simple', prop: 'day', flags: ['Sat']},
        {type: 'simple', prop: 'month', flags: ['Nov']},
    ],
    application_rules: {
        require_business_day: true,
        business_day_direction: 'prev'
    }

});

const day = calendar.get('2018-11-23');

// console.log(rule.matches(day));

console.log(day.is_bus_day());







