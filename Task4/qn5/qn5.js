let string1="myFunction";
let letter="";
let string2=string1.toUpperCase();
let position=0;
let array1=[];
let string3="";
let kebabCase="";
for(let i=0;i<string1.length-1;i++){
    if(string2.includes(string1[i])){
        letter=string1[i].toLowerCase();
        position=string1.indexOf(string1[i]);
        array1=[...string1]
        array1.splice(position,1,letter);
        array1.splice(position,0,"-")
         string3=array1.toString();
         kebabCase=string3.replaceAll(",","")
        console.log(kebabCase);
    }
}