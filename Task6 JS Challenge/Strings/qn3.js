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
        console.log(array1);
    }
}
capitalize("she love dogs")



