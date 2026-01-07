let num=prompt("enter the number");
console.log(num);
let temp=num;
let reverse=0;
let digit;
while(temp>0){
    digit=temp%10;
    reverse=reverse*10+digit;
    temp=Math.floor(temp/10);
   
}
console.log("reversed number is:",reverse);
if(reverse==num){
    console.log("given number is a palindrrome number");
   }
   else{
    console.log(" given number is not palindrome");
   }