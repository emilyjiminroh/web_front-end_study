const rangeInput = document.querySelector(".choose_range input");
const guessInput = document.querySelector(".guess_number input");
const guessForm = document.querySelector(".guess_number");
const status = document.querySelector(".result__status");
const notify = document.querySelector(".result__notify");
const HIDDEN_CLASSNAME = "hidden";

function playClick(event){
  event.preventDefault();
  const maxRange = rangeInput.value;
  const guessNum = guessInput.value;
  let randomNum = Math.floor(Math.random()*maxRange);
  // console.log(maxRange);
  // console.log(guessNum);
  // console.log(randomNum);
  status.innerText=`You chose: ${guessNum}, the machine chose: ${randomNum}.`;
  if(randomNum == guessNum){
    notify.innerText = "You Won!!";
  } else{
    notify.innerText = "You lost!!";
  }
  status.classList.remove(HIDDEN_CLASSNAME);
  notify.classList.remove(HIDDEN_CLASSNAME);
}

guessForm.addEventListener("submit",playClick);