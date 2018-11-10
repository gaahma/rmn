const Day = require('./Day');

class Calendar {
    constructor(){
        this.dates = {};
    }

    get(epoch){
        if(this.dates[epoch]) 
            return this.dates[epoch];

        return this.dates[epoch] = new Day(epoch);
    }

    get_applicable_date(day, rule){
        const direction = rule.bus_day_direction; //prev, next, or null
        if(!day.is_bus_day() && direction){
            do {
                day = this.get(day.get_adjacent(direction));
            } while(!day.is_bus_day());
        }

        return day.epoch;
    }
}

module.exports = Calendar;