import cmdLibrary from "../json/library.json"
// import { printMe } from "./main"

// Currently having two of the same cmd is supported. E.g. bra and bra. 
const cmdArray = [
    cmdLibrary.bra, cmdLibrary.unnskyld, cmdLibrary.du, cmdLibrary.jeg,
    cmdLibrary.ja, cmdLibrary.vetIkke, cmdLibrary.ferdig, cmdLibrary.nei,
    cmdLibrary.kan, cmdLibrary.stopp, cmdLibrary.spise, cmdLibrary.dorlig
]

const locationsArray = [
    "1-1", "1-2", "1-3", "1-4",
    "2-1", "2-2", "2-3", "2-4",
    "3-1", "3-2", "3-3", "3-4"
]

const linkLocation = ( cmdArray, locationsArray ) => {
    // Add location into cmd object
    for (let i = 0; i < locationsArray.length; i++) {
        cmdArray[i].location = locationsArray[i]
    }
}

const createButtons = (cmdArray) => {
    const speechboardContainerEl = document.getElementById("speechboard_container")
    let buildString = ""

    for (let i = 0; i < cmdArray.length; i++) {
        buildString += 
            `
            <button id='${cmdArray[i].location}' class='speechboard__item'>
            <h3 class="speechbord__item-icon">${cmdArray[i].icon}</h3>
            <h3 class="speechboard__item-title">${cmdArray[i].title}</h3>
            </button>
            `
        speechboardContainerEl.innerHTML = buildString
    }
}

const addSpeach = (cmdArray) => {
    for (let i = 0; i < cmdArray.length; i++) {
        const el = document.getElementById(`${cmdArray[i].location}`)
        el.addEventListener("touchend", () => {
            new Audio(`/assets/sounds/${cmdArray[i].id}.mp3`).play()
            }
        )
    }
}

const main = (cmdArray, locationsArray) => {
    linkLocation(cmdArray, locationsArray)
    createButtons(cmdArray)
    addSpeach(cmdArray)
}

main(cmdArray, locationsArray)

