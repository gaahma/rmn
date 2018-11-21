const moment = require('moment');

class Rule_Set {
    constructor(params){
        this.transaction = params.transaction;
        this.identification_rules = params.identification_rules;
        this.application_rules = params.application_rules;
        this.exclusions = params.exclusions;

        this.validate();
        this.class_properties();
    }

    matches(day){
        for(const rule of this.identification_rules){
            const is_match = this.rule_funcs[rule.type];
            if(!is_match(rule, day))
                return false;
        }
        return true;
    }

    validate(){

    }
    class_properties(){
        this.rule_funcs = {
            //{type: 'simple', property: 'date', flags: [17]}
            simple: function(rule, day){
                return rule.flags.includes(day.get(rule.property));
            },
            //{type: 'interval', interval: 2, unit: 'weeks', start_date: '2018-11-03'}
            interval: function(rule, day){
                return (
                    0 === moment(rule.start_date).diff(moment(day.epoch), rule.unit) % rule.interval
                );
            }
        }
    }

    
}

module.exports = Rule_Set;