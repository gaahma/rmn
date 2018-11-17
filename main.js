// const Day = require('./models/Day');
// const Rule = require('./models/Rule');
const Rule_Set = require('./models/Rule_Set');
const Calendar = require('./models/Calendar');
const moment = require('moment');

const rule = new Rule_Set({
    id_rules: [
        {type: 'simple', prop: 'date', flags: [15]},
        {type: 'simple', prop: 'month', flags: ['Sep', 'Mar']}
    ]
});




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





