let but=document.querySelector("#button");
let mode="light";
but.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else{
        mode="light";
         document.querySelector("body").classList.add("light")
        document.querySelector("body").classList.remove("dark");
    };
console.log(mode);

})
