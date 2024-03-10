let boxes = document.querySelectorAll(".box")
let mainBox = document.querySelector(".boxs")
let reset_btn = document.querySelector(".reset_btn")
let massege = document.querySelector(".message")
let start_btn = document.querySelector(".start_btn")
let msg_para = document.querySelector(".msg_para")


let turnO = true

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const resetGame = () =>{
    turnO = true
    enableBoxes()
    massege.classList.add("hide")

}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O"
            box.classList.add("ocolor")
            turnO = false
        }else{
            box.innerText = "X"
            box.classList.add("xcolor")
            turnO = true
        }
       box.disabled = true

       checkWinner()
    })

})

const enableBoxes = ()  =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}
const disableBoxes = ()  =>{
    for(let box of boxes){
        box.disabled = true
    }
}

const showWinner = (winner) => {
    msg_para.innerText = `Congratulations\n Winner is ${winner}`
    massege.classList.remove("hide")
    disableBoxes()
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
               showWinner(pos1Val)
            }
        }
      
}
}

start_btn.addEventListener("click", resetGame)
reset_btn.addEventListener("click", resetGame)