let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissors = document.getElementById("s");
for(let i=0;i< 10; i++){
    

    rock.addEventListener("click",() =>{
        
    });
}

// Computer's random move
let computerMove = () =>{
    let move = Math.floor(Math.random()*3);
    if(move == 0){
        return rock;
    }else if (move == 1){
        return paper;
    }else{
        return scissors;
    }
}
