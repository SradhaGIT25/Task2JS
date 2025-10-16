// testCases=[{expected : [2, 4, 6], input:[1, 2, 3, 4, 5, 6]},{expected : [8, 10, 12] , input:[7, 8, 9, 10, 11, 12]},{expected : [2, 4, 6, 8, 10] , input:[2, 4, 6, 8, 10]}];

let numbers=[2, 4, 6, 8, 10];
function checkEven(numbers){
let evenNumber=numbers.filter(isEven);
console.log(evenNumber);
return evenNumber;
}
function isEven(element){
    return element%2==0;
}

checkEven(numbers);
