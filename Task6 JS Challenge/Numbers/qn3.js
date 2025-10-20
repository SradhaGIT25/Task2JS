function isValidNumber(value){
    if(value>-(253 - 1) && value<253 - 1){
        console.log("input is a finite,valid number")
    }
    else{
        console.log("input is a infinite number")
    }
}
isValidNumber(100)