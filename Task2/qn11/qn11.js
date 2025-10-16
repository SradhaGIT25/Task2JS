// testCases=[{expected : true , input:16},{expected : false , input: 10} , {expected : true , input:25}];

let number=21;
let root=Math.sqrt(number);
console.log(root);
function perfectSquare(element){
    if(element%root==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(perfectSquare(number))