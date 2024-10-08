import cmdLibrary from "../json/library.json"
// import { printMe } from "./main"

const arrangmentArray = [
    ["1-1", cmdLibrary.bra], ["1-2", cmdLibrary.unnskyld], ["1-3", cmdLibrary.du], ["1-4", cmdLibrary.jeg],
    ["2-1", cmdLibrary.ja], ["2-2", cmdLibrary.vetIkke], ["2-3", cmdLibrary.ferdig], ["2-4", cmdLibrary.nei],
    ["3-1", cmdLibrary.kan], ["3-2", cmdLibrary.stopp], ["3-3", cmdLibrary.spise], ["3-4", cmdLibrary.dorlig]
]

const createCmdArray = ( arrangmentArray ) => {
    let newArray = []
    for (let i = 0; i < arrangmentArray.length; i++) {
        const [location, cmd] = arrangmentArray[i]
        let cmdObject = {
            ...cmd, // Addes content of cmdlibrary.item into cmdObject
            location: location // Adds location to cmdObject
        }
        newArray.push(cmdObject) // Push object with values directly into array
    }
    return newArray
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

const addSpeech = (cmdArray) => {
    for (let i = 0; i < cmdArray.length; i++) {
        // location of button = id
        const el = document.getElementById(`${cmdArray[i].location}`)
        el.addEventListener("touchend", () => {
            new Audio(`/assets/sounds/${cmdArray[i].cmdId}.mp3`).play()
            }
        )
    }
}

const main = (arrangmentArray) => {
    const cmdArray = createCmdArray(arrangmentArray)
    createButtons(cmdArray)
    addSpeech(cmdArray)
}

main(arrangmentArray)
