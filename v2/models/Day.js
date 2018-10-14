const moment = require('moment');

class Day {
    constructor(epoch){
        const [name, month, date, year] = moment(epoch).format('ddd ll').replace(/,/g, '').split(' ');

        if (!name || !month || !date || !year){
            throw new Error(`Cannot parse date: "${epoch}"`);
        }

        this.name = name;
        this.month = month;
        this.date = parseInt(date);
        this.year = year;
        this.epoch = epoch;
        this.next = moment(epoch).add(1, 'day').format('YYYY-MM-DD');
        this.prev = moment(epoch).subtract(1, 'day').format('YYYY-MM-DD');
        this.is_bus_day = this.bus_day();
    }

        /*******************************************************************
     * Method: bus_day
     * 
     * Check if this day is a business day.  
     * 
     * usage:
     *  
     *      this.bus_day();
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
     * usage:
     * 
     *      Is today a holiday?
     *  
     *      this.is_holiday();
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
                if(this.is_last_of_month('Mon'))    //Memorial Day
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
     *      @param {Integer} n      - 1 - 5
     *      @param {String} day     - 'Mon', 'Tue', etc..
     * 
     * usage: 
     *      Is this day the second Monday of the month?
     * 
     *      this.is_nth_day_of_month(2, 'Mon');
     * 
     * Returns: Bool
     */
    is_nth_day_of_month(n, name){
        if(this.name !== name) 
            return false;

        let month;
        let count = 0;

        do{
            month = moment(this.epoch).subtract(++count, 'week').format('MMM');
        } while (month === this.month);

        if (n === count)
            return true;
        
        return false;
    }
    /*******************************************************************
     * Method: is_last_of_month
     * 
     * Check if current day is the last of it's kind
     * in the current month.
     * 
     * params:
     *      @param {String} day     - 'Mon', 'Tue', etc...
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
        //if 1 week from today is a different month, this is the last of that day 
        if(this.month !== moment(this.full_date).add(1, 'week').format('MMM'))
            return true;

        return false; 
    }
}

module.exports = Day;