//page selector
const page1btn = document.querySelector("#pageWhite");
const page2btn = document.querySelector("#pageBlack");
const page3btn = document.querySelector("#speedQuiz");
const cont1 = document.querySelector("#c1");
const cont2 = document.querySelector("#c2");
const cont3 = document.querySelector("#c3");

const playerHAT = new Audio("./audio/hat.mp3");
const playerTOM = new Audio("./audio/tom.mp3");

function initHide()
{
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
}



//listen for clicks
page1btn.addEventListener("click", function ()
{
    initHide(); //reset display
    cont1.style.display="block";
    playerHAT.load();
    playerHAT.play();
});
page2btn.addEventListener("click", function ()
{
    initHide();
    cont2.style.display="block";
    playerHAT.load();
    playerHAT.play();
});
page3btn.addEventListener("click", function ()
{
    initHide();
    cont3.style.display="block";
    playerHAT.load();
    playerHAT.play();
});
initHide(); //call hideall function to hide all pages

//quiz
quizImage = document.getElementById("quizImg");
quizText = document.getElementById("quizName");
correctAmt = document.getElementById("correctTally");
timer = document.getElementById("quizTimer");
correctBtn = document.getElementById("quizCorrect");
wrongBtn = document.getElementById("quizWrong");

var timerSeconds = 0;
var correctVar = 0;

var timerInterval = null;
var isTimerRunning = false;

const openingNames = ["Zukertort", "English", "King's Fianchetto", "Sicilian Defence", "Caro Kann", "French", "Indian Game"];
const quizImageDisplay = ["images/Nf3.jpg", "images/c4.jpg", "images/g3.jpg", "images/e4c5.jpg", "images/e4c6.jpg", "images/e4e6.jpg", "images/d4Nf6.jpg"];

var displayedOpening;
var randomOption;
var isCorrectName;

var isGameEnded = false;

function randomise()
{
    if (!isGameEnded)
    {
        displayedOpening = Math.floor(Math.random() * 7);
        randomOption = Math.floor(Math.random() * 6.57);
        isCorrectName = Math.floor(Math.random() * 2);

        quizText.innerHTML = openingNames[displayedOpening];
        if (isCorrectName)
        {
            quizImage.src = quizImageDisplay[displayedOpening];
        }
        else
        {
            quizImage.src = quizImageDisplay[randomOption];
        }
    }
    else
    {
        quizImage.src = "Images/quizStandby.jpg";
    }
}

function checkValidity(verdict)
{
    if ((isCorrectName || randomOption == displayedOpening) && verdict == "c")
    {
        if (verdict == "c")
        {
            correct();
        }
        else
        {
            wrong();
        }
    }
    else
    {
        if (verdict != "c")
        {
            correct();
        }
        else
        {
            wrong();
        }
    }
}

correctBtn.addEventListener("click", function ()
{
    if (!isGameEnded)
    {
        startTimer();
        checkValidity("c");
        randomise();
    }
    else
    {
        isGameEnded = false;
        clearInterval(timerInterval);
        timerSeconds = 0;
        timer.innerHTML = "00";
        correctVar = 0;
        correctAmt.innerHTML = "0/5";
        randomise();
    }
});

wrongBtn.addEventListener("click", function ()
{
    if (!isGameEnded)
    {
        startTimer();
        checkValidity("w");
        randomise();
    }
    else
    {
        isGameEnded = false;
        clearInterval(timerInterval);
        timerSeconds = 0;
        timer.innerHTML = "00";
        correctVar = 0;
        correctAmt.innerHTML = "0/5";
        randomise();
    }
});

function correct()
{
    playerHAT.load();
    playerHAT.play();
    correctVar++;
    correctAmt.innerHTML = correctVar+"/5";
    correctAmt.style.color = "greenyellow";
    if (correctVar >= 5)
    {
        endGame();
    }
}

function wrong()
{
    playerTOM.load();
    playerTOM.play();
    correctAmt.style.color = "red";
}

function endGame()
{
    isGameEnded = true;
    quizText.innerHTML = "Click either button to retry";
    isTimerRunning = false;
    clearInterval(timerInterval);
    timer.style.color = "greenyellow";
}

function startTimer()
{
    if (!isTimerRunning)
    {
        isTimerRunning = true;
        timerInterval = setInterval(function ()
        { //basically add a second to the timer every second
            //and also a ternary operator to handle the cosmetic 0
            timerSeconds++;
            timer.innerHTML = timerSeconds < 10 ? "0" + timerSeconds : timerSeconds;
        }, 1000);
    }
}

randomise();