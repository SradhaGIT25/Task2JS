let dates=[new Date(2025, 0, 4), new Date(2025, 2, 8), new Date(2025, 5, 23)]
const month1=dates[0].getMonth();
console.log(month1)
let birthdays=1;
let day=1;

// const week2=dates[1].getWeek
// console.log(week2);
const day1=dates[0].getDate();
console.log(day1)
let weekNum=1
// weekNum1=day1/7;
// console.log(weekNum1.toFixed(0))

for(let i=1;i<=dates[i].length-1;i++){
    day[i]=dates[i].getDate()
    console.log(day[i])
    weekNum[i]=day[i]/7;
    console.log(weekNum[i])
    if(weekNum[i]==weekNum[i+1]){
        birthdays++;
        
    }
    
}
console.log(birthdays);
console.log(`{weeknumber:${weekNum},birthdays:${birthdays}}`)
