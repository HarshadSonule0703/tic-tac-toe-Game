let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");

let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let count = 0;


let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        count++;
        if(count >= 9){
            msg.innerText = "It is a Draww!";
            msgContainer.classList.remove("hide");
            disableBoxes();
            
        }
      
        if(turnO){
            box.innerText = "O";
            turnO  = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        cheakwinner();
    });
});

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
        
    }
}

const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";

        
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is: ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const cheakwinner = () =>{
    for( pattern of winPatterns){
    
            let pos1Value = boxes[pattern[0]].innerText;
            let pos2Value = boxes[pattern[1]].innerText;
            let pos3Value = boxes[pattern[2]].innerText;


            if(pos1Value != "" && pos2Value != "" && pos3Value != ""){

                if(pos1Value === pos2Value && pos2Value === pos3Value){
                    console.log("Winner is: " + pos1Value);
                    showWinner(pos1Value);
                }
            }

    }
    
}


newbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


