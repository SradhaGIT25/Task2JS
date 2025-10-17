function isInserting(array1,array2,position){
    let newArray=[];
    for(let i=0;i<=array1.length;i++){
        for(let j=0;j<array2.length;j++){
            if(i==position-1){
            array1.push(array2[j]);
        }
        }
    }
    console.log(array1);
}
console.log(isInserting([1, 2, 3], [4, 5, 6], 2));