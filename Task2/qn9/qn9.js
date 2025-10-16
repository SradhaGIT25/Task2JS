// testCases=[{expected :  true , input:"test@example.com"},{expected :  false , input: "invalid.email.com"} , {expected : false , input:"user@domain"}];
let userEmail="user@domain";
let emailSplit=userEmail.split('@')
// console.log(emailSplit);
let lastPortion=emailSplit[emailSplit.length-1];
// console.log(lastPortion);
let splitmail=lastPortion.split('.');
// console.log(splitmail);
let end=splitmail[splitmail.length-1]
// console.log(end);
let count=0;
for(let i=0;i<=userEmail.length-1;i++){
    if(userEmail[i]==('@')){
        count++;
    }
}
// console.log(count);
function emailValidation(mail){
    if(mail.includes('@') && lastPortion.includes('.') && end.length>=2 && count===1 ){
    return true;
    }
    else{
        return false;
    }
}
console.log(emailValidation(userEmail));