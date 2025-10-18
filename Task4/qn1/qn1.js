
function flattenArr(array1){
let array2=[...array1];
array3=array2.flat();
array4=array3.flat();
array5=array4.flat();
console.log(array5);
}

console.log(flattenArr([1, [2, [3, [4]], 5]]))

