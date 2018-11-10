class Rule {
    constructor(type, flags, bus_day_direction, details){
        this.type = type;
        this.flags = flags;
        this.bus_day_direction = bus_day_direction; //prev, next, or null
        this.details = details;
    }

    matches(date){
        return this.flags.includes(date.property(this.type));
    }

}

module.exports = Rule;