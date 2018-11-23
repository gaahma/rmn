class Ledger {
    constructor(){
        this.pages = {};
    }
    write(date, transaction){
        const page = this.get(date);
        page.transactions.push(transaction);
    }

    get(date){
        if(!this.pages.hasOwnProperty(date)){
            return this.pages[date] = {
                transactions: []
            };
        } else {
            return this.pages[date];
        }
    }
    calculate(balance, timeline){
        timeline.forEach(date => {
            // console.log('caculating');
            let page = this.get(date);
            page.starting_balance = balance;
            page.transactions.forEach(t => {
                balance += t.amt;
            })
            page.ending_balance = balance;
        });
    }

    report(timeline){
        let report = '';
        timeline.forEach(date => {
            const page = this.get(date);
            if(page.transactions.length){
                report += `${date}\n\tStarting Balance: $${page.starting_balance}\n\n`;
                page.transactions.forEach(t => {
                    report += `\t\t${t.name} : ${t.amt}\n`;
                });
                report += `\n\tEnding Balance: $${page.ending_balance}\n\n`
            }
        
        });
        return report;
    }

};

module.exports = Ledger;