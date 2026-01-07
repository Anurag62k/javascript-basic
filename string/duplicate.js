let word=prompt("enter the word");
console.log(word);
let count =0;
for(let i=0;i<word.length;i++){
    let ch=word[i]
if(word[i]==word[i+1]){
    count++;
    console.log(ch);
    console.log(count);
}
}
