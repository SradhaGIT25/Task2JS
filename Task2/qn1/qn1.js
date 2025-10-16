// testCases=[{expected : true, input:7},{expected : false, input:10},{expected : true, input:29}];

let number=29;
function arePrime(number){
    if(number<2){
        return false;
    }
        for(let i=2;i<number;i++){
            if(number%i==0){
                return false;
            }
    }
    
    return true;
    }
console.log(arePrime(number));
    
