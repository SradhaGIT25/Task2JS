// testCases=[{expected :  "programming" , input:"Hello world of programming"},{expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} , {expected : "coding" , input:"I love coding"}];

let sentence="I love coding";
let longest="";
let word=sentence.split(' ');
console.log(word);

for(let i=0;i<word.length-1;i++){
    if(word[i].length>=word[i+1].length){
        if(word[i].length>=longest.length){
            longest=word[i];
        }
    }
    else{
        if(word[i].length<word[i+1].length){
            if(word[i+1].length>=longest.length){
            longest=word[i+1];
        }
    }
}
}
console.log(`${longest}`);