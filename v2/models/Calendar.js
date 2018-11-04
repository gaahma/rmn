const Day = require('./Day');

class Calendar {
    constructor(){
        this.dates = {};
    }

    get_date(epoch){
        if(this.dates[epoch]) 
            return this.dates[epoch];

        return this.dates[epoch] = new Day(epoch);
    }

    get_applicable_date(day, bus_day_direction){
        if(!day.is_bus_day && bus_day_direction){
            do {
                day = this.get_date(day.get_adjacent(bus_day_direction));
            } while(!day.is_bus_day);
        }

        return day.epoch;
    }
}

module.exports = Calendar;