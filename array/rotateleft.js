let num=prompt("enter the size of an array")
let arr=[];
for(let i=0;i<num;i++){
 arr[i]=prompt("enter element");
}
console.log(arr);

let k=prompt("enter position to rotate by:")
k=k%num;
for(let r=0;r<k;r++){
    let first=arr[0];
for(let i=0;i<num;i++){
arr[i]=arr[i+1];}
arr[num-1]=first;
}

console.log(arr);