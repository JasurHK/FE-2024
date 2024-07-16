let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget= ()=>{
  return Math.floor(Math.random() * 9) + 1;
};

const compareGuesses= (humanG , computerG , secretTNG)=>{
  let humanScore = Math.abs(humanG - secretTNG);
  let computerScore = Math.abs(computerG - secretTNG);
  if(computerScore >= humanScore){
    return true ;
  }
  else{
    return false ;
  };
};

const updateScore=(winner)=>{
  if(winner === 'human'){
    humanScore +=1
  }
  else{
    computerScore +=1
  };
};


const advanceRound= ()=>{
  currentRoundNumber +=1
}