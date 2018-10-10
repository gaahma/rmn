class Rule {
    constructor(type, options, amt, name, bus_day){
        this.type = type;
        this.options = options;
        this.amt = amt;
        this.name = name;
        this.bus_day = bus_day;
    }
}

module.exports = Rule;