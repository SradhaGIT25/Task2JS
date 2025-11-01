

// test(testCases);
// function test(testCases) {
//     testCases.forEach((testCase, index) => {
//     const result = printPattern (testCase.input);
            

//   for(let i=0;i<result.length;i++){
//       if (result[i] !== testCase.expected[i]) {
//       console.log(`test ${index + 1} failed`);
//     } 
//   }
//       console.log(`test ${index + 1} passed`);
//   });
// }
function printPattern(number){
let pattern="";
let array1=[]
if(number===1){
    for(let i=1;i<=number;i++){
    pattern=pattern+"()";
}
array1.push(pattern);
console.log(array1);
}
else{
    for(let i=1;i<=number;i++){
    pattern=pattern+"()";
}
array1.push(pattern);
console.log(array1);




}
}

printPattern(3);






























