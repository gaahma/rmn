const moment = require('moment');

class Day {
    constructor(epoch){
        const [name, month, date, year] = moment(epoch).format('ddd ll').replace(/,/g, '').split(' ');

        if (!name || !month || !date || !year)
            throw new Error(`Cannot parse date: "${epoch}"`);
        
        this.epoch = epoch;
        this.name = name; //weekname eg 'Mon' 'Tue'...
        this.month = month;
        this.date = parseInt(date);
        this.year = parseInt(year);
        this.eom = this.is_end_of_month() ? this.month : null;
        this.is_bus_day = this.bus_day();
    }

    /*******************************************************************
     * Method: bus_day
     * 
     * Check if this day is a business day.  
     * 
     * Returns: Bool
     */   
    bus_day(){
        return  (this.name !== 'Sat' && this.name !== 'Sun' && !this.is_holiday());
    }
    
    /*******************************************************************
     * Method: is_holiday
     * 
     * Check if this day is a holiday.  Excludes Easter, which always
     * falls on a Sunday, so I don't need to account for it.
     * 
     * Returns: Bool
     */  
    is_holiday(){
        switch(this.month){
            case 'Jan':
                if (this.date === 1)                         //New Years Day
                    return true;             
                if(this.is_nth_day_of_month(3, 'Mon'))      //MLK Day
                    return true;
                break;
            case 'Feb': 
                if (this.is_nth_day_of_month(3, 'Mon'))     //President's Day
                    return true;
                break;
            case 'May':
                if(this.is_last_of_month('Mon'))            //Memorial Day
                    return true;
                break;
            case 'Jul':
                if(this.date === 4)
                    return true;
                break;
            case 'Sep':
                if(this.is_nth_day_of_month(1, 'Mon'))      //Labor Day
                    return true;
                break;
            case 'Oct':
                if(this.is_nth_day_of_month(2, 'Mon'))      //Columbus Day
                    return true;
                break;
            case 'Nov':
                if(this.is_nth_day_of_month(4, 'Thu'))      //Thanksgiving
                    return true;
                break;
            case 'Dec':
                if(this.date === 24)                       //Christmas Eve
                    return true;
                if(this.date === 25)                       //Christmas
                    return true;
                if(this.date === 31)                       //New Years Eve
                    return true;
                break;
            default:
                return false;
        }
        return false;
    }
    /*******************************************************************
     * Method: is_nth_day_of_month
     * 
     * Check if this day is the nth day of it's name.
     * 
     * params: 
     *      @param {Integer} n 1 ... 5
     *      @param {String} day 'Mon', 'Tue', etc..
     * 
     * usage: 
     *      Is this day the second Monday of the month?
     * 
     *      this.is_nth_day_of_month(2, 'Mon');
     * 
     * Returns: Bool
     */
    is_nth_day_of_month(n, name){
        if (this.name !== name) 
            return false;

        let count = 0;
        let month;

        do {
            month = moment(this.epoch).subtract(++count, 'week').format('MMM');
        } while (month === this.month);

        return (n === count);
    }
    /*******************************************************************
     * Method: is_last_of_month
     * 
     * Check if this day is the last of it's name
     * in it's month.
     * 
     * params:
     *      @param {String} day 'Mon', 'Tue', etc...
     *   
     * usage:
     *      Is this day the last Wednesday of the month?
     *          
     *      this.is_last_of_month('Wed')
     * 
     * Returns: Bool
     */
    is_last_of_month(day){
        if(this.day !== day) 
            return false;  

        return (this.month !== moment(this.epoch).add(1, 'week').format('MMM'));
    }

    /*******************************************************************
     * Method: is_end_of_month
     * 
     * Check if this day is the last day of the month
     * 
     * Returns: Bool
     */
    is_end_of_month(){
        if(this.date < 28)
            return false;

        const month = moment(this.epoch).add(1, 'd').format('MMM');

        return (this.month !== month);
    }

    get_adjacent(direction){
        if(direction === 'prev'){
            return this.prev();
        } else {
            return this.next();
        }
    }

    next(){
        if(this.next_epoch)
            return this.next_epoch;
        return this.next_epoch = moment(this.epoch).add(1, 'd').format('YYYY-MM-DD');
    }

    prev(){
        if(this.prev_epoch)
            return this.prev_epoch;
        return this.prev_epoch = moment(this.epoch).subtract(1, 'd').format('YYYY-MM-DD');
    }
}

module.exports = Day;