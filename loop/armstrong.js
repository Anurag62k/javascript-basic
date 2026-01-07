let n=prompt("enter the number");
console.log(n);
let temp=n;
let num=0;
while(temp>0){
    let digit=temp%10;
    num= num+digit*digit*digit;
    temp=Math.floor(temp/10);
}
if(n==num){
    console.log("given number is an armstrong number");
}
else{
    console.log("given number is not an armstrong number");
}