let buttons=document.querySelectorAll(".button");         //Accessing Document Elements
let title=document.querySelector("title");                //Accessing Document Elements
let restart=document.querySelector("#restart")              //Accessing Document Elements
let winnerDispaly=document.querySelector("#msg")           //Accessing Document Elements
let patterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]
let turnX=true;

buttons.forEach((button)=>{                                    //Main Function
    button.addEventListener("click",()=>{
    console.log("Button was clicked");
     if(turnX===true){
     button.innerText="X"
     turnX=false;
     }
     else{turnX=true;
        button.innerText="O"
     }
     button.disabled=true;
     checkWinner();
    });
});

const checkWinner=()=>{                                          //winner   
    for(let pattern of patterns){
    //     console.log(pattern[0],pattern[1],pattern[2])
    //     console.log(
    // buttons[patterns[0]].innerText,
    // buttons[patterns[1]].innerText,
    // buttons[patterns[2]].innerText)
    let position0=buttons[pattern[0]].innerText;
    let position1=buttons[pattern[1]].innerText;
    let position2=buttons[pattern[2]].innerText;

    if(position0!="" && position1!="" && position2!=""){
        if(position0===position1 && position1===position2){
            console.log("WINNER");
            showWinner(position0);
             disabled();
       }
     }
   }  
};

const showWinner=(winner)=>{
    msg.innerText=`Player"${winner}"Won the Game`;
    msg.style.display = "block"

}

let disabled=()=>{
    for(let button of buttons){
       button.disabled=true;
    }
}

const reset=()=>{                                                  //new Game
    msg.style.display = "none"
    turnX=true
    for(let button of buttons){
        button.innerText="";
    }
}


// const reset=()=> {
//     winnerDispaly.style.display = "none"; 
//     turnX = true;

//     for (let button of buttons) {
//         button.innerText = "";    
//         button.disabled = false; 
//     }
// };


restart.addEventListener("click",reset);