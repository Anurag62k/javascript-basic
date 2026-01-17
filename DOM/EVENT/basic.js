let button1=document.querySelector("#button1");
/*button1.onclick = (e) => {
    console.log(e);
console.log("btn1 was clicked");
};
let btn2=document.querySelector("#btn2");
btn2.ondblclick = () =>{
    console.log("btn2 was clicked");
}
let div=document.querySelector("div");
div.onmousemove=()=>{
    console.log("you are inside div")
}*/
button1.addEventListener("click",(evt)=>{
    console.log("button was clicked");
   console.log(evt);
    console.log("button was clicked-handler 2")
});
//if we add some event and have to delete it then proceed through this method 
const hnd2=()=>{
    console.log("button was clicked");
   console.log(evt);
    console.log("button was clicked-handler 3")
};
button1.addEventListener("click",button1);
button1.removeEventListener("click",hnd2);