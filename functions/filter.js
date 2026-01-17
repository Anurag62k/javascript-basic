/*et arr=[52,99,98,54,89,98,28,92];
arr.filter((val)=>{
    if( val>90){
   console.log(val);
    } 
})*/
let n=Number(prompt("enter number"));
let arr=[];
for(let i=1;i<=n;i++){
arr[i-1]=i
}
console.log(arr);
let sum=arr.reduce((res,curr)=>{
 return res+curr;
})
console.log(sum);
let mul=arr.reduce((res,curr)=>{
 return res*curr;
})
console.log(mul);
