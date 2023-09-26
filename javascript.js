var highscore = document.querySelector(".highscore");
var back = document.querySelector(".back");
var time = document.querySelector(".time");
var title = document.querySelector(".title")
var subtitle = document.querySelector(".subtitle")
var start = document.querySelector(".start")
var button1 = document.querySelector(".button-1")
var button2 = document.querySelector(".button-2")
var button3 = document.querySelector(".button-3")
var button4 = document.querySelector(".button-4")
var highscoreList = document.querySelector(".highscore-list")

function runQuiz() {
    var secondsLeft = 60;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            inputHighScore()
        }
    }, 1000);
    highscore.setAttribute("style", "display:none;");
    title.setAttribute("style", "display:none;");
    start.setAttribute("style", "display:none;");
    time.setAttribute("style", "display:block;");
    button1.setAttribute("style", "display:block;");
    button2.setAttribute("style", "display:block;");
    button3.setAttribute("style", "display:block;");
    button4.setAttribute("style", "display:block;");
    subtitle.textContent = "In what programming language are event listeners found?";
    button1.textContent = "Javacript";
    button2.textContent = "CSS";
    button3.textContent = "HTML";
    button4.textContent = "Java";
    button1.addEventListener("click", question1True)
    button2.addEventListener("click", question1False)
    button3.addEventListener("click", question1False)
    button4.addEventListener("click", question1False)

    function question1False() {
        secondsLeft -= 15;
        question1True()
    }

    function question1True() {
        subtitle.textContent = "Which of these is not a CSS attribute?";
        button1.textContent = "font-family";
        button2.textContent = "border-right-color";
        button3.textContent = "textContent";
        button4.textContent = "color";
        button1.removeEventListener("click", question1True)
        button2.removeEventListener("click", question1False)
        button3.removeEventListener("click", question1False)
        button4.removeEventListener("click", question1False)
        button1.addEventListener("click", question2False)
        button2.addEventListener("click", question2False)
        button3.addEventListener("click", question2True)
        button4.addEventListener("click", question2False)
    }

    function question2False() {
        secondsLeft -= 15;
        question2True()
    }

    function question2True() {
        subtitle.textContent = "Where does a script element linking to a .js file go in an HTML document?";
        button1.textContent = "At the top of the parent head";
        button2.textContent = "At the bottom of the parent head";
        button3.textContent = "At the top of the parent body";
        button4.textContent = "At the bottom of the parent body";
        button1.removeEventListener("click", question2False)
        button2.removeEventListener("click", question2False)
        button3.removeEventListener("click", question2True)
        button4.removeEventListener("click", question2False)
        button1.addEventListener("click", question3False)
        button2.addEventListener("click", question3False)
        button3.addEventListener("click", question3False)
        button4.addEventListener("click", inputHighScore)
    }
    function question3False() {
        secondsLeft -= 15
        inputHighScore()

    }
    function inputHighScore() {
        button1.removeEventListener ("click", question3False)
        button2.removeEventListener ("click", question3False)
        button3.removeEventListener ("click", question3False)
        button4.removeEventListener ("click", inputHighScore)
        highscore.setAttribute("style", "display:block;");
        title.setAttribute("style", "display:block;");
        subtitle.setAttribute("style", "display:block;");
        start.setAttribute("style", "display:block;");
        time.setAttribute("style", "display:none;");
        button1.setAttribute("style", "display:none;");
        button2.setAttribute("style", "display:none;");
        button3.setAttribute("style", "display:none;");
        button4.setAttribute("style", "display:none;");
        subtitle.textContent = "When you begin the quiz, you will be prompted with a series of questions. If you answer incorrectly, you will lose 15 seconds from your 60 second timer. The end result of your timer will be your score. Click the button below to begin the quiz."
        clearInterval(timerInterval)
        var name = window.prompt("Input your name to add it as a Highscore")
        localStorage.setItem("personName", JSON.stringify(name))
        localStorage.setItem("personScore", JSON.stringify(secondsLeft))
    }

}

function showHighScores() {
    highscore.setAttribute("style", "display:none;");
    time.setAttribute("style", "display:none;");
    title.setAttribute("style", "display:none;");
    subtitle.setAttribute("style", "display:none;");
    start.setAttribute("style", "display:none;");
    button1.setAttribute("style", "display:none;");
    button2.setAttribute("style", "display:none;");
    button3.setAttribute("style", "display:none;");
    button4.setAttribute("style", "display:none;");
    highscoreList.setAttribute("style", "display:block;");
    back.setAttribute("style", "display:block;");
    var retrievedName = JSON.parse(localStorage.getItem("personName"))
    var retrievedScore = JSON.parse(localStorage.getItem("personScore"))
    if (retrievedName !== null && retrievedScore !== null) {
        highscoreList.textContent = retrievedName + " - " + retrievedScore;
    }
}

function goBack() {
    highscore.setAttribute("style", "display:block;");
    title.setAttribute("style", "display:block;");
    subtitle.setAttribute("style", "display:block;");
    start.setAttribute("style", "display:block;");
    highscoreList.setAttribute("style", "display:none;");
    back.setAttribute("style", "display:none;");
}

start.addEventListener("click", runQuiz)
highscore.addEventListener("click", showHighScores)
back.addEventListener("click", goBack)