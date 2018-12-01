module.exports = [
    {
        transaction: {name: "Apex", amt: 1077},
    
        identification_rules: [
            {type: 'simple', property: 'day', flags: ['Fri']},
        ],
        application_rules: {
            bd_direction: 'prev'
        }
    
    },
    {
        transaction: {name: "Rent", amt: -1020},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [1]},
        ],
        application_rules: {
            bd_direction: 'next'
        }
    
    },
    {
        transaction: {name: "Humana", amt: -11},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [1]},
        ],
        application_rules: {
            bd_direction: 'next'
        }
    },
    {
        transaction: {name: "Netflix", amt: -11},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [2]},
        ],
        application_rules: {
            bd_direction: 'nextF'
        }
    },
    {
        transaction: {name: "Hulu", amt: -11},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [6]},
        ],
        application_rules: {
            bd_direction: 'prev'
        }
    },
    {
        transaction: {name: "ATT", amt: -84},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [10]},
        ],
        application_rules: {
            bd_direction: 'prev'
        }
    },
    {
        transaction: {name: "Secu CC", amt: -150},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [15]},
        ],
        application_rules: {
            bd_direction: null
        }
    },
    {
        transaction: {name: "Natural gas", amt: -20},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [16]},
        ],
        application_rules: {
            bd_direction: 'prev'
        }
    },
    {
        transaction: {name: "Planet Fitness", amt: -10},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [19]},
        ],
        application_rules: {
            bd_direction: null
        }
    },
    {
        transaction: {name: "Capital One", amt: 0},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [20]},
        ],
        application_rules: {
            bd_direction: null
        }
    },
    {
        transaction: {name: "Sallie Mae", amt: -198},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [21]},
        ],
        application_rules: {
            bd_direction: 'prev'
        }
    },
    {
        transaction: {name: "Stars", amt: -10},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [24]},
        ],
        application_rules: {
            bd_direction: 'prev'
        }
    },
    {
        transaction: {name: "State Farm", amt: -145},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [25]},
        ],
        application_rules: {
            bd_direction: 'prev'
        }
    },
    {
        transaction: {name: "Power", amt: -160},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [25]},
        ],
        application_rules: {
            bd_direction: 'prev'
        }
    },
    {
        transaction: {name: "Spotify", amt: -11},
    
        identification_rules: [
            {type: 'simple', property: 'eom', flags: [true]},
        ],
        application_rules: {
            bd_direction: 'prev'
        }
    },
    {//don't really know when this one comes out
        transaction: {name: "Amazon Prime", amt: -100},
    
        identification_rules: [
            {type: 'simple', property: 'date', flags: [15]},
            {type: 'simple', property: 'month', flags: ['Feb']}
        ],
        application_rules: {
            bd_direction: 'prev'
        }
    },
    {
        transaction: {name: "MTS: Insurance", amt: -234},
    
        identification_rules: [
            {type: 'simple', property: 'day', flags: ['Fri']},
        ],
        application_rules: {
            bd_direction: null
        }
    },
    {
        transaction: {name: "MTS: EC", amt: -60},
    
        identification_rules: [
            {type: 'simple', property: 'day', flags: ['Fri']},
        ],
        application_rules: {
            bd_direction: null
        }
    },

    {
        transaction: {name: "Food", amt: -40},
    
        identification_rules: [
            {type: 'simple', property: 'day', flags: ['Tue', 'Thu', 'Sat']},
        ],
        application_rules: {
            bd_direction: null
        }
    },
    {
        transaction: {name: "Extra", amt: -50},
    
        identification_rules: [
            {type: 'simple', property: 'day', flags: ['Sat', 'Wed']},
        ],
        application_rules: {
            bd_direction: null
        }
    },
    {
        transaction: {name: "Adam Gas", amt: -30},
    
        identification_rules: [
            {type: 'simple', property: 'day', flags: ['Fri']},
            {type: 'interval', interval: 2, unit: 'weeks', start_date: '2018-11-17'}
        ],
        application_rules: {
            bd_direction: null
        }
    },
    {
        transaction: {name: "Laura Gas", amt: -50},
    
        identification_rules: [
            {type: 'interval', interval: 12, unit: 'days', start_date: '2018-11-17'}
        ],
        application_rules: {
            bd_direction: null
        }
    },
];