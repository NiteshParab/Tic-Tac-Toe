let boxes=document.querySelectorAll(".boxes");
let winner=document.querySelector(".winner");
let reset=document.querySelector(".reset-btn");
let newGame=document.querySelector(".newGame-btn");

let turnO=true;

const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];


for(let box of boxes){
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }

        box.disabled=true;

        checkWinner();
        
    }) 
}



const checkWinner=(()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log()
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        // console.log()
        let pos1Val=boxes[pattern[0]].innerText;
        console.log(pos1Val)
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;  

        if(pos1Val!="",pos2Val!="",pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                winner.classList.remove("hide");
                winner.innerText=`Congratulations! winner ${pos1Val}`;
                disabledBoxes();
    
            }
        }
    }
    
});

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

reset.addEventListener('click',()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    winner.classList.add("hide");
})

newGame.addEventListener('click',()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    winner.classList.add("hide");
})