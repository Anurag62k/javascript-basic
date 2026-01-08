let num=prompt("enter size of an array");
console.log("size of array is:",num);
let arr=[],evencount=0,oddcount=0;
for(let i=0;i<num;i++){
    arr[i]=prompt("enter elements of array:")
}
console.log("elements of array are:",arr);
for(let i=0;i<num;i++){
    if(arr[i]%2==0){
        evencount++;
    }
    else{
        oddcount++;
    }
}
console .log("even count is:",evencount);
console .log("odd count is:",oddcount);
