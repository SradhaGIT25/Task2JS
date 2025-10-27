function orderedChain(numbers){
let newArray=[];
let rental=0;
let maximum=[]

let len=numbers.length;

for(let i=0;i<len;i++){
    rental=numbers[i];
     newArray.push(numbers[i]);
    for(let j=i+1;j<len;j++){
        if(numbers[j]>numbers[i] && numbers[j]>rental){
            newArray.push(numbers[j]);
            rental=numbers[j]
        }
    }
    if(maximum.length>newArray.length){
        maximum=maximum;
    }
    else{
        maximum=newArray;
    }
    
    newArray=[];
}
console.log(maximum)
}
orderedChain( [10, 20, 15, 30, 22, 40]);
orderedChain([6, 9, 2, 0, 5, 7, 8, 2, 8]);
orderedChain([-8,2,4,-6,24,-7]);
orderedChain([7,10,3,1,6,8,9,3,9]);
orderedChain([11,3,6,7,8,22,5,1]);
orderedChain([3,-6,2,4,-6,24,-7]);
orderedChain([7,9,0,2,6,9,2,8]);
orderedChain([8, 10, 1, 0, 5, 6, 7, 3, 8]);
orderedChain([10,2,5,8,9,24,6,1]);
orderedChain([6,2,-5,8,0,24,6,1]);
orderedChain( [3, 10, 25, 30, 12, 50]);
orderedChain([-2,0,2,6,-18,8]);
orderedChain([4,1,40,56,8,89]);
orderedChain([-3,0,-8,12,6,8,66]);
orderedChain([11,0,-13,10,9,8,16]);
orderedChain([89,19,40,61,8,79]);
orderedChain([4,-1,0,6,-8,88]);





