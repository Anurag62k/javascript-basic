let num=prompt("enter size of an array");
console.log("size of array is:",num);
let arr=[],arr1=[],arr2=[];
for(let i=0;i<num;i++){
    arr[i]=prompt("enter elements of array:")
}
console.log("elements of array are:",arr);
for(let i=0;i<arr.length;i++){
if(arr[i]%2==0){
 arr1.push(arr[i]);
}
else{
    arr2.push(arr[i]);
}
}
console.log("even number elements are:",arr1);
console.log("odd number elements are:",arr2);