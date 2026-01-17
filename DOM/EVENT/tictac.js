let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgame=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//playerX ,playerO;
let count=0;
const  winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turnO=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.classList.add("O");
            turnO=false;
        }
        else{
            box.innerText="X";
            box.classList.add("X");
            turnO=true;
        }
        box.disabled = true;
        count++;
        checkwinner();
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }
    });
});  
const gamedraw=()=>{
     msg.innerText = `Game was a Draw.`;
  msgcontainer.classList.remove("hide");
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
        box.classList.remove("X","O")
    }
}
const showwinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for(pattern of winpatterns){
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;
       if(pos1!="" && pos2!="" &&pos3!=""){
        if(pos1===pos2 && pos2===pos3){
             showwinner(pos1);
             return true;
        }
       }
    }
}




newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
