let filArray=[];
let numbers2=[23,9,45,12,90];
let Num=myFilter(numbers2,printNum);
// console.log(Num)
function myFilter(array1,fun){
for(let i=0;i<=array1.length-1;i++){

    if(fun(array1[i])){
    filArray.push(array1[i]);
    }        
}
console.log(filArray);
}
function printNum(element){
        return element>10        
}