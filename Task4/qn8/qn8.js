let numbers= [-1, -2, -3, -4, -5]
let sorted=numbers.sort((a,b)=>a-b);
console.log(sorted);
let maxProduct=1;
    maxProduct=numbers[numbers.length-1]*numbers[numbers.length-2]*numbers[numbers.length-3];
    console.log(maxProduct);