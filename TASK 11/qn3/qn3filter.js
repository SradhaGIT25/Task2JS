// filter()
let filArray=[];
let numbers2=[1,2,3,4];
let evenNum=myFilter(numbers2,isEven);
console.log(evenNum)

function myFilter(array1,fun){
for(let i=0;i<=array1.length-1;i++){

    if(fun(array1[i])){
    filArray.push(array1[i]);
    }        
}
console.log(filArray);
}

function isEven(element){
        return element%2==0         
}

