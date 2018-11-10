const moment = require('moment');

class SecondaryRule {
    constructor(unit, interval, start_date){
        this.unit = unit;
        this.interval = interval;
        this.start_date = start_date;
    }
    matches(day){
        return (
            moment(this.start_date).diff(moment(day.epoch), this.unit) % this.interval === 0
        )
    }
}

module.exports = SecondaryRule;