const Day = require('./models/Day');
const Rule = require('./models/Rule');
const Calendar = require('./models/Calendar');
const FileHandler = require('./db/db');
const moment = require('moment');
const fs = require('fs');


// console.log(x);
const calendar = new Calendar();
const day = calendar.get('2018-11-10');



const rule = new Rule('annual', ['11-10'], 'prev');

const account = {
    rules: [
        new Rule('name', ['Fri'], 'prev', {name: 'Payday', amt: 954}),
        new Rule('date', [1], 'next', {name: 'Rent', amt: -1020}),
        new Rule('date', [1], 'next', {name: 'Humana', amt: -11}),
        new Rule('date', [2], 'prev', {name: 'Netflix', amt: -11}),
        new Rule('date', [9], 'prev', {name: 'Hulu', amt: -9}),
        new Rule('date', [10], 'prev', {name: 'ATT', amt: -84}),
        new Rule('date', [15], null, {name: 'Secu CC', amt: -75}),
        new Rule('date', [16], null, {name: 'Natural Gas', amt: -20}),
        new Rule('date', [20], null, {name: 'Capital One', amt: -85}),
        new Rule('date', [21], 'prev', {name: 'Sallie Mae', amt: -197}),
        new Rule('date', [24], 'prev', {name: 'Stars', amt: -10}),
        new Rule('date', [25], 'prev', {name: 'State Farm', amt: -145}),
        new Rule('date', [25], 'prev', {name: 'Power', amt: -160}),
        new Rule('eom', ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'], 'prev', {name: 'Spotify', amt: -11})
    ]
}
const db = new FileHandler();
db.get('my_account.json');
if(rule.matches(day)){
    let apply_to_date = calendar.get_applicable_date(day, rule);
    // console.log(apply_to_date);
}





