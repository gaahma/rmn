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
}

module.exports = Calendar;