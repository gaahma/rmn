const Day = require('./Day');

class Calendar {
    constructor(){
        this.dates = {};
    }

    get(epoch){
        if(this.hasOwnProperty(epoch)) 
            return this.dates[epoch];

        return this.dates[epoch] = new Day(epoch);
    }

    get_applicable_date(day, rule){
        const {bd_direction} = rule.application_rules; //prev, next, or null
        if(!day.is_bus_day() && bd_direction){
            do {
                day = this.get(day.get_adjacent(bd_direction));
            } while(!day.is_bus_day());
        }

        return day.epoch;
    }
}

module.exports = Calendar;