/*function sum(x,y){
  let  s=x+y;
    return s;
}
let x=Number(prompt("enter x"));
let y=Number(prompt("enter y"));
let val=sum(x,y);
console.log(val);*/
const mul=(a,b)=> {
  let  s=a*b;
  return s;
}
let a=Number(prompt("enter a"));
let b=Number(prompt("enter b"));
let val=mul(a,b);
console.log(val);
//function parameters are like 
//local variables of function that
//has only block scope 
//higher order function:function in js which 
//takes other function as parameter or output