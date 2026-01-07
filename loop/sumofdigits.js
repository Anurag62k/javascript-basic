let num=prompt("enter the number");
console.log(num)
let sum=0,digits;
while(num>0){
digits=num%10;
sum=sum+digits;
num=Math.floor(num/10);
}
console.log(sum);