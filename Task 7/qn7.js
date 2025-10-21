let newArray=[]
function flattenArray(array){
    for(let i=0;i<array.length;i++){
        if(typeof array[i]==='object'){
            flattenArray(array[i])
        }
        else{
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(flattenArray([1, [2, [3, [4]], 5]]))