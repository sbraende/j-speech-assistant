const createButtons = (cmdLibrary) => {
    const buttonContainerEl = document.getElementById("speechboard_container")
    const fragment = document.createDocumentFragment() // Creating html in memory, not rendered

    for (const cmd of cmdLibrary) {
        const buttonEl = document.createElement("button")
        buttonEl.id = cmd.cmdId 
        buttonEl.classList.add("speechboard__item")

    
        const buttonIcon = document.createElement("h3")
        buttonIcon.innerText = cmd.icon 
        buttonIcon.classList.add("speechbord__item-icon")
    
        const buttonTitle = document.createElement("h3")
        buttonTitle.innerText = cmd.title
        buttonTitle.classList.add("speechboard__item-title")
    
        buttonEl.append(buttonIcon, buttonTitle)
        fragment.appendChild(buttonEl)
    }

    buttonContainerEl.appendChild(fragment)
}

const addSpeech = (cmdLibrary) => {
    for (const cmd of cmdLibrary) {
        const buttonEl = document.querySelector("#" + cmd.cmdId)
        buttonEl.addEventListener("touchend", () => {
            new Audio(`/assets/sounds/${cmd.cmdId}.mp3`).play()
            }
        )
   }
}

export const buildSoundboard = (cmdLibrary) => {
    createButtons(cmdLibrary)
    addSpeech(cmdLibrary)
}
