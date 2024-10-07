import commandLibrary from "../json/library.json"

const BUTTONARRAY = [
    ["1-1", commandLibrary.bra], ["1-2", commandLibrary.unnskyld], ["1-3", commandLibrary.vetIkke],  ["1-4", commandLibrary.dorlig],
    ["2-1", commandLibrary.ferdig], ["2-2", commandLibrary.jeg], ["2-3", commandLibrary.du], ["2-4", commandLibrary.spise],
    ["3-1", commandLibrary.ja], ["3-2", commandLibrary.kan], ["3-3", commandLibrary.stopp], ["3-4", commandLibrary.nei]
]

const createButtons = (buttonArray) => {
    let buildString = ""
    buttonArray.forEach((command) => {
        buildString += 
        `
        <button id='${command[0]}' class='speechboard__item'>
        <h3 class="speechbord__item-icon">${command[1].icon}</h3>
        <h3 class="speechboard__item-title">${command[1].title}</h3>
        </button>
        `
    })
    const speechboardContainerEl = document.getElementById("speechboard_container")
    speechboardContainerEl.innerHTML = buildString  
}

const addSpeach = (buttonArray) => {
    buttonArray.forEach((command) => {
        const el = document.getElementById(`${command[0]}`)
        el.addEventListener("touchend", () => {
            new Audio(`/assets/sounds/${command[1].id}.mp3`).play()
        })
    })
}

const main = (buttonArray) => {
    createButtons(buttonArray)
    addSpeach(buttonArray)
}

main(BUTTONARRAY)