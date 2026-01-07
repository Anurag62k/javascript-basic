let num=prompt("enter the number");
console.log(num)
let reverse=0;
let digit;
while(num>0){
    digit=num%10;
    reverse=reverse*10+digit;
    num=Math.floor(num/10);
}
console.log("reversed number is",reverse);