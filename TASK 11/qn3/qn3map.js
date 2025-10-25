// map()
let res=[];
let numbers1=[1,2,3,4];
let number=myMap(numbers1,square);
function myMap(array1,fun){
    for(let i=0;i<=array1.length-1;i++){
    let result=fun(array1[i]);
    res.push(result);
    }
    console.log(res);
}
function square(element){
    return Math.pow(element,2);
}
