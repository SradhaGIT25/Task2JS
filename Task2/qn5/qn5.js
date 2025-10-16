// testCases=[{expected :  {'h': 1, 'e': 1, 'l': 2, 'o': 1} , input:"hello"},{expected : {'p': 1, 'r': 2, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'i': 1, 'n': 1} , input: "programming"}];

let words="programming";
let word=[...words];
console.log(word);
let frequency={};
let count=0;
for(let i=0;i<=words.length-1;i++){
    if(word.indexOf[word[i]]<i){
        continue;
    }
    let count=0;
    for(let j=0;j<=word.length;j++){
         if(words[i]==word[j]){
        count++;
    }
    }
   
    frequency[word[i]]=count;
}
console.log(frequency);