let array1= ["cat", "dog", "elephant", "tiger"];
let temp=[];
for(let i=0;i<=array1.length-1;i++){
    for(let i=0;i<array1.length-1;i++){
        if(array1[i].length>array1[i+1].length){
            temp=array1[i+1];
            array1[i+1]=array1[i];
            array1[i]=temp;
        }
    }
}
console.log(array1);