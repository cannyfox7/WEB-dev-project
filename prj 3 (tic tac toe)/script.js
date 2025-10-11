var boxes= document.querySelectorAll(".box");
var reset= document.querySelector("#reset");
var newgamebutton= document.querySelector("#new-game");
var msg= document.querySelector("#msg");
var msgcontainer= document.querySelector(".msgcontainer");
var turnO= true;

var win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((element) => {
    element.addEventListener("click", function(){
        console.log("clicked");
        if(turnO){
            element.innerText="O";
            turnO=false;
        }else{
            element.innerText="X";
            turnO=true;
        }
        element.style.pointerEvents="none";

        checkWin();
    });
});        

    const resetgame=()=>{
        turnO=true;
        enableboxes();
        msgcontainer.classList.add("hide");

    }
    const diableboxes=()=>{
        boxes.forEach((element)=>{
            element.style.pointerEvents="none";
        });}

    const enableboxes=()=>{
        boxes.forEach((element)=>{
            element.style.pointerEvents="auto";
            element.innerText="";
            
        });
    }

    function showwinner(winner){
        msg.innerHTML=`<h1>${winner} is the winner</h1>`;
        msgcontainer.classList.remove("hide");
        diableboxes();
    

};




function checkWin(){
    for(let pattern of win){
        let pos1value=boxes[pattern[0]].innerText;
        let pos2value=boxes[pattern[1]].innerText;
        let pos3value=boxes[pattern[2]].innerText;

        if(pos1value!="" && pos2value!="" && pos3value!=""){
            if(pos1value==pos2value && pos2value==pos3value){
              console.log(pos1value+" is the winner");
                showwinner(pos1value);
            }
        }
    }
}
    
newgamebutton.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
