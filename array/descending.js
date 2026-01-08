let num=prompt("enter size of an array");
console.log("size of array is:",num);
let arr=[];
for(let i=0;i<num;i++){
    arr[i]=prompt("enter elements of array:")
}
console.log("elements of array are:",arr);
for(let i=0;i<num;i++){
for(let j=i+1;j<num;j++){
    if(arr[i]<arr[j]){
let temp=arr[j];
arr[j]=arr[i];
arr[i]=temp;
    }
}
}
console.log("array in descending order:",arr);