
let number=201;
let num=number.toString();

let ones=["zero","one","two","three","four","five","six","seven","eight","nine"];
let teens=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
let tens=["zero"," ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
let hun=[" hundred"]
if(num.length===1){
    if(num==="1") console.log(ones[num])
    else if(num==="2") console.log(ones[num])
    else if(num==="3") console.log(ones[num])
    else if(num==="4") console.log(ones[num])
    else if(num==="5") console.log(ones[num])
    else if(num==="6") console.log(ones[num])
    else if(num==="7") console.log(ones[num])
    else if(num==="8") console.log(ones[num])
    else if(num==="9") console.log(ones[num])
    else console.log(ones[num])
}

else if(num.length===2){

    if(num[0]==="1"){
        if([num[1]==="0"])  console.log(teens[num[1]])
        else if([num[1]==="1"])  console.log(teens[num[1]])
        else if([num[1]==="2"])  console.log(teens[num[2]])
        else if([num[1]==="3"])  console.log(teens[num[3]])
        else if([num[1]==="4"])  console.log(teens[num[4]])
        else if([num[1]==="5"])  console.log(teens[num[5]])
        else if([num[1]==="6"])  console.log(teens[num[6]])
        else if([num[1]==="7"])  console.log(teens[num[7]])
        else if([num[1]==="8"])  console.log(teens[num[8]])
        else if([num[1]==="9"])  console.log(teens[num[9]])
    }
    else if((num[0]>1) && (num[1]==="0")){
         if([num[0]==="2"])  console.log(tens[num[0]])
        else if([num[0]==="3"])  console.log(tens[num[0]])
        else if([num[0]==="4"])  console.log(tens[num[0]])
        else if([num[0]==="5"])  console.log(tens[num[0]])
        else if([num[0]==="6"])  console.log(tens[num[0]])
        else if([num[0]==="7"])  console.log(tens[num[0]])
        else if([num[0]==="8"])  console.log(tens[num[0]])
        else if([num[0]==="9"])  console.log(tens[num[0]])
    }

    else
        {
            if(num[0]>=2){
                console.log(tens[num[0]]);console.log(ones[num[1]])
            }
            
        }                                                                                                                                                                                                                                            
    }


    else if(num.length===3){

        if(num[1]=="0" && num[2]=="0"){
            if(num[0]==="1") console.log(ones[num[0]] + hun[0]);
            else if(num[0]==="2") console.log(ones[num[0]] + hun[0]);
            else if(num[0]==="3") console.log(ones[num[0]] + hun[0]);
            else if(num[0]==="4") console.log(ones[num[0]] + hun[0]);
            else if(num[0]==="5") console.log(ones[num[0]] + hun[0]);
            else if(num[0]==="6") console.log(ones[num[0]] + hun[0]);
            else if(num[0]==="7") console.log(ones[num[0]] + hun[0]);
            else if(num[0]==="8") console.log(ones[num[0]] + hun[0]);
            else if(num[0]==="9") console.log(ones[num[0]] + hun[0]);
            // else if(num[0]==="10") console.log(ones(1) + " thousand");
            // else if(num[0]==="20") console.log(ones[num[0]] + " thousand");
        }

        else if(num[2]=="0"){
            console.log(ones[num[0]] + hun[0]);console.log(tens[num[1]]);
        }

        else if(num[1]==="1"){
            if(num[2]==="1") {console.log(ones[num[0]] + hun[0]);console.log(teens[1])}
            else if(num[2]==="2") {console.log(ones[num[0]] + hun[0]);console.log(teens[2])}
            else if(num[2]==="3") {console.log(ones[num[0]] + hun[0]);console.log(teens[3])}
            else if(num[2]==="4") {console.log(ones[num[0]] + hun[0]);console.log(teens[4])}
            else if(num[2]==="5") {console.log(ones[num[0]] + hun[0]);console.log(teens[5])}
            else if(num[2]==="6") {console.log(ones[num[0]] + hun[0]);console.log(teens[6])}
            else if(num[2]==="7") {console.log(ones[num[0]] + hun[0]);console.log(teens[7])}
            else if(num[2]==="8") {console.log(ones[num[0]] + hun[0]);console.log(teens[8])}
            else if(num[2]==="9") {console.log(ones[num[0]] + hun[0]);console.log(teens[9])}
            
        
        }
        else if(num[1]==="0"){
            if(num[2]==="1") {console.log(ones[num[0]] + hun[0]);console.log(ones[num[2]])}
            else if(num[2]==="2") {console.log(ones[num[0]] + hun[0]);console.log(ones[num[2]])}
            else if(num[2]==="3") {console.log(ones[num[0]] + hun[0]);console.log(ones[num[2]])}
            else if(num[2]==="4") {console.log(ones[num[0]] + hun[0]);console.log(ones[num[2]])}
            else if(num[2]==="5") {console.log(ones[num[0]] + hun[0]);console.log(ones[num[2]])}
            else if(num[2]==="6") {console.log(ones[num[0]] + hun[0]);console.log(ones[num[2]])}
            else if(num[2]==="7") {console.log(ones[num[0]] + hun[0]);console.log(ones[num[2]])}
            else if(num[2]==="8") {console.log(ones[num[0]] + hun[0]);console.log(ones[num[2]])}
            else if(num[2]==="9") {console.log(ones[num[0]] + hun[0]);console.log(ones[num[2]])}
         
        }
    
        else {
            
            if(num[0]>=1){
                console.log(ones[num[0]] + hun[0]);console.log(tens[num[1]]);console.log(ones[num[2]])
            }
        }


    }

