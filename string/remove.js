let word=prompt("enter the word");
console.log(word);
let result="";
for(let i=0;i<word.length;i++){
  if(word[i]!=" "){
 result+=word[i];
}
}
console.log("string wirhout spaces:",result);