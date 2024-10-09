const createCmdArray = ( arrangmentArray ) => {
    let newArray = []
    for (let i = 0; i < arrangmentArray.length; i++) {
        const [location, cmd] = arrangmentArray[i]
        let cmdObject = {
            ...cmd, // Spread operator, addes content of cmdlibrary.item into cmdObject
            location: location // Adds location to cmdObject
        }
        newArray.push(cmdObject)
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
        }
    speechboardContainerEl.innerHTML = buildString
}

const addSpeech = (cmdArray) => {
    for (let i = 0; i < cmdArray.length; i++) {
        const el = document.getElementById(`${cmdArray[i].location}`)
        el.addEventListener("touchend", () => {
            new Audio(`/assets/sounds/${cmdArray[i].cmdId}.mp3`).play()
            }
        )
    }
}

export const buildSoundboard = (arrangmentArray) => {
    const cmdArray = createCmdArray(arrangmentArray)
    createButtons(cmdArray)
    addSpeech(cmdArray)
}
