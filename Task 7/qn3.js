function missing(numbers){
let number =[...numbers];
let len=numbers.length;
let first=numbers[0];
console.log(first);
let last=numbers[len-1];
console.log(last);
let a1=[];
let found=[];
let n=len;
for(let i=first;i<=last;i++){
    a1.push(i);
}
console.log(a1);                                                                                                           

for(let i=0;i<a1.length;i++){
    if(numbers[i]!==a1[i]){
    return a1[i]

    }
   
  }
}
console.log(missing([1, 2, 3, 5, 6]))
 
