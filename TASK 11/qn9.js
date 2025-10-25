let userEmail="sradhadomain@.com";
let splitMail=userEmail.split('@')
console.log(splitMail);
let endPortion=splitMail[splitMail.length-1];
console.log(endPortion);
let mailSplit=endPortion.split('.');
console.log(mailSplit);
let end=mailSplit[mailSplit.length-1]
console.log(end);
let count=0;
for(let i=0;i<=userEmail.length-1;i++){
    if(userEmail[i]==('@')){
        count++;
    }
}
console.log(count);
function isValid(email){
    if(email.includes('@') && endPortion.includes('.') && end.length>=2 && count===1 ){
    return true;
    }
    else{
        return false;
    }
}
console.log(isValid(userEmail));