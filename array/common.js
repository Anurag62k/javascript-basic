let num1=prompt("enter size of an arrar");
console.log("size of array is:",num1);
let arr=[],temp=[];
for(let i=0;i<num1;i++){
    arr[i]=prompt("enter elements of array:")
}
console.log("elements of array are:",arr);

let num2=prompt("enter size of an arrar");
console.log("size of array is:",num2);
for(let i=0;i<num2;i++){
    temp[i]=prompt("enter elements of array:")
}
console.log("elements of array are:",temp);
let common=[];
for(let i=0;i<num1;i++){
    for(let j=0;j<num2;j++){
    if(arr[i]==temp[j]){
  common.push(arr[i]);
    }
}
}
console.log("common elements are:",common);