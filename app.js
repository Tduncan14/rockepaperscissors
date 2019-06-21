
const choices = document.querySelectorAll('.choice');

const score = document.getElementById('score');
const result = document.getElementById('result');


const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

window.addEventListener('click',clearModal);


const scoreboard = {
    player:0,
    computer:0
}


// Play game

function play(e){
    restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();

//   console.log(playerChoice," computer choice :", computerChoice)


 const winner = getWinner(playerChoice, computerChoice);


 showWinner(winner,computerChoice);
}


// Get computer chocie

function getComputerChoice(){
    const rand = Math.random();

    if(rand < 0.34){
        return 'rock';
    }
    else if (rand <= 0.67){
        return 'paper';
    }
    else{
        return 'scissors';
    }


}




// choose the winner function
function getWinner(p,c){


    if(p === c){
        return 'draw'
    }

    else if(p ==='rock'){

        if (c === 'paper') {

            return'computer';
            
        }
        else{
            return 'player';
        }
    }

    else if(p === 'paper'){

        if(c === 'scissors'){
            return "computer";
        }

        else{
            return 'player';
        }
    }

    else if(p === 'scissors'){
        
        if( c === 'rock') {
            return 'computer';
        }

        else{
            return 'player';
        }
    }


}


function showWinner(winner,computerChoice){
   if(winner === 'player'){
       // increase player score
       scoreboard.player++;

       //show modal results 

       result.innerHTML = `
       <h1 class="text-win">  You Win </h1>
       <i class="fas fa-hand-${computerChoice} fa-10x"> </i>
       <p><strong> computer chose ${computerChoice} </p>`
   }

   else if(winner === 'computer'){
       // increase computer score
       scoreboard.computer++;
       // show modal results
       result.innerHTML = `
       <h1 class="text-lose"> You Lose </h1>
       <i class="fas fa-hand-${computerChoice} fa-10x"> </i>
       <p><strong> compute chose ${computerChoice} </strong> </p> `
   }

   else{
       // show modal resultes
       result.innerHTML = `
       <h1 class=""> Draw </h1>
       <i class="fas fa-hand-${computerChoice} fa-10x"> </i>
       <p><strong> computer chose ${computerChoice} </strong> </p>`
   }

    // show score
    score.innerHTML = `<p>Player: <span class="gamble"> ${scoreboard.player} </span> </p>
                       <p>Computer: ${scoreboard.computer} </p>`;


  
     modal.style.display ='block';

     gamble()
}



 function gamble(){
    let playerGame = document.querySelector('.gamble');
    
    let container = document.querySelector('.containerG')
    let gambler = document.querySelector('.gambles')


     console.log(playerGame.textContent);


     if(playerGame.textContent == 3) {
      container.style.display="block";
      gambler.style.display ="block";


      gambler.addEventListener("change",(e)=>{
          console.log(e.target.value)
      })

     }

 }


 function stakes (e){

    
 }

//clear modal

function clearModal(e){

if(e.target == modal){
    modal.style.display='';
}
}

 function restartGame() {
     
    scoreboard.player = 0;
    scoreboard.computer = 0;


    score.innerHTML = `
    <p>player: 0 </p>
    <p>computer: 0 </p>
    `;


    restart.style.display = 'none';

 }





restart.addEventListener('click',restartGame)




// Event Listeners

choices.forEach(choice =>{

    choice.addEventListener('click',play);


})