let number=0;
let array2=[];
let trimmed="";
let value="";
let array1=[[1,2,3],[0,7]];
for(let i=0;i<=array1.length-1;i++){
    console.log(array1[i]);
    value=array1[i].toString();
    console.log(value);
    trimmed=value.replaceAll(",","");
    console.log(trimmed);
    number=Number(trimmed);
    console.log(number);
    array2.push(number);

}
console.log(array2);
let sum=0;
for(let j=0;j<=array2.length-1;j++){
    console.log(array2[j]);
    sum=sum+array2[j];
}
console.log(sum);