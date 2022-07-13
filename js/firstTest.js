const quizData = [
    {
        question: "1+2?",
        a: "3",
        b: "5",
        c: "7",
        correct: "a",
    },
    {
        question: "2+3?",
        a: "3",
        b: "5",
        c: "7",
        correct: "b",
    },
    {
        question: "4+1?",
        a: "5",
        b: "6",
        c: "7",
        correct: "a",
    },
    {
        question: "3+4?",
        a: "5",
        b: "6",
        c: "7",
        correct: "c",
    },
    {
        question: "7+2?",
        a: "9",
        b: "10",
        c: "11",
        correct: "a",
    },
    {
        question: "6+1?",
        a: "6",
        b: "8",
        c: "7",
        correct: "c",
    },
    {
        question: "1+6?",
        a: "5",
        b: "7",
        c: "6",
        correct: "b",
    },
    {
        question: "8+1?",
        a: "6",
        b: "9",
        c: "7",
        correct: "b",
    },
    {
        question: "5+2?",
        a: "6",
        b: "9",
        c: "7",
        correct: "c",
    },
    {
        question: "3+3?",
        a: "6",
        b: "5",
        c: "7",
        correct: "a",
    },


];
const quizDataTwo = [
    {
        question: "2-1?",
        a: "1",
        b: "2",
        c: "0",
        correct: "a",
    },
    {
        question: "3-1?",
        a: "2",
        b: "3",
        c: "1",
        correct: "a",
    },
    {
        question: "5-1?",
        a: "4",
        b: "0",
        c: "6",
        correct: "a",
    },
    {
        question: "7-3",
        a: "4",
        b: "5",
        c: "6",
        correct: "a",
    },
    {
        question: "8-6?",
        a: "2",
        b: "1",
        c: "4",
        correct: "a",
    },
    {
        question: "9-1?",
        a: "9",
        b: "8",
        c: "7",
        correct: "b",
    },
    {
        question: "7-2?",
        a: "5",
        b: "4",
        c: "3",
        correct: "a",
    },
    {
        question: "4-3?",
        a: "1",
        b: "0",
        c: "2",
        correct: "a",
    },
    {
        question: "5-2?",
        a: "3",
        b: "4",
        c: "2",
        correct: "a",
    },
    {
        question: "8-3?",
        a: "5",
        b: "6",
        c: "4",
        correct: "a",
    },

]
const quizDataThree = [
    {
        question: "2+9?",
        a: "11",
        b: "10",
        c: "9",
        correct: "a",
    },
    {
        question: "3+8?",
        a: "10",
        b: "11",
        c: "9",
        correct: "b",
    },
    {
        question: "5+9?",
        a: "14",
        b: "15",
        c: "16",
        correct: "a",
    },
    {
        question: "7+8?",
        a: "15",
        b: "17",
        c: "16",
        correct: "a",
    },
    {
        question: "4+9?",
        a: "11",
        b: "12",
        c: "13",
        correct: "c",
    },
    {
        question: "30+10?",
        a: "43",
        b: "40",
        c: "41",
        correct: "b",
    },
    {
        question: "9+6?",
        a: "16",
        b: "15",
        c: "14",
        correct: "b",
    },
    {
        question: "12+7?",
        a: "18",
        b: "17",
        c: "19",
        correct: "c",
    },
    {
        question: "8+2?",
        a: "10",
        b: "11",
        c: "9",
        correct: "a",
    },
    {
        question: "9+8?",
        a: "16",
        b: "17",
        c: "18",
        correct: "b",
    },
    {
        question: "5+6?",
        a: "11",
        b: "12",
        c: "13",
        correct: "a",
    },
    {
        question: "7+5?",
        a: "12",
        b: "13",
        c: "11",
        correct: "a",
    },

];
const quizDataFour = [
    {
        question: "19-9?",
        a: "9",
        b: "10",
        c: "11",
        correct: "a",
    },
    {
        question: "16-9",
        a: "6",
        b: "7",
        c: "8",
        correct: "b",
    },
    {
        question: "18-7?",
        a: "11",
        b: "9",
        c: "8",
        correct: "a",
    },
    {
        question: "13-10?",
        a: "3",
        b: "4",
        c: "5",
        correct: "a",
    },
    {
        question: "12-6?",
        a: "7",
        b: "8",
        c: "6",
        correct: "c",
    },
    {
        question: "17-8?",
        a: "8",
        b: "9",
        c: "10",
        correct: "b",
    },
    {
        question: "15-1?",
        a: "15",
        b: "14",
        c: "13",
        correct: "b",
    },
    {
        question: "14-2?",
        a: "13",
        b: "10",
        c: "12",
        correct: "c",
    },
    {
        question: "13-8?",
        a: "6",
        b: "5",
        c: "4",
        correct: "b",
    },
    {
        question: "17-4?",
        a: "13",
        b: "12",
        c: "11",
        correct: "a",
    },
];
const quizDataFive = [
    {
        question: "10+10?",
        a: "20",
        b: "21",
        c: "30",
        correct: "a",
    },
    {
        question: "17+13",
        a: "31",
        b: "30",
        c: "27",
        correct: "b",
    },
    {
        question: "8+19?",
        a: "27",
        b: "26",
        c: "25",
        correct: "a",
    },
    {
        question: "16+17?",
        a: "33",
        b: "30",
        c: "35",
        correct: "a",
    },
    {
        question: "18+19?",
        a: "25",
        b: "24",
        c: "27",
        correct: "c",
    },
    {
        question: "12+9?",
        a: "20",
        b: "21",
        c: "19",
        correct: "b",
    },
    {
        question: "16+15?",
        a: "30",
        b: "31",
        c: "29",
        correct: "b",
    },
    {
        question: "1+11?",
        a: "13",
        b: "10",
        c: "12",
        correct: "c",
    },
    {
        question: "4+48?",
        a: "60",
        b: "52",
        c: "48",
        correct: "b",
    },
    {
        question: "55+11?",
        a: "66",
        b: "60",
        c: "63",
        correct: "a",
    },
];
const quizDataSix = [
    {
        question: "88-11?",
        a: "77",
        b: "76",
        c: "76",
        correct: "a",
    },
    {
        question: "17-1",
        a: "16",
        b: "18",
        c: "15",
        correct: "b",
    },
    {
        question: "36-16?",
        a: "20",
        b: "21",
        c: "22",
        correct: "a",
    },
    {
        question: "71-22?",
        a: "59",
        b: "58",
        c: "57",
        correct: "a",
    },
    {
        question: "29-6?",
        a: "25",
        b: "24",
        c: "23",
        correct: "c",
    },
    {
        question: "48-15?",
        a: "32",
        b: "33",
        c: "30",
        correct: "b",
    },
    {
        question: "50-25?",
        a: "23",
        b: "25",
        c: "26",
        correct: "b",
    },
    {
        question: "64-61?",
        a: "5",
        b: "4",
        c: "3",
        correct: "c",
    },
    {
        question: "54-27?",
        a: "26",
        b: "27",
        c: "25",
        correct: "b",
    },
    {
        question: "91-82?",
        a: "9",
        b: "8",
        c: "10",
        correct: "a",
    },
];
const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');
let blockAnswers = document.querySelector(".block__answers")

let blockforAnswerFunc = () => {
    blockAnswers.style.display = 'inline'
    quiz.style.display = 'none'
}

let currentQuiz = 0;
let score = 0;
function func (data) {
    loadQuiz();

    function loadQuiz() {
        deselectAnswers();
            let currentQuizData = data[currentQuiz];

            questionElement.innerText = currentQuizData.question;
            a_text.innerText = currentQuizData.a;
            b_text.innerText = currentQuizData.b;
            c_text.innerText = currentQuizData.c;
        }



    function deselectAnswers() {
        answerElements.forEach(answerEl => answerEl.checked = false)
    }

    function getSelected() {
        let answer;

        answerElements.forEach(answerEl => {
            if (answerEl.checked) {
                answer = answerEl.id;
            }
        });

        return answer;
    }

    submit.addEventListener('click', () => {
        pictureHelen.style.display = 'none'
        const answer = getSelected();

        if (answer) {
            if (answer === data[currentQuiz].correct) {
                score++;
            }

            currentQuiz++;

            if (currentQuiz < data.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2>Вы ответили правильно на ${score}/${data.length} вопросов</h2>
            <button onclick="location.reload()">Reload</button>
            `;
            }
        }
    });



    window.addEventListener("keypress", function (e) {
        if (e.keyCode !== 13) return;

        const answer = getSelected();

        if (answer) {
            if (answer === data[currentQuiz].correct) {
                score++;
            }

            currentQuiz++;

            if (currentQuiz < data.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2>Вы ответили правильно на ${score}/${data.length} вопросов</h2>
            <button onclick="location.reload()">Выбрать другой тест</button>
            <button onclick="blockforAnswerFunc()">Посмотреть правильные ответы</button>
            `;
            }

        }
    });
}


let blockAnswersPush = document.querySelector(".block__answers")
let firstAnswer = document.querySelector(".firstAnswer")
let secondAnswer = document.querySelector(".secondAnswer")
let thirdAnswer = document.querySelector(".thirdAnswer")
let question = document.querySelector(".theQuestion")
let nextAnswer = document.querySelector(".next")
let i = 0
let j = 0
let k = 0
let d = 0


let blockWithAnswerFirst = (quizData) => {
    // первоначальная отрисовка вопросов
    question.append(quizData[d].question)
    firstAnswer.append(quizData[i].a)
    secondAnswer.append(quizData[j].b)
    thirdAnswer.append(quizData[k].c)
    firstAnswer.style.color = 'green'
    secondAnswer.style.color = 'red '
    thirdAnswer.style.color = 'red'



    function sumNumFromStr(str){
        return [...str].map(i=>{if(isFinite(i)==true || i=="."){return i}else{return " "} }).join("").split(" ").filter(i=>i!="").map(i => Number(i)).map(i=>x+=i, x=0).reverse()[0]
    }

// функции, которые прорисовывают вопросы
    let questionBlock = () => {
        question.textContent = ' '
        d++
        question.append(quizData[d].question)
    }
    let firstAnswerFunc = () => {
        firstAnswer.textContent = ' '
        i++
        firstAnswer.append(quizData[i].a)

        if (sumNumFromStr(quizData[i].question) == quizData[i].a) {
            firstAnswer.style.color = 'green'
        } else {
            firstAnswer.style.color = 'red'
        }
    }
    let secondAnswerFunc = () => {
        secondAnswer.textContent = ' '
        j++
        secondAnswer.append(quizData[j].b)
        if (sumNumFromStr(quizData[j].question) == quizData[j].b) {
            secondAnswer.style.color = 'green'
        }
        else {
            secondAnswer.style.color = 'red'
        }
    }
    let thirdAnswerFunc = () => {
        thirdAnswer.textContent = ' '
        k++
        thirdAnswer.append(quizData[k].c)
        if (quizData[k].c == sumNumFromStr(quizData[k].question)) {
            thirdAnswer.style.color = 'green'
        }
        else {
            thirdAnswer.style.color = 'red'
        }
    }


    // при нажатии берутся данные из массива, вопросы и ответы по примерам, находится правильный и выделяется зеленым
    nextAnswer.addEventListener("click", () => {

        firstAnswerFunc()
        secondAnswerFunc()
        thirdAnswerFunc()
        questionBlock()
        if( i === 19) {
            nextAnswer.disabled = true
            blockAnswersPush.innerHTML = `<button onclick="location.reload()">Выбрать другой тест</button>`
        }
    })
}


let blockWithAnswerSecond = (quizDataTwo) => {


    // первоначальная отрисовка вопросов
    question.append(quizDataTwo[d].question)
    firstAnswer.append(quizDataTwo[i].a)
    secondAnswer.append(quizDataTwo[j].b)
    thirdAnswer.append(quizDataTwo[k].c)
    firstAnswer.style.color = 'red'
    secondAnswer.style.color = 'green'
    thirdAnswer.style.color = 'red'



    function sumNumFromStr(str){
        return [...str].map(i=>{if(isFinite(i)==true || i=="."){return i}else{return " "} }).join("").split(" ").filter(i=>i!="").map(i => Number(i)).map(i => Number(i)).map(i=>i)
            .reduce(function (previousValue, value){
                return previousValue - value;
            });
    }

// функции, которые прорисовывают вопросы
    let questionBlock = () => {
        question.textContent = ' '
        d++
        question.append(quizDataTwo[d].question)
    }
    let firstAnswerFunc = () => {
        firstAnswer.textContent = ' '
        i++
        firstAnswer.append(quizDataTwo[i].a)

        if (sumNumFromStr(quizDataTwo[i].question) == quizDataTwo[i].a) {
            firstAnswer.style.color = 'green'
        } else {
            firstAnswer.style.color = 'red'
        }
    }
    let secondAnswerFunc = () => {
        secondAnswer.textContent = ' '
        j++
        secondAnswer.append(quizDataTwo[j].b)
        if (sumNumFromStr(quizDataTwo[j].question) == quizDataTwo[j].b) {
            secondAnswer.style.color = 'green'
        }
        else {
            secondAnswer.style.color = 'red'
        }
    }
    let thirdAnswerFunc = () => {
        thirdAnswer.textContent = ' '
        k++
        thirdAnswer.append(quizDataTwo[k].c)
        if (quizDataTwo[k].c == sumNumFromStr(quizDataTwo[k].question)) {
            thirdAnswer.style.color = 'green'
        }
        else {
            thirdAnswer.style.color = 'red'
        }
    }


    // при нажатии берутся данные из массива, вопросы и ответы по примерам, находится правильный и выделяется зеленым
    nextAnswer.addEventListener("click", () => {

        firstAnswerFunc()
        secondAnswerFunc()
        thirdAnswerFunc()
        questionBlock()
        if( i === 19) {
            nextAnswer.disabled = true
            blockAnswersPush.innerHTML = `<button onclick="location.reload()">Выбрать другой тест</button>`
        }
    })
}


let blockWithAnswerThird = (quizDataThree) => {


    // первоначальная отрисовка вопросов
    question.append(quizDataThree[d].question)
    firstAnswer.append(quizDataThree[i].a)
    secondAnswer.append(quizDataThree[j].b)
    thirdAnswer.append(quizDataThree[k].c)
    firstAnswer.style.color = 'red'
    secondAnswer.style.color = 'green'
    thirdAnswer.style.color = 'red'



    function sumNumFromStr(str){
        return [...str].map(i=>{if(isFinite(i)==true || i=="."){return i}else{return " "} }).join("").split(" ").filter(i=>i!="").map(i => Number(i)).map(i=>x-=i, x=0).reverse()[0]
    }

// функции, которые прорисовывают вопросы
    let questionBlock = () => {
        question.textContent = ' '
        d++
        question.append(quizDataThree[d].question)
    }
    let firstAnswerFunc = () => {
        firstAnswer.textContent = ' '
        i++
        firstAnswer.append(quizDataThree[i].a)

        if (sumNumFromStr(quizDataThree[i].question) == quizDataThree[i].a) {
            firstAnswer.style.color = 'green'
        } else {
            firstAnswer.style.color = 'red'
        }
    }
    let secondAnswerFunc = () => {
        secondAnswer.textContent = ' '
        j++
        secondAnswer.append(quizDataThree[j].b)
        if (sumNumFromStr(quizDataThree[j].question) == quizDataThree[j].b) {
            secondAnswer.style.color = 'green'
        }
        else {
            secondAnswer.style.color = 'red'
        }
    }
    let thirdAnswerFunc = () => {
        thirdAnswer.textContent = ' '
        k++
        thirdAnswer.append(quizDataThree[k].c)
        if (quizDataThree[k].c == sumNumFromStr(quizDataThree[k].question)) {
            thirdAnswer.style.color = 'green'
        }
        else {
            thirdAnswer.style.color = 'red'
        }
    }


    // при нажатии берутся данные из массива, вопросы и ответы по примерам, находится правильный и выделяется зеленым
    nextAnswer.addEventListener("click", () => {

        firstAnswerFunc()
        secondAnswerFunc()
        thirdAnswerFunc()
        questionBlock()
        if( i === 19) {
            nextAnswer.disabled = true
            blockAnswersPush.innerHTML = `<button onclick="location.reload()">Выбрать другой тест</button>`
        }
    })
}

let blockWithAnswerFour = (quizDataFour) => {


    // первоначальная отрисовка вопросов
    question.append(quizDataFour[d].question)
    firstAnswer.append(quizDataFour[i].a)
    secondAnswer.append(quizDataFour[j].b)
    thirdAnswer.append(quizDataFour[k].c)
    firstAnswer.style.color = 'red'
    secondAnswer.style.color = 'green'
    thirdAnswer.style.color = 'red'


    function sumNumFromStr(str){
        return [...str].map(i=>{if(isFinite(i)==true || i=="."){return i}else{return " "} }).join("").split(" ").filter(i=>i!="").map(i => Number(i)).map(i => Number(i)).map(i=>i)
            .reduce(function (previousValue, value){
                return previousValue - value;
            });
    }
// функции, которые прорисовывают вопросы
    let questionBlock = () => {
        question.textContent = ' '
        d++
        question.append(quizDataFour[d].question)
    }
    let firstAnswerFunc = () => {
        firstAnswer.textContent = ' '
        i++
        firstAnswer.append(quizDataFour[i].a)

        if (sumNumFromStr(quizDataFour[i].question) == quizDataFour[i].a) {
            firstAnswer.style.color = 'green'
        } else {
            firstAnswer.style.color = 'red'
        }
    }
    let secondAnswerFunc = () => {
        secondAnswer.textContent = ' '
        j++
        secondAnswer.append(quizDataFour[j].b)
        if (sumNumFromStr(quizDataFour[j].question) == quizDataFour[j].b) {
            secondAnswer.style.color = 'green'
        }
        else {
            secondAnswer.style.color = 'red'
        }
    }
    let thirdAnswerFunc = () => {
        thirdAnswer.textContent = ' '
        k++
        thirdAnswer.append(quizDataFour[k].c)
        if (quizDataFour[k].c == sumNumFromStr(quizDataFour[k].question)) {
            thirdAnswer.style.color = 'green'
        }
        else {
            thirdAnswer.style.color = 'red'
        }
    }


    // при нажатии берутся данные из массива, вопросы и ответы по примерам, находится правильный и выделяется зеленым
    nextAnswer.addEventListener("click", () => {

        firstAnswerFunc()
        secondAnswerFunc()
        thirdAnswerFunc()
        questionBlock()
        if( i === 19) {
            nextAnswer.disabled = true
            blockAnswersPush.innerHTML = `<button onclick="location.reload()">Выбрать другой тест</button>`
        }
    })
}

let blockWithAnswerFive = (quizDataFive) => {


    // первоначальная отрисовка вопросов
    question.append(quizDataFive[d].question)
    firstAnswer.append(quizDataFive[i].a)
    secondAnswer.append(quizDataFive[j].b)
    thirdAnswer.append(quizDataFive[k].c)
    firstAnswer.style.color = 'red'
    secondAnswer.style.color = 'green'
    thirdAnswer.style.color = 'red'



    function sumNumFromStr(str){
        return [...str].map(i=>{if(isFinite(i)==true || i=="."){return i}else{return " "} }).join("").split(" ").filter(i=>i!="").map(i => Number(i)).map(i=>x-=i, x=0).reverse()[0]
    }

// функции, которые прорисовывают вопросы
    let questionBlock = () => {
        question.textContent = ' '
        d++
        question.append(quizDataFive[d].question)
    }
    let firstAnswerFunc = () => {
        firstAnswer.textContent = ' '
        i++
        firstAnswer.append(quizDataFive[i].a)

        if (sumNumFromStr(quizDataFive[i].question) == quizDataFive[i].a) {
            firstAnswer.style.color = 'green'
        } else {
            firstAnswer.style.color = 'red'
        }
    }
    let secondAnswerFunc = () => {
        secondAnswer.textContent = ' '
        j++
        secondAnswer.append(quizDataFive[j].b)
        if (sumNumFromStr(quizDataFive[j].question) == quizDataFive[j].b) {
            secondAnswer.style.color = 'green'
        }
        else {
            secondAnswer.style.color = 'red'
        }
    }
    let thirdAnswerFunc = () => {
        thirdAnswer.textContent = ' '
        k++
        thirdAnswer.append(quizDataFive[k].c)
        if (quizDataFive[k].c == sumNumFromStr(quizDataFive[k].question)) {
            thirdAnswer.style.color = 'green'
        }
        else {
            thirdAnswer.style.color = 'red'
        }
    }


    // при нажатии берутся данные из массива, вопросы и ответы по примерам, находится правильный и выделяется зеленым
    nextAnswer.addEventListener("click", () => {

        firstAnswerFunc()
        secondAnswerFunc()
        thirdAnswerFunc()
        questionBlock()
        if( i === 19) {
            nextAnswer.disabled = true
            blockAnswersPush.innerHTML = `<button onclick="location.reload()">Выбрать другой тест</button>`
        }
    })
}

let blockWithAnswerSix = (quizDataSix) => {


    // первоначальная отрисовка вопросов
    question.append(quizDataSix[d].question)
    firstAnswer.append(quizDataSix[i].a)
    secondAnswer.append(quizDataSix[j].b)
    thirdAnswer.append(quizDataSix[k].c)
    firstAnswer.style.color = 'red'
    secondAnswer.style.color = 'green'
    thirdAnswer.style.color = 'red'


    function sumNumFromStr(str){
        return [...str].map(i=>{if(isFinite(i)==true || i=="."){return i}else{return " "} }).join("").split(" ").filter(i=>i!="").map(i => Number(i)).map(i => Number(i)).map(i=>i)
            .reduce(function (previousValue, value){
                return previousValue - value;
            });
    }
// функции, которые прорисовывают вопросы
    let questionBlock = () => {
        question.textContent = ' '
        d++
        question.append(quizDataFour[d].question)
    }
    let firstAnswerFunc = () => {
        firstAnswer.textContent = ' '
        i++
        firstAnswer.append(quizDataSix[i].a)

        if (sumNumFromStr(quizDataSix[i].question) == quizDataSix[i].a) {
            firstAnswer.style.color = 'green'
        } else {
            firstAnswer.style.color = 'red'
        }
    }
    let secondAnswerFunc = () => {
        secondAnswer.textContent = ' '
        j++
        secondAnswer.append(quizDataSix[j].b)
        if (sumNumFromStr(quizDataSix[j].question) == quizDataSix[j].b) {
            secondAnswer.style.color = 'green'
        }
        else {
            secondAnswer.style.color = 'red'
        }
    }
    let thirdAnswerFunc = () => {
        thirdAnswer.textContent = ' '
        k++
        thirdAnswer.append(quizDataSix[k].c)
        if (quizDataSix[k].c == sumNumFromStr(quizDataSix[k].question)) {
            thirdAnswer.style.color = 'green'
        }
        else {
            thirdAnswer.style.color = 'red'
        }
    }
    nextAnswer.addEventListener("click", () => {

        firstAnswerFunc()
        secondAnswerFunc()
        thirdAnswerFunc()
        questionBlock()
        if( i === 19) {
            nextAnswer.disabled = true
            blockAnswersPush.innerHTML = `<button onclick="location.reload()">Выбрать другой тест</button>`
        }
    })}
