// dom selection over here 
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();

})
// btns 
const start_btn = document.querySelector(".quiz__start-btn .quiz_button");
const exit_btn = document.querySelector(".exit__quiz_btn");
const continue_btn = document.querySelector(".continue__quiz_btn");
const next_btn = document.querySelector(".quiz__next-btn");
const quit__quiz = document.querySelector(".quit__quiz");
const restart__quiz = document.querySelector(".restart__quiz");
// blocks
const quiz__rules = document.querySelector(".quiz__rules");
const quiz__ques = document.querySelector(".quiz__ques");
const quiz__ques_result = document.querySelector(".quiz__ques-result");
const quiz_result = document.querySelector(".quiz_result");
const option__list = document.querySelector(".option__list");
const timer = document.querySelector(".timer .time__count");
const timeline = document.querySelector(".timeline");


// If Start Button Cliked 
start_btn.addEventListener("click", () => {
    quiz__rules.classList.add("activeRulesBox");
})

// If Exit Button Clicked 
exit_btn.addEventListener("click", () => {
    quiz__rules.classList.remove("activeRulesBox");
})

// If clicked for Quit Quiz 
quit__quiz.onclick = () => {
    window.location.reload();
}

// if clicked for restart 
restart__quiz.onclick = () => {
    window.location.reload();
}


// If Continue Button Clicked 
continue_btn.addEventListener("click", () => {
    quiz__rules.classList.remove("activeRulesBox");
    quiz__ques.classList.add("activeQuestionBox");
    showQuestions(0);
    queCount(1);
    timerCounter(15)
    counterTimeLine(0)
})


// If clicked next button 
let que_count = 0;
let qCount = 1;
let counter;
let timelineWidth;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;
next_btn.onclick = () => {
    que_count++;
    qCount++;
    if (que_count <= questions.length - 1) {
        showQuestions(que_count);
        queCount(qCount);
        clearInterval(counter);
        timerCounter(timeValue)
        clearInterval(timelineWidth);
        counterTimeLine(widthValue)
        next_btn.classList.remove("activeNextBtn");

    } else {
        next_btn.innerText = "Submit Que";
        showQuizResult();
    }

}



// Function for showing Questions 
function showQuestions(index) {
    //   Question
    const quiz__question = document.querySelector(".quiz__question");
    let que_tag = `<span>${index + 1}. ${questions[index].question}</span>`;
    quiz__question.innerHTML = que_tag;
    //   Options 
    let option_tag = `<div class="option" onclick="optionSelected(this);">${questions[index].options[0]}</div>
                        <div class="option " onclick="optionSelected(this);">${questions[index].options[1]}</div>
                        <div class="option" onclick="optionSelected(this);">${questions[index].options[2]}</div>
                        <div class="option" onclick="optionSelected(this);">${questions[index].options[3]}</div>`;
    option__list.innerHTML = option_tag;

};

let tickicon = '<span class="tick"><i class="fa fa-check-circle"></i></span>';
let crossicon = '<span class="cross"><i class="fa fa-times-circle"></i></span>';
// Get Correct Answer 
function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option__list.children.length;

    next_btn.classList.add("activeNextBtn");
    clearInterval(counter);
    clearInterval(timelineWidth);

    if (userAns == correctAns) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickicon);
    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossicon);

        for (let i = 0; i < allOptions; i++) {
            if (option__list.children[i].textContent == correctAns) {
                option__list.children[i].setAttribute("class", "option correct");
                option__list.children[i].insertAdjacentHTML("beforeend", tickicon);
            }
        }
    }
    for (let i = 0; i < allOptions; i++) {
        option__list.children[i].classList.add("disabled")
    }

}

// Timer Counter 
function timerCounter(time) {
    counter = setInterval(setTime, 1000);

    function setTime() {
        if (time <= 1) {
            clearInterval(counter);
            document.querySelector(".time__text").innerText = "Time Off";
            next_btn.classList.add("activeNextBtn");
            timer.innerHTML = "0";
            let allOptions = option__list.children.length;
            let correctAns = questions[que_count].answer;
            for (let i = 0; i < allOptions; i++) {
                if (option__list.children[i].textContent === correctAns) {
                    option__list.children[i].classList.add("correct");
                    option__list.children[i].insertAdjacentHTML("beforeend", tickicon)
                }
            }
        } else {
            time--;
            timer.innerHTML = time;
        }
        if (time < 10) {
            let timeContent = timer.textContent;
            timer.innerHTML = "0" + timeContent;
        }
    }
}

// Timer with timeline Counter 
function counterTimeLine(timer) {
    timelineWidth = setInterval(WidthTimeline, 29);

    function WidthTimeline() {
        timer += 1;
        timeline.style.width = timer + "px";
        if (timer > 500) {
            clearInterval(timelineWidth);
        }

    }
}

// Show QUiz Result 
function showQuizResult() {
    quiz__ques.classList.remove("activeQuestionBox");
    quiz__ques_result.classList.add("activeQuizResult");

    if (userScore < questions.length / 2) {
        const result_tag = `<p>You need improve skills ): <br> Nice, You got <span class="got_ques">${userScore}</span> Of <span class="total__ques">${questions.length}</span></p>`;
        document.querySelector(".quiz__emoji i").classList.add("fa-sad-tear");
        quiz_result.innerHTML = result_tag;

    } else if (userScore >= questions.length / 2) {
        const result_tag = `<p>You have done quiz (: <br> and Congrats!, You got <span class="got_ques">${userScore}</span> Of <span class="total__ques">${questions.length}</span></p>`;
        document.querySelector(".quiz__emoji i").classList.remove("fa-sad-tear");
        quiz_result.innerHTML = result_tag;

    } else if (userScore === questions.length) {
        const result_tag = `<p>Your genious (; <br> and Weldone!, You got <span class="got_ques">${userScore}</span> Of <span class="total__ques">${questions.length}</span></p>`;
        quiz_result.innerHTML = result_tag;

    } else {
        const result_tag = `<p>It's something wrong ):</p>`;
        quiz_result.innerHTML = result_tag;

    }

}


// Question Count 
function queCount(index) {
    let quiz__ques_counter = document.querySelector(".quiz__ques_counter");
    let quiz__ques_counter_tag = ` <p><span>${index}</span> of <span>${questions.length}</span> Questions</p>`;
    quiz__ques_counter.innerHTML = quiz__ques_counter_tag;
}