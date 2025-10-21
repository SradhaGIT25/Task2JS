
function passwordValidation(password){
    let npassword=[]
    npassword=[...password]
    let upflag=0;
    let lowflag=0;
    let numflag=0;
    let spflag=0;
let uppArr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let lowArr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let numArr=['0','1','2','3','4','5','6','7','8','9']
let specialArr=['!','@','#','~','$','%','^','&','*','(',')','_','+','-','=','{','}','|','<','>','?','/',':',',','.','`','[',']']
if(password.length<6){
        return 'weak';
    }
for(let i=0;i<password.length;i++){

    for(let j=0;j<uppArr.length;j++){
        if(password.includes(uppArr[j])){
            upflag=1
            for(let k=0;k<lowArr.length;k++){
                if(password.includes(lowArr[k])){
                    lowflag=1
                     for(let l=0;l<numArr.length;l++){
                        if(password.includes(numArr[l])){
                            numflag=1
                            for(let m=0;m<specialArr.length;m++){
                                if(password.includes(specialArr[m])){
                                    spflag=1
                                   
                                }
                                
                            }

                        }
            }
        }
    }
}
        
}
// console.log(upflag , lowflag , numflag , spflag)

if(password.length>=8 && upflag===1 && lowflag===1 && numflag===1 && spflag===1){
    return 'strong'
}
else {
    return 'medium'
}
// else if(password.length<6){
//     return 'weak'
// }
// else{
//     return 'weak'
// }


}
}
console.log(passwordValidation("Sragdg@4"));
    // if((password.length>=6 && (num.includes(password[i]) || specialChars.includes(password[i]))))

    //  

    // (password.length>=6 && numflag===1 || spflag===1)