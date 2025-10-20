function reverseWords(sentence){
    let words=sentence.split(' ');
    let joined=""
    for(let i=words.length-1;i>=0;i--){
        // console.log(words[i]);
        joined=joined +' ' +words[i]
    }
    console.log(joined)
}
reverseWords("I love dogs")