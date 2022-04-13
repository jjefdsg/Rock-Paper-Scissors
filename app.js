let choices = document.querySelectorAll('.choices');
let score = document.getElementById('score');
let results = document.getElementById('result')
let restart = document.getElementById('restart')
let modal = document.querySelector('.modal')

let scoreboard = {
    player: 0,
    computer: 0    
}
//play game
function play(e){
    restart.style.display = 'inline-block';
    const botChoice = bot();
    const playerChoice = e.target.id;
    const winner = getWinner(playerChoice,botChoice);
    showWinner(winner, botChoice);
}



//GET gAME WINNER
function getWinner(p, c){
    if((p === 'rock' && c === 'scissors') || (p === 'paper' && c === 'rock') || (p === 'scissors' && c === 'rock')){
        return 'YOu WON'
    }else if(p === c){
        return 'Draw'
    }else{
        return 'you lose'
    }

}

//show winner
function showWinner(winner, botChoice){
    if(winner === 'player') {
    scoreboard.player++;

    results.innerHTML =`
    <h1 class="text-win">You Win</h1>
    <i class="fas fa-hand-${botChoice} fa-10x"></i>
    <p>Computer chose <strong>${botChoice}</strong></p>
    `;
    }else if(winner === 'bot'){
        scoreboard.computer++;
        //show modal result
         results.innerHTML = 
        `<h1 class="text-win">You Lose</h1>
        <i class="fas fa-hand-${botChoice} fa-10x"></i>
        <p>Computer chose <strong>${botChoice}</strong></p>
        `;
    }else{
        results.innerHTML =
        `<h1>Its A DRAW</h1>
         <i class="fas fa-hand-${botChoice} fa-10x"></i>
         <p>Computer chose <strong>${botChoice}</strong></p>`
    }

    // show score
score.innerHTML = `
<p>Player: ${scoreboard.player}</p>
<p>Computer: ${scoreboard.computer}</p>
`;
modal.style.display = 'block'
}
function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }

}


//event listener
choices.forEach(choice => choice.addEventListener('click',play));

//bots choice
function bot(){
    let random = Math.random()
    if(random < 0.34){
        return('rock')
    }else if(random <= 0.67){
        return ('paper')
    }else{
        return ('scissors')
    }
}


 