// testCases=[{expected :  "elephant" , input:["cat", "dog", "elephant", "tiger"]},{expected :  "banana" , input: ["apple", "banana", "orange"]} , {expected : "programming" , input:["programming", "is", "fun"]}];

let array1=["programming", "is", "fun"];
let sorted=array1.sort((a,b)=>a.length-b.length);
console.log(sorted);
console.log(array1[array1.length-1]);