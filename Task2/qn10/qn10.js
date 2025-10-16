let words=["flower", "flow", "flight"]
let sorted=words.sort((a,b)=>(a.length-b.length));
console.log(sorted);
let smallest=sorted[0];
console.log(`The smallest word in the list is, ${smallest}`);

let prefix="";
for(let i=0;i<smallest.length;i++){
let letter=smallest[i];
if(sorted.every(word=>word[i]===letter)){
    prefix=prefix+letter;
}
    else{
        break;
    }
}
console.log("longest common prefix is",prefix);