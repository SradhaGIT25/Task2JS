let input=[ [2, 9, 0,1], 
         [7, 1, 5,4] ]
console.log(input)
let len=input[0].length;
console.log(len);
let splitArray=input.flat();
console.log(splitArray)
let element1=""
let element2=""
let newArray=[]
for(let i=0;i<splitArray.length-len;i++){
    element1=splitArray[i];
    element2=splitArray[i+len];
   newArray[i]=[element1,element2]
}
console.log(newArray);