let word=prompt("enter the string");
let str1=['a','e','i','o','u','A','E','I','O','U'];
let countvowel=0;
/*function str(word){
 for(let i=0;i<word.length;i++){
    let ch=word[i];
    if(str1.includes(ch)){
     countvowel++;
    }
 }
 
}
str(word);
console.log(countvowel);*/
const str=(word)=>{
    for(let i=0;i<word.length;i++){
    let ch=word[i];
    if(str1.includes(ch)){
     countvowel++;
    }
 }
}
str(word);
console.log(countvowel);