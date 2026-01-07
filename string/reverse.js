let str=prompt("enter the string");
console.log(str);
let rev="";
    for(let j=str.length-1;j>=0;j--){
 rev=rev+str[j];
    }
 console.log("reverse string is:",rev);