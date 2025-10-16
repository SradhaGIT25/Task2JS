let string="Hello world"
let string1=string.split(" ");
for(let i=0;i<=string1.length-1;i++){
    for(let j=string1[i].length-1;j>=0;j--){
    console.log(string1[i][j]);
}
}