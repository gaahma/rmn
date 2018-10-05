const Day = require('../models/Day');
const Rule = require('../models/Rule');
const moment = require('moment');

class App {
    constructor(day_count, starting_bal){    //day_count serves as an index for period
        this.period = [];
        this.starting_bal = starting_bal;
        const now = moment();

        for (let i = 1; i < day_count + 1; i++){
            this.period.push(new Day(moment(now).add(i, 'days'), this.period));
        }

        this.rules = [
            new Rule('day', ['Fri'], 954, 'Apex Systems', 'prev'),
            new Rule('date', [1], -1020, 'Rent', 'next'),
            new Rule('date', [1], -11, 'Humana', 'next'),
            new Rule('date', [2], -11, 'Netflix', 'prev'),
            new Rule('date', [9], -9, 'Hulu', 'prev'),
            new Rule('date', [10], -84, 'AT&T', 'prev'),
            new Rule('date', [15], -75, 'Secu CC'),
            new Rule('date', [16], -20, 'Natural Gas'),
            new Rule('date', [20], -85, 'Capital One'),
            new Rule('date', [21], -197, 'Sallie Mae', 'prev'),
            new Rule('date', [24], -10, 'Stars', 'prev'),
            new Rule('date', [25], -145, 'State Farm', 'prev'),
            new Rule('date', [25], -160, 'Power', 'prev'),
            new Rule('date', [28], -11, 'Spotify', 'prev'),
            // new Rule('day', ['Mon', 'Wed', 'Sun'], -1.25, 'soda', 'prev')
        ]

    }

    apply_rules(){
        this.period.forEach((day) => {
            this.rules.forEach((rule) => {
                this.apply_rule(day, rule);
            });
        });
    }
    apply_rule(day, rule){
        const {type, bus_day, amt, name, } = rule;
        if(rule.options.includes(day[type])){
            if(bus_day){
                if(day.is_bus_day){
                    day.transactions.push({amt,name});
                } else {
                    if(day = day.get_adjacent_bus_day(this.period, bus_day)){
                        day.transactions.push({amt,name});
                    }
                }
            } else {
                day.transactions.push({amt, name});
            }
        }
    }

    calc(){
        this.calc_from_index(this.starting_bal, 0);
    }

    calc_from_index(starting_bal, i){
        let today = this.period[i];
        today.starting_bal = starting_bal;
        let transactions = 0;
        today.transactions.forEach(t => transactions += t.amt);
        today.ending_bal = starting_bal + transactions;
        i++;
        if(this.period[i]) 
            this.calc_from_index(today.ending_bal, i);
    }




    
}

module.exports = App;