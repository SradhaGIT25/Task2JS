function calculateTotal(billAmount,taxPercentage){
    let taxAmount=(taxPercentage/100)*billAmount;
    let total=billAmount+taxAmount;
    console.log(total)
}
calculateTotal(3000,15)