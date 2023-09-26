const questions = [
    {
        question : "Data flow diagram, regular expression and transition table can be combined to provide  _____  for functional specification of system software." ,
        answers : [
            {text: "Event table" , correct: false},
            {text: "Decision table" , correct: false},
            {text: "Finite state automata" , correct: true},
            {text: "None ff these" , correct: false},

        ]

        

    },

    { 

        question : "In object oriented design of software, objects have" ,
        answers : [
            {text: "Attributes name and operations" , correct: true},
            {text: "Attributes and name only" , correct: false},
            {text: "Operations and name only" , correct: false},
            {text: "None of these" , correct: false},

        ]

    },

    {

        question : "A new technology which provides the ability to create an artificial world and have people interact with it is called" ,
        answers : [
            {text: "Televirtuality" , correct: false},
            {text: "Alternative reality" , correct: false},
            {text: "Virtual reality" , correct: true},
            {text: "3-D reality" , correct: false},

        ]


    },

    {

        question : "To write a program that solves a given problem, a programmer" ,
        answers : [
            {text: "Debugs the program" , correct: false},
            {text: "Designs an algorithm" , correct: false},
            {text: "Codes an algorithm in a programming language" , correct: false},
            {text: "All of these" , correct: true},

        ]


    },


    {
        question : "BNF is a meta-language for" ,
        answers : [
            {text: "Shell programming" , correct: false},
            {text: "Specifying the syntax of a language" , correct: true},
            {text: "Real-time programming" , correct: false},
            {text: "Describing how program works" , correct: false},

        ]



    },

    {
        question : "Use of recursion" ,
        answers : [
            {text: "makes debugging easier" , correct: false},
            {text: "reduces execution time" , correct: false},
            {text: "makes software bug-free" , correct: false},
            {text: "enhances logical clarity and reduces code size" , correct: true},

        ]



    },

    {
        question : "Which of the following is (are) required by top-down design?" ,
        answers : [
            {text: "Modularity" , correct: false},
            {text: "Step-wise refinement" , correct: false},
            {text: "Flow charging" , correct: false},
            {text: "All of these" , correct: true},

        ]



    },
    {
        question : "If a file is to be moved from main memory to a disk, the directory file would be modified by the" ,
        answers : [
            {text: "File manager" , correct: true},
            {text: "Command processor" , correct: false},
            {text: "I/0 managers" , correct: false},
            {text: "Supervisor" , correct: false},

        ]



    },


    {
        question : "The error distribution in the case of requirement analysis is" ,
        answers : [
            {text: "10%" , correct: false},
            {text: "20%" , correct: true},
            {text: "30%" , correct: false},
            {text: "40%" , correct: false},

        ]



    },

    {
        question : "Configuration management is not concerned with" ,
        answers : [
            {text: "Choice of hardware configuration for an application" , correct: true},
            {text: "Controlling changes to the source code" , correct: false},
            {text: "Controlling documentation changes" , correct: false},
            {text: "Maintaining versions of software" , correct: false},

        ]



    }





];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score =0 ;

function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();    

}


function showQuestion(){
    resetState();

    currentQuestion = questions[currentQuestionIndex];
    questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}



function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; 
    }else{
        selectedBtn.classList.add("incorrect");
    }


    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled ="true";

        
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ' + score + ' out of ' + questions.length + '!';
    nextButton.innerHTML= "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex< questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
