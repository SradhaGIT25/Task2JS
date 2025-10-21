function printPattern(n){
    let asciiVal=String.fromCharCode(65,66,67,68,69).split('');
    console.log(asciiVal)
    for(let i=0;i<n;i++){
        let str=""
        for(let j=0;j<=i;j++){
            str=str+asciiVal[i]+' '
        }
        console.log(str);
    }
}
printPattern(5)

