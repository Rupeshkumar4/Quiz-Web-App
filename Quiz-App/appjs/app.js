// Question List
const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
// variables
let index = 0;
let correct = 0, // no of correct ans given by user.
    incorrect = 0, // no of incorrect ans given by user.
    total = quizData.length; // Total no of Questions

let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset() // After each next question reload, it donot show select option from previous.
const data = quizData[index]

questionBox.innerHTML = `${index + 1}) ${data.question}` // To print question no. ==>(back tick)
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
// Function to check ans is correct or not.
function() {
    const data = quizData[index] // Taking html or question data 
    const ans = getAnswer()
    if (ans === data.correct) { // check user ans === correct option or not.
        correct++;
    } else {
        incorrect++;
    }
    index++; // Go to next question
    loadQuestion() // loading site so it display next question.
}
)
// Arrow function to check which option is selected.
const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) { // input.checked check which option is selected or whic option is not selected.
            ans = inputEl.value;
        }
    }
)
return ans;
}

// Taking all option and mark checked as un checked
const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h2 class="w-100"> Hii, you've scored ${correct} / ${total} </h2>
    </div>
`
}
// inital its load the question of index=0. next load question based on index.
loadQuestion(index);