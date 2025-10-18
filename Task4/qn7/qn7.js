let colorCode=[255,165,0]
let RR=colorCode[0];
let GG=colorCode[1];
let BB=colorCode[2];

for(let i=0;i<=colorCode.length-1;i++){

    if( RR%16 > 9 || GG%16 > 9 || BB%16 > 9){
        if( RR%16 == 10 || GG%16 == 10 || BB%16 == 10){
            console.log("A")
        }
        else if( RR%16 == 11 || GG%16 == 11 || BB%16 == 11){
            console.log("B")
        }
        else if( RR%16 == 12 || GG%16 == 12 || BB%16 == 12){
            console.log("C")
        }
        else if( RR%16 == 13 || GG%16 == 13 || BB%16 == 13){
            console.log("D")
        }
        else if( RR%16 == 14 || GG%16 == 14 || BB%16 == 14){
            console.log("E")
        }
        else if( RR%16 == 15 || GG%16 == 15 || BB%16 == 15){
            console.log("F")
        }
    }

    else{
        if( RR%16 ==0 || GG%16 == 0 || BB%16 ==0){
        console.log("00")
        }
        if( RR%16 ==1 || GG%16 == 1 || BB%16 ==1){
        console.log("1")
        }
        if( RR%16 ==2 || GG%16 == 2 || BB%16 ==2){
        console.log("2")
        }
        if( RR%16 ==3 || GG%16 == 3 || BB%16 ==3){
        console.log("3")
        }
        if( RR%16 ==4 || GG%16 == 4 || BB%16 ==4){
        console.log("4")
        }
        if( RR%16 ==5 || GG%16 == 5 || BB%16 ==5){
        console.log("00")
        }
        if( RR%16 ==6 || GG%16 == 6 || BB%16 ==6){
        console.log("00")
        }
        if( RR%16 ==7 || GG%16 == 7 || BB%16 ==7){
        console.log("00")
        }
        if( RR%16 ==8 || GG%16 == 8 || BB%16 ==8){
        console.log("00")
        }
        if( RR%16 ==9 || GG%16 == 9 || BB%16 ==9){
        console.log("00")
        }
    }
}

