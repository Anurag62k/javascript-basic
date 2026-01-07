let str=prompt("enter the string");
console.log(str);
let rev="";
for(let i=str.length-1;i>=0;i--){
   rev=rev+str[i];
}
if(rev==str){
    console.log("given string is a palindrome");
}
else{
    console.log("given string is not palindrome");
}