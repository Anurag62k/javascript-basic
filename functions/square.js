let arr=[25,12,41,2];
/*arr.forEach((val)=>{
    console.log(val*val);
})*/
/*let newarr=arr.map((val)=>{
console.log(val*2);
})
*/
/*let evenarr=arr.filter((val)=>{
    if(val%2==0){
        return val;
    }
})
console.log(evenarr);*/
const output=arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(output);