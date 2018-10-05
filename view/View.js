class View {
    display(period){
        let report = '';
        period.forEach(day => {
            report += 
`---------------------------------------
${day.day} ${day.month} ${day.date}, ${day.year}\n
Starting balance: ${day.starting_bal}`;

            day.transactions.forEach(t => {
                report += `\n\t${t.name}          $${t.amt}`;

            });
            report += `\nEnding balance: ${day.ending_bal}\n`;
            report += `---------------------------------------\n\n`;

        });

        console.log(report);
    }


}

module.exports = View;