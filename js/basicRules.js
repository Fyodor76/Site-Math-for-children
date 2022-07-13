const blockBasicRules = document.querySelector(".allContent__rules")
const listWithNumbersToTen = document.querySelector(".listWithNumbersToTen")
const listWithNumbersToTwenty = document.querySelector(".listWithNumbersToTwenty")
const buttonBasicRules = document.getElementById("BasicRules")
const buttonBasicRulesOne = document.getElementById("buttonBasicRulesOne")
const buttonBasicRulesTwo = document.getElementById("buttonBasicRulesTwo")


buttonBasicRules.addEventListener('click', () => {
    blockChoose.style.display = 'none'
    blockBasicRules.style.display = 'block'
    back.style.display = 'block'
    blockcontentTest.style.display = 'none'
})

buttonBasicRulesOne.addEventListener('click', () => {
    if (listWithNumbersToTen.style.display == 'block') {
        listWithNumbersToTen.style.display = 'none'
    }
    else {
        listWithNumbersToTen.style.display = 'block'
    }
})

buttonBasicRulesTwo.addEventListener('click', () => {
    if (listWithNumbersToTwenty.style.display == 'block') {
        listWithNumbersToTwenty.style.display = 'none'
    }
    else {
        listWithNumbersToTwenty.style.display = 'block'
    }
})



