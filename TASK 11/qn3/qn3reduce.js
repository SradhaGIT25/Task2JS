// reduce()
let iniValue=0;
let numbers3=[1,2,3,4];
let total=myReduce(numbers3,sumOf,0);
console.log(total)
function myReduce(array1,fun,iniValue){
    let value=iniValue;
for(let i=0;i<=array1.length-1;i++){
    value=fun(value,array1[i]);
        }
        console.log(value);    
}
function sumOf(accumulator,element){
        return accumulator+element;
}