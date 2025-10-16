// testCases=[{expected : 2, input:"Hello world"},{expected : 5 , input:"This is a sample sentence."},{expected : 3 , input:"Programming is fun!"}];

let sentence="Hello world";
function findCount(sentence){
let wcount=1;
    let word=sentence.split(' ');
    console.log(word);
    for(let i=0;i<=sentence.length;i++){
        if(sentence[i]==(' ')){
            wcount++;
        }
    }
        console.log(`${wcount}`);
}
console.log(findCount(sentence));