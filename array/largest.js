let num=prompt("enter the size of an array")
let arr=[];
for(let i=0;i<num;i++){
 arr[i]=prompt("enter element");
}
console.log(arr);
let max=arr[0];
for(let i=0;i<num;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    
}
console.log("largest element is:",max);