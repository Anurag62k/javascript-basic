let word=prompt("enter the word");
console.log(word);
let occur=prompt("enter the letter to check the occurence");
let count=0;
for(let i=0;i<word.length;i++){
if(word[i]==occur){
    count++;
}
}
console.log(count);