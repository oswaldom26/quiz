const QUESTIONS = [
  {
    text: 'Какой фрукт считается источником витамина C?',
    answers: ['Банан', 'Апельсин', 'Груша', 'Арбуз'],
    rightIndex: 1,   
  },
  {
    text: 'Какое из этих чисел является простым?',
    answers: ['37', '25', '42', '50'],
    rightIndex: 0,
  },
];

const SCREENS_NODES = document.querySelectorAll('.screen');
const ANSWER_NODES = document.querySelectorAll('.answer');
const START_GAME_BUTTONS = document.querySelectorAll('.start-game');
const MONEY_NODES = document.querySelectorAll('.money');
const PRIZE_FOR_RIGHT_ANSWER = 5000;
const HIGHLIGHT_TIMEOUT_MS = 1500;

let activeQuestionIndex = 0;
let money = 0;

START_GAME_BUTTONS.forEach(button => {
  button.addEventListener('click', startNewGame)
})

function startNewGame() {
  // переход на экран с викториной
  // переход к 1 вопросу
  // обнуление очков
  showScreen(1);
}

function showScreen(index) {
  SCREENS_NODES.forEach((screen, i)=>{
    screen.classlist.toggle('visible', i === index);
  })
}
