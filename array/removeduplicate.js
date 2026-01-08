let num=prompt("enter size of an array");
console.log("size of array is:",num);
let arr=[];
for(let i=0;i<num;i++){
    arr[i]=prompt("enter elements of array:")
}
console.log("elements of array are:",arr);
for(let i=0;i<arr.length;i++){
for(let j=i+1;j<arr.length;j++){
  if (arr[i]===arr[j]){
         arr.splice(j,1);
         j--;
  }
}
}
console.log("without duplicate element",arr);