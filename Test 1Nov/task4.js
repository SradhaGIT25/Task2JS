// let obj1={ a: 1, b: { c: 2, d: { e: 3 } } };
//  let array1=Object.entries(obj1);
//  let array2=array1.flat(1);
//  console.log(array1);

// let obj2=obj1.flat(2);
// console.log(obj2)


// let obj1={ a: 1, b: { c: 2, d: { e: 3 } } };
// let string1=obj1.toString();
// let string2=""
// console.log(string1);
// if(string1.includes('{')){
//     string2=string1.split('{');
//     console.log(string2);
// // }

let obj1={ a: 1, b: { c: 2, d: { e: 3 } } };
 let array1=Object.entries(obj1);
 console.log(array1);
 let array2=[]
for(let i=0;i<array1.length;i++){
    if(array1[i]==='{'){
        array2=array1.split('{');
        console.log(array2);
    }
}


//  console.log(array3)
//  let array2=array1.flat(1);
//  console.log(array1);
//  let string1=array1.toString();
//  console.log(string1);