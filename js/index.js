const buttonChoice = document.getElementById('choiceOfTest')
const pictureHelen = document.querySelector(".helenInTest")
const blockTest = document.getElementById('block__test')
const firstTest = document.getElementById('first')
const secondTest = document.getElementById('second')
const thirdTest = document.getElementById('third')
const fourthTest = document.getElementById('fourth')
const fifthTest = document.getElementById('fifth')
const sixesTest = document.getElementById('sixes')
const buttonSwitchToMainPage = document.querySelector('.button')
const mainBlockgreed = document.querySelector('.mainBlock__greed')
const blockcontentTest = document.querySelector('.block__contentTest')
const blockChoose = document.querySelector('.allContent__makeChoice')
const buttonChooseTest = document.querySelector('.button__choose__test')
const buttonChooseTestTwo = document.getElementById('button__choose__test')

buttonChooseTestTwo.addEventListener('click', () => {
    blockChoose.style.display = 'none'
    back.style.display = 'inline'
    blockcontentTest.style.display = 'block'
})


buttonSwitchToMainPage.addEventListener('click', () => {
    mainBlockgreed.style.display = 'none'
    blockChoose.style.display = 'block'
    blockChoose.style.display = 'flex'
})

buttonChooseTest.addEventListener('click', () => {
    blockChoose.style.display = 'none'
    back.style.display = 'inline'
    blockcontentTest.style.display = 'block'
})




buttonChoice.addEventListener('click', () => {
    pictureHelen.style.display = 'block'
    if (firstTest.checked) {
        quiz.style.display = 'inline'
        blockTest.style.display = 'none'
        func(quizData)
        blockWithAnswerFirst(quizData)
    }
    else if (secondTest.checked) {
        quiz.style.display = 'inline'
        blockTest.style.display = 'none'
        func(quizDataTwo)
        blockWithAnswerSecond(quizDataTwo)
    }
    else if (thirdTest.checked) {
        quiz.style.display = 'inline'
        blockTest.style.display = 'none'
        func(quizDataThree)
        blockWithAnswerThird(quizDataThree)
    }
    else if (fourthTest.checked) {
        quiz.style.display = 'inline'
        blockTest.style.display = 'none'
        func(quizDataFour)
        blockWithAnswerFour(quizDataFour)
    }
    else if (fifthTest.checked) {
        quiz.style.display = 'inline'
        blockTest.style.display = 'none'
        func(quizDataFive)
        blockWithAnswerFive(quizDataFive)
    }
    else if (sixesTest.checked) {
        quiz.style.display = 'inline'
        blockTest.style.display = 'none'
        func(quizDataSix)
        blockWithAnswerSix(quizDataSix)
    }
})


window.addEventListener("keypress", function () {
    if (firstTest.checked) {
        quiz.style.display = 'inline'
        blockTest.style.display = 'none'
        func(quizData)
    }
    else if (secondTest.checked) {
        quiz.style.display = 'inline'
        blockTest.style.display = 'none'
        func(quizDataTwo)
    }
    else if (thirdTest.checked) {
        quiz.style.display = 'inline'
        blockTest.style.display = 'none'
        func(quizDataThree)
    }
    else if (fourthTest.checked) {
        quiz.style.display = 'inline'
        blockTest.style.display = 'none'
        func(quizDataFour)
    }
    else if (fifthTest.checked) {
        quiz.style.display = 'inline'
        blockTest.style.display = 'none'
        func(quizDataFive)
    }
    else if (sixesTest.checked) {
        quiz.style.display = 'inline'
        blockTest.style.display = 'none'
        func(quizDataSix)
    }
})




