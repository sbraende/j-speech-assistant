import cmdLibrary from "../json/temp.json"

// for (const i of cmds) {
//     console.log(i.title)

// }

// Create buttons 

const createButtons = (cmdLibrary) => {
    const buttonContainerEl = document.getElementById("speechboard_container")
    const buttonEl = document.createElement("button")
    buttonEl.id = "vet-ikke"
    buttonEl.className = "speechboard__item"
    buttonContainerEl.appendChild(buttonEl)

    const buttonIcon = document.createElement("h3")
    buttonIcon.innerText = "🤷🏻‍♀️"
    buttonIcon.className = "speechbord__item-icon" 
    // buttonEl.appendChild(buttonIcon)

    const buttonTitle = document.createElement("h3")
    buttonTitle.innerText = "vet-ikke"
    buttonTitle.className = "speechboard__item-title"
    // buttonEl.appendChild(buttonTitle)

    buttonEl.append(buttonTitle, buttonIcon)
}

createButtons(cmdLibrary)


// const createButtons = (cmdArray) => {
//     const speechboardContainerEl = document.getElementById("speechboard_container")
//     let buildString = ""

//     for (let i = 0; i < cmdArray.length; i++) {
//         buildString += 
//             `
//             <button id='${cmdArray[i].location}' class='speechboard__item'>
//                 <h3 class="speechbord__item-icon">${cmdArray[i].icon}</h3>
//                 <h3 class="speechboard__item-title">${cmdArray[i].title}</h3>
//             </button>
//             `
//         }
//     speechboardContainerEl.innerHTML = buildString
// }

// const addSpeech = (cmdArray) => {
//     for (let i = 0; i < cmdArray.length; i++) {
//         const el = document.getElementById(`${cmdArray[i].location}`)
//         el.addEventListener("touchend", () => {
//             new Audio(`/assets/sounds/${cmdArray[i].cmdId}.mp3`).play()
//             }
//         )
//     }
// }

// export const buildSoundboard = (arrangmentArray) => {
//     const cmdArray = createCmdArray(arrangmentArray)
//     createButtons(cmdArray)
//     addSpeech(cmdArray)
// }
