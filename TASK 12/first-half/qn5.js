function objectEquality(obj1,obj2){
    let array1=Object.entries(obj1);
    let flat1=array1.flat();
    console.log(flat1);
    let array2=Object.entries(obj2);
    let flat2=array2.flat();
    console.log(flat2);
    if(array1.length===array2.length){
    for(let i=0;i<array1.length;i++){
  
            if(!array2.includes(array1[i])){            
                 return "NOT EQUAL";
            }
            else{

                return "EQUAL";
            }
        }
    }
    }
console.log(objectEquality({ a: 1, b: 2 },{ b: 3, c: 4 }));
