const Rule_Set = require('./models/Rule_Set');
const Calendar = require('./models/Calendar');
const moment = require('moment');

const calendar = new Calendar();


const rule = new Rule_Set({
    transaction: {name: "Spotify", value: -11},

    identification_rules: [
        {type: 'simple', prop: 'eom', flags: [true]},
        // {type: 'simple', prop: 'month', flags: ['Nov', 'Oct']},
        // {type: 'interval', interval: 2, unit: 'weeks', start_date: '2018-11-03'}
    ],

});

const day = calendar.get('2018-11-17');

console.log(rule.matches(day));







