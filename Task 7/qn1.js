function arrangeByParity(numbers){
let evenNums=numbers.filter(isEven);
let oddNums=numbers.filter(isOdd);
let newArray=[...evenNums,...oddNums];
console.log(newArray);
function isEven(element){
    return element%2==0
}
function isOdd(element){
    return element%2!=0
}
}
arrangeByParity([3, 2, 4, 1, 5, 8])