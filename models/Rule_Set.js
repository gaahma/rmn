class Rule_Set {

    class_properties(){
        this.rule_funcs = {
            simple: function(rule, day){
                return rule.flags.includes(day.property(rule.type));
            },
    
            interval: function(rule, day){
                return (
                    0 === moment(rule.start_date).diff(moment(day.epoch), rule.unit) % rule.interval
                );
            }
        }
    }

    constructor(params){
        this.class_properties();
        this.id_rules = params.id_rules;
        this.calendar_rules = params.calendar_rules;
        this.exclusions = params.exclusions;
    }

    
}

module.exports = Rule_Set;