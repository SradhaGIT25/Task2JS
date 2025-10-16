// testCases=[{expected :  "programming" , input:"Hello world of programming"},{expected :  "jumps" , input: "The quick brown fox jumps over the lazy dog"} , {expected : "coding" , input:"I love coding"}];

let numbers=[2, 3, 4, 5, 6];
let number =[...numbers];
let len=numbers.length;
let first=numbers[0];
console.log(first);
let last=numbers[len-1];
console.log(last);
const a1=[];
let found=0;
function createList(){
let n=len;
for(let i=first;i<=last;i++){
    a1.push(i);
}
console.log(a1);
}
createList();                                                                                                               

for(let i=0;i<a1.length;i++){
    if(!numbers.includes(a1[i])){
        found=a1[i];
        return found;
        console.log(`Element not found is, ${found}`);
    }
  }
    if(number<0){
      found=null;
    }
          found=numbers[0]-1;
          return found;
          console.log(`Element not found is, ${found}`);
    
    