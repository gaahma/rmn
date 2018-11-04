class Rule {
    constructor(type, flags, require_bus_day){
        this.type = type;
        this.flags = flags;
        this.require_bus_day = require_bus_day; //prev, next, or null
    }

    matches(date){
        return this.flags.includes(date[this.type]);
    }

}

module.exports = Rule;