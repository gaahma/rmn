const Rule_Set = require('./Rule_Set');
const Calendar = require('./Calendar');
const File_Handler = require('../File_Handler/File_Handler');
const Ledger = require('./Ledger');
const moment = require('moment');


class Simulation {
    constructor(starting_balance, starting_date, day_count, rule_params){
        this.starting_balance = starting_balance;
        this.rules = rule_params.map(param => new Rule_Set(param));
        this.ledger = new Ledger();
        this.calendar = new Calendar();
        this.timeline = this.calendar.define_timeline(starting_date, day_count);
    }

    run(){
        const {calendar, ledger, timeline, rules} = this;
        timeline.forEach(date => {
            const day = calendar.get(date);
            rules.forEach(rule => {
                if(rule.matches(day)){
                    const applicable_date = calendar.get_applicable_date(day, rule);
                    ledger.write(applicable_date, rule.transaction);
                }
            });
        });

        ledger.calculate(this.starting_balance, timeline);
        return ledger.report(timeline);
    }
}

module.exports = Simulation;