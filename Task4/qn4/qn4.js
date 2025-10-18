let prefix="";
let letter="";
let word="";

let string="CAT";
for(let i=0;i<string.length;i++){
        let letter=string[i];
        prefix=prefix+letter;
        console.log(prefix);
}
for(let i=0;i<=string.length-1;i++){
        let word=prefix.slice(i+1);
        console.log(word);
}     