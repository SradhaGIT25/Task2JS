
function combineObj(obj1,obj2){
    let merged=Object.assign(obj1,obj2);
    console.log(merged);
}
combineObj({ a: 1, b: 2 },{ b: 3, c: 4 }
)