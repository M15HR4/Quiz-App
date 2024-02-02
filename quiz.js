const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "React",
    correct: "a",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1994",
    c: "1995",
    d: "1993",
    correct: "c",
  },
  {
    que: "Which does CSS stand for?",
    a: "Hypertext Markup language",
    b: "Cascading style sheet",
    c: "Jason object Notation",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".options");

const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};


const getAnswer = () => {
  let answer;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

 

const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};



const endQuiz = () => {
  document.getElementById(
    "box"
  ).innerHTML = `<div style="text-align:center">
  <h3>Thank you for playing the quiz</h3>
  <h2>${right} / ${total} are correct </h2>
  </div>`
 
}



loadQuestion();
