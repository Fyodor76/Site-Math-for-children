const back = document.getElementById('back')
const blocksInformationAboutMath = document.querySelectorAll('.block__chooseCertainInformation div')

back.addEventListener('click', () => {
    allContentinformationAboutMath.style.display = 'none'
    back.style.display = 'none'
    blockChoose.style.display = 'block'
    blockChoose.style.display = 'flex'
    blockcontentTest.style.display = 'none'
    contentMathInLife.style.display = 'none'
    blockAnswers.style.display = 'none'
    quiz.style.display = 'none'
    blockBasicRules.style.display = 'none'
    sideBarChoice.style.display = 'none'
    allBlocksWithFacts.forEach((element, id) => {
        element.style.display = 'none'
    })
})