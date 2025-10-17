let string1="apple";
let array1=[]
for(let i=0;i<string1.length;i++){
    
    if(string1[i]!=string1[i+1]){
        // console.log(string1[i])
        array1.push(string1[i]);
        array1.push(string1[i+1]);
        array1.pop(string1[i+1]);
    }
}
console.log(array1)
let string2=array1.toString();
let string3=string2.replaceAll(",","");
console.log(string3);