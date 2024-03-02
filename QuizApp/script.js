 const questions = [
    {
        question : "What's your girlfriend birth date ?",
        answers :[
            {text: "May 28", correct:false},
            {text: "June 24", correct:true},
            {text: "August 26", correct:false},
            {text: "September 07", correct:false},
        ]
    },
    {
        question : "When does your anniversary happen?",
        answers :[
            {text: "November 04", correct:false},
            {text: "November 07", correct:false},
            {text: "December 07", correct:false},
            {text: "December 09", correct:true},
            
        ]
    },
    {
        question : "Which does your first meet-up anniversary happen ?",
        answers :[
            {text: "January 21", correct:true},
            {text: "January 23", correct:false},
            {text: "January 05", correct:false},
            {text: "December 15", correct:false},
        ]
    },
    {
        question : "Who is/are your girlfriend's crush ?",
        answers :[
            {text: "Lee Min Hoo", correct:false},
            {text: "Kim Woo Bin", correct:false},
            {text: "Lin Yi", correct:false},
            {text: "All of the above", correct:true},
        ]
    },
    
 ];

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex=0;
 let score = 0;

 function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
 }
 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "  +  currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click", selectAnswer);
    });
}
    function resetState(){
        nextButton.style.display="none";
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
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled ="true"
    });
    nextButton.style.display = "block";
 }
 function showScore(){
    resetState();
    questionElement.innerHTML =`You've scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
    
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
 startQuiz();

