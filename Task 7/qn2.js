
let sentence="Hello hello world, world!";
let losentence=sentence.toLowerCase()
console.log(losentence)
 let newArray=[]
    let specialChars="!@#~$%^&*()_+-=`{}|\<>?/':;,."
    for(let i=0;i<losentence.length;i++){
            if(!specialChars.includes(losentence[i])){
                newArray.push(losentence[i])
        }
    }
    let string2=newArray.toString().replaceAll(",","").trim(' ')
    console.log(string2);
let words2=string2.split(' ')
console.log(words2)
let wcount={}
for(let i=0;i<words2.length-1;i++){
    let letters2=words2[i];
    let count=0;
    if(wcount[letters2]){
        continue;
    }
    for(let j=0;j<words2.length-1;j++){
        if(words2[j]==words2[i]){
            count++
        }
    }
    wcount[letters2]=count;
}
console.log(wcount)