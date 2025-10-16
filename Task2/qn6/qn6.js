// testCases=[{expected :  30 , input:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},{expected : {'p': 1, 'r': 2, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'i': 1, 'n': 1} , input: [10, 20, 30, 40, 50]} , {expected :  60 , input:[15, 25, 35, 45, 55]}];

let numbers=[15, 25, 35, 45, 55];

let divisibleNum=numbers.filter(divideBy);
console.log(divisibleNum);
let total=divisibleNum.reduce(sumOf);
console.log(total);

function sumOf(accumulator,element){
    return accumulator+element;
}

function divideBy(element){
    return element%3==0
}