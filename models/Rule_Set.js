const moment = require('moment');

class Rule_Set {

    class_properties(){
        this.rule_funcs = {
            //{type: 'simple', prop: 'date', flags: [17]}
            simple: function(rule, day){
                return rule.flags.includes(day.property(rule.prop));
            },
            //{type: 'interval', interval: 2, unit: 'weeks', start_date: '2018-11-03'}
            interval: function(rule, day){
                return (
                    0 === moment(rule.start_date).diff(moment(day.epoch), rule.unit) % rule.interval
                );
            }
        }
    }

    constructor(params){
        this.class_properties();

        this.transaction = params.transaction;
        this.identification_rules = params.identification_rules;
        this.application_rules = params.application_rules;
        this.exclusions = params.exclusions;

        this.validate();
    }

    matches(day){
        let match = true;
        for (const rule of this.identification_rules){
            const is_match = this.rule_funcs[rule.type];
            if(!is_match(rule, day))
                return false;
        }
        return true;
    }

    validate(){

    }

    
}

module.exports = Rule_Set;