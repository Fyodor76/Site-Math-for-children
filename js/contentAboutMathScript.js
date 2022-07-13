const allContentinformationAboutMath = document.querySelector(".allContent__informationAboutMath")
const buttoninformationAboutMath = document.getElementById("informationAboutMath")
const blockChooseCertainInformation = document.querySelector(".block__chooseCertainInformation")
const allBlocksWithFacts = document.querySelectorAll(".blocks__informationAboutMath div")
const sideBarChoice = document.querySelector(".sideBarChoice")
const allLinks = document.querySelectorAll(".linkToKinKong")
const allLinkSideVar = document.querySelectorAll(".sideBarChoice div")

buttoninformationAboutMath.addEventListener('click', () =>{
    back.style.display = 'block'
    blockChoose.style.display = 'none'
    allContentinformationAboutMath.style.display = 'block'
    blockChooseCertainInformation.style.display = 'block'
})

allLinks.forEach((el, index) => {
    el.addEventListener('click', () => {
        allBlocksWithFacts.forEach((element, id) => {
            if (id == index) {
                element.style.display = 'block'
                blockChooseCertainInformation.style.display = 'none'
                sideBarChoice.style.display = 'block'
            }
        })
    })
})

allLinkSideVar.forEach( (el, index) => {
    el.addEventListener('click', () => {
        allBlocksWithFacts.forEach((element, id) => {
            element.style.display = 'none'
            if (id == index) {
                element.style.display = 'block'
            }
        })
    })
} )





