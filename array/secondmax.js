let num=prompt("enter the size of an array")
let arr=[];
for(let i=0;i<num;i++){
 arr[i]=prompt("enter element");
}
console.log(arr);
let max=arr[0];
for(let i=0;i<num;i++){
if(max<arr[i]){
    max=arr[i];
}
}
let secmax=0;
for(let i=0;i<num;i++){
    if(secmax<arr[i]&& max!=arr[i]){
        secmax=arr[i];
    }
}
console.log("second largest element is:",secmax);