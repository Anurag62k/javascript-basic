let divs=document.querySelector("div");
let curr="this is a div";
divs.addEventListener("mousemove",()=>{
if(curr==="this is a div"){
    curr="hello world";
   divs.classList.add("red");
    divs.classList.remove("green");

}
else{
    curr="this is a div"
   divs.classList.add("green");
   divs.classList.remove("red");
}
console.log(curr);
});