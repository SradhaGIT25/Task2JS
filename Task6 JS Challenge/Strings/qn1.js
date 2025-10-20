
function removePunctuation(string){
    let trimmed1=string.trim().toLowerCase().replaceAll(" ","");
    console.log(trimmed1);
    let newArray=[]
    let specialChars="!@#~$%^&*()_+-=`{}|\<>?/':;,."
    for(let i=0;i<trimmed1.length;i++){
            if(!specialChars.includes(trimmed1[i])){
                newArray.push(trimmed1[i])
        }
    }
    let string2=newArray.toString().replaceAll(",","")
    console.log(string2);
}
removePunctuation(' Hello World! ')
