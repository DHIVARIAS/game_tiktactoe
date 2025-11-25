let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let msgbox = document.querySelector(".msgbox");
let msg = document.querySelector("#msg");
let startgame = document.querySelector("#newgame");
let turnX = true;
const btnenable = () =>
{
    for ( let box of boxes )
    {
        box.disabled = false;
    }
}
const rst = () =>{
    
    for ( let box of boxes )
    {
        box.innerText="";
        btnenable();
        turnX = true;
        msgbox.classList.add("hide");
    }
};
startgame.addEventListener("click",rst);
resetbtn.addEventListener("click",rst);
const winnerpattern = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6]
];
const showWinner = (winner) =>
{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgbox.classList.remove("hide");
};
const btndisable = () =>
{
    for ( let box of boxes )
    {
        box.disabled = true;
    }
};
const isWinner = () =>
{
    for ( let pattern of winnerpattern )
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if ( pos1val !="" && pos2val !="" && pos3val !="" )
        {
            if ( pos1val === pos2val && pos2val === pos3val )
            {
                console.log(`winner is ${pos1val}`);
                showWinner(pos1val);
                btndisable();
            }
        }
    }
};
boxes.forEach( (box) => {
    box.addEventListener("click" , ()=>
    {
        if ( turnX )
        {
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        isWinner();
    });
});


