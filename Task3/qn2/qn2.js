function isArmstrong(number){
    let num=number;
    let rem=0;
    let sum=0;
    while(num!=0){
        rem=Math.floor(num%10);
        sum+=rem*rem*rem;
        num=num/10;
    }
    if(sum==number){
        return true;
    }
    else{
       return false;
    }
}
console.log(isArmstrong(153));