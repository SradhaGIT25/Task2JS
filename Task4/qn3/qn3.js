let obj1={a:1 , b:2};
let array1=Object.entries(obj1)
console.log(array1)
let subArray=[]
let mainArray=[]
for(let i=0;i<=array1.length-1;i++){
    subArray[i]=array1[i].reverse()
}
console.log(subArray)

const obj2=Object.fromEntries(subArray);
console.log(obj2)