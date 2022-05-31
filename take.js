
var quizArray = [];
var titleOfQuizArray = [];
var timer;

function takeQuiz(){
    let getQuiz = localStorage.getItem("myQuiz");
    let getTitle = localStorage.getItem("quizTitle");
    quizArray = JSON.parse(getQuiz);
    titleOfQuizArray = JSON.parse(getTitle);

    loadQuiz();
    loadTitle();
}

function loadQuiz(){
    let quizContents = "";
    let i;
    for(i = 0; i < quizArray.length; i++){
        quizContents += `<div class="p-3 mb-1"><div class="mb-1">${quizArray[i].this}</div><div><ol type="A"><li><input type="radio" name="o${i}"> ${quizArray[i].thatOne}</li><li><input type="radio" name="o${i}"> ${quizArray[i].thatTwo}</li><li><input type="radio" name="o${i}"> ${quizArray[i].thatThree}</li><li><input type="radio" name="o${i}"> ${quizArray[i].thatFour}</li></ol></div></div>`;
       
    }
        document.getElementById('div5').innerHTML = quizContents;
}

function loadTitle(){
    let quizTag = "";
    let i;
    for(i = 0; i < titleOfQuizArray.length; i++){
        quizTag += `${titleOfQuizArray[i].name}`;
    }
    document.getElementById('div4').innerHTML = quizTag;
}

function callDuration(){
    timer = setInterval(countDown, 1000);
}


function countDown(){
    let sec = secondsSpan.innerHTML;
    let min = minuteSpan.innerHTML;
    if(sec == 00 && min > 0){
        sec = 60;
        min -= 1;
    }
    sec -= 1;
    // secondsSpan.innerHTML = sec > 9 ? sec : "0"+sec;
    if(sec < 10){
        secondsSpan.innerHTML = "0"+sec
    }else if(sec < 1){
        secondsSpan.innerHTML = 00
    }else{
        secondsSpan.innerHTML = sec;
    }

    if(min < 1 && sec <= 30){
        document.getElementById('secondsSpan').style.color = "red";
        document.getElementById('minuteSpan').style.color = "red";
    }
    minuteSpan.innerHTML = min;
}

function callSubmit(){
    setTimeout(submitQuiz, 60 * 1000)
}

function submitQuiz(){
    let correctAnswers = 0;
    let i;
    for(i = 0; i < quizArray.length; i++){
        if(quizArray[i].thatThree){
            correctAnswers += 1
        }
    }

    alert("Your score is: " + correctAnswers);
}