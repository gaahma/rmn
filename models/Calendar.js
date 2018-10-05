const Day = require('./Day');
const moment = require('moment');

class Calendar {
    constructor(day_count){
        this.timespan = [];
        const now = moment();

        for (let i = 1; i < day_count + 1; i++){
            this.timespan.push(new Day(moment(now).add(i, 'days'), this.timespan));
        }
    }

    /*******************************************************************
     * Method: get_adjacent_bus_day
     * 
     * Return the nearest business day, previous or
     * next, of this day.  Defaults to previous business
     * day if prev_or_next is not set.
     * 
     * params:  
     *      @param {Day[]} period           - Index of Day in timespan of the day in question
     *      @param {String} prev_or_next    - (Optional) 'next', defaults to 'prev'
     *   
     * usage:
     *      Get the next business day
     *          
     *      this.get_adjacent_bus_day(period, 'next')
     * 
     * Returns: Day object
     */
    get_adjacent_bus_day(index, prev_or_next){
        let a = (prev_or_next === 'next') ? 1 : -1;
        let found = false;
        let i = 0;

        while(!found){
            if(this.timespan[index + (i+=a)]){
                found = this.timespan[index + i].is_bus_day;
            } else {
                return null;
            }
        }
        return this.timespan[index + i];
    } 
}

module.exports = Calendar;