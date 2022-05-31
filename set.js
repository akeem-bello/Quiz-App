var quizArray = [];
var titleOfQuizArray = [];

function addQuiz(){
    var questions = document.getElementById("question").value;
    var optionOne = document.getElementById("optionA").value;
    var optionTwo = document.getElementById("optionB").value;
    var optionThree = document.getElementById("optionC").value;
    var optionFour = document.getElementById("optionD").value;
    var nameOfQuiz = document.getElementById("quizName").value;
    let quiz = {this: questions, thatOne: optionOne, thatTwo: optionTwo, thatThree: optionThree, thatFour: optionFour};
    let title = {name : nameOfQuiz};
    quizArray.push(quiz);
    titleOfQuizArray.push(title);
    document.getElementById("question").value = "";
    document.getElementById("optionA").value = "";
    document.getElementById("optionB").value = "";
    document.getElementById("optionC").value = "";
    document.getElementById("optionD").value = "";
    document.getElementById("quizName").value = "";
    
    showQuiz();
    showTitle();
    updateLocalStorage();
}

function showQuiz(){
    let quizOptions = "";
    let i;
    for(i = 0; i < quizArray.length; i++){
        quizOptions += `<div class="p-3 mb-1"><div class="mb-1">${quizArray[i].this}</div><div><ol type="A"><li><input type="radio" name="o${i}"> ${quizArray[i].thatOne}</li><li><input type="radio" name="o${i}"> ${quizArray[i].thatTwo}</li><li><input type="radio" name="o${i}"> ${quizArray[i].thatThree}</li><li><input type="radio" name="o${i}"> ${quizArray[i].thatFour}</li></ol></div></div>`;
       
    }
        document.getElementById('quizDiv').innerHTML = quizOptions;
}

function showTitle(){
    let quizLabel = "";
    let i;
    for(i = 0; i < titleOfQuizArray.length; i++){
        quizLabel += `${titleOfQuizArray[i].name}`;
    }
    document.getElementById('div6').innerHTML = quizLabel;
}

function updateLocalStorage(){
    localStorage.setItem("myQuiz", JSON.stringify(quizArray));
    localStorage.setItem("quizTitle", JSON.stringify(titleOfQuizArray));
}

function getCurrentQuiz(){
    let localQuiz = localStorage.getItem("myQuiz");
    let localTitle = localStorage.getItem("quizTitle");
    quizArray = JSON.parse(localQuiz);
    titleOfQuizArray = JSON.parse(localTitle);
    showQuiz();
    showTitle();
}

function clearQuiz(){
    quizArray.length = 0;
    titleOfQuizArray.length = 0;
    updateLocalStorage();
    showQuiz();
    showTitle();
}


