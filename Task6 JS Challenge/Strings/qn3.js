function capitalize(sentence){
    let words=sentence.split(' ');
    console.log(words)
    let array1=[...words];
    console.log(array1)
    let sentence2=""
    for(let i=0;i<words.length;i++){
        let letter=words[i]
        let lett=letter[i]
        let upper=letter[0].toUpperCase();
        console.log(upper);
        // console.log(letter[0])
        array1.splice(letter[i].charAt[0],1,0);
        console.log(array1)
        // sentence2=words.toString()
        // console.log(sentence2)
        // let removedFirstLtter=words.replace("letter[0]","upper");
        // console.log(removedFirstLtter)
    }
}
capitalize("she love dogs")



// let string1="myFunction";
// let letter="";
// let string2=string1.toUpperCase();
// let position=0;
// let array1=[];
// let string3="";
// let kebabCase="";
// for(let i=0;i<string1.length-1;i++){
//     if(string2.includes(string1[i])){
//         letter=string1[i].toLowerCase();
//         position=string1.indexOf(string1[i]);
//         array1=[...string1]
//         array1.splice(position,1,letter);
//         array1.splice(position,0,"-")
//          string3=array1.toString();
//          kebabCase=string3.replaceAll(",","")
//         console.log(kebabCase);
//     }
// }