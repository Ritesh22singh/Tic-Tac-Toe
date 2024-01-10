let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgDiv = document.querySelector(".msg-class");
let resetBtn = document.querySelector(".reset-btn");

let playerTurn0 = true;  // player0   playerX

let winningPattern = [
    [0,1,2], [2,4,6], [6,7,8],
    [0,3,6], [1,4,7], [3,4,5],
    [0,4,8], [2,5,8]

    // Here we store our game winning pattern
];




boxes.forEach((box) =>{
    box.addEventListener(("click"), () =>{
        console.log("box was clicked");
        if(playerTurn0)
        {
            
            box.innerText = "O";
            playerTurn0 = false;  

            /*
            In Here we are checking whose turn,
            printing 'O' by using DOM
            then we have to change turn for player 2 --> playerTurn = false
            */
        }

        else{
            
            box.innerText = "X";
            playerTurn0 = true;

            /*
            In Here we are checking whose turn,
            printing 'X' by using DOM
            then we have to change turn for player 2 --> playerTurn = true
            */
        }

        box.disabled = true;  // This code will make sure after clicked button u can't click button again to to cheange value

        checkWinner();
    })

})


const checkWinner = () => {
    for(let  winptn of winningPattern)
    {
        // console.log(winptn);
        // console.log(winptn[0],winptn[1],winptn[2]);
        // console.log(
        //     boxes[winptn[0]].innerText,   // this is position 1 --> what value in 1st ==> O/X
        //     boxes[winptn[1]].innerText,   // this is position 2 --> what value in 2nd ==> O/X
        //     boxes[winptn[2]].innerText    // this is postion 3 --> what value in 3rd ==> O/X


        //     );  // Here we are fetching the what value in button

            let pos1val = boxes[winptn[0]].innerText;
            let pos2val = boxes[winptn[1]].innerText;
            let pos3val = boxes[winptn[2]].innerText;

            if(pos1val !=="" && pos2val !== "" && pos3val !=="")
            {
                if(pos1val === pos2val && pos2val === pos3val)
                {
                    resultWinner(pos1val);
                }
            }

            

    }
};


const resultWinner =(pos1val) =>{
    console.log(`Winner is ${pos1val}`);
    msgDiv.classList.remove ("hide");
    msgDiv.innerText = `Congratutation, Winner is Player : ${pos1val}` ;
    diableBtn();
} ;

const diableBtn = () => {
    for(let btn of boxes)
    {
        btn.disabled = true;
    }
};

const enableBtn = () => {
    for(let btn of boxes)
    {
        btn.disabled = false;
        btn.innerText = "";
    }
};

const resetGame = () => {
    playerTurn0 = true;
    msgDiv.classList.add("hide");
    enableBtn();
};

resetBtn.addEventListener("click" , resetGame);

