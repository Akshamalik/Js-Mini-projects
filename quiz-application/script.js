document.addEventListener('DOMContentLoaded',()=>{
    const questions=[
        {
            question:"what is capital of France",
            choices:["Paris","London","Berlin","Madrid"],
            answer:"Paris"
        },
        {
            question:"what is capital of India",
            choices:["New Delhi","London","Berlin","Madrid"],
            answer:"New Delhi"
        },
        {
            question:"what is capital of USA",
            choices:["Paris","London","Berlin","Madrid"],
            answer:"London"
        }
    ]
    const startBtn=document.getElementById("start-btn")
    const restartBtn=document.getElementById("restart-btn")
    const NextBtn=document.getElementById("next-btn")
    const questionContainer=document.getElementById("question-container")
    const questionText=document.getElementById("question-text")
    const choicesList=document.getElementById("choices-list")
    const resultContainer=document.getElementById("result-container")
    const scoreDisplay=document.getElementById("score")

    let currentQuestionIndex=0
    let score=0

    startBtn.addEventListener('click',startQuiz)
    NextBtn.addEventListener('click',()=>{
        currentQuestionIndex++
        if(currentQuestionIndex<questions.length){
            showQuestion()
        }else{
            showResult()
        }
    })
    restartBtn.addEventListener('click',()=>{
        currentQuestionIndex=0
        score=0
        resultContainer.classList.add('hidden')
        startQuiz()
    })
    function startQuiz(){
        startBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
    }

    function showQuestion(){
        NextBtn.classList.add('hidden')
        questionText.textContent=questions[currentQuestionIndex].question
        //to remove previous one
        choicesList.innerHTML=""
        questions[currentQuestionIndex].choices.forEach(choice=>{
            const li=document.createElement('li')
            li.textContent=choice
            li.addEventListener('click',()=>selectAnswer(choice))
            choicesList.appendChild(li)
        })
    }
    function selectAnswer(choice){
        const correct=questions[currentQuestionIndex].answer
        if(choice===correct){
            score++
        }
        NextBtn.classList.remove('hidden')
    }
    function showResult(){
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        scoreDisplay.textContent=`
        ${score} out of ${questions.length}
        `
    }
})

//make it more complex at unique marks for each ques