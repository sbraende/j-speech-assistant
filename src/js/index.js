import command from "../json/library.json"

const speechboardContainerEl = document.getElementById("speechboard_container")
const BUTTONARRAY = [
    ["1-1", command.bra], ["1-2", command.unnskyld], ["1-3", command.vetIkke],  ["1-4", command.vetIkke],
    ["2-1", command.bra], ["2-2", command.unnskyld], ["2-3", command.vetIkke], ["2-4", command.vetIkke],
    ["3-1", command.ja], ["3-2", command.unnskyld], ["3-3", command.vetIkke], ["3-4", command.nei]
]


// Main logic (own fucntion)

// Create buttons
//speechboardContainerEl.innerHTML = 
const fillButtons = (buttonArray) => {
    let buildString = ""
    buttonArray.forEach((item) => {
        buildString += 
            `
            <button id='${item[0]}' class='speechboard__item'>
                <h3 class="speechbord__item-icon">${item[1].icon}</h3>
                <h3 class="speechboard__item-title">${item[1].title}</h3>
            </button>
            `
    })

    speechboardContainerEl.innerHTML = buildString  
}

const addSoundEventlisteners = (buttonArray) => {
    buttonArray.forEach((item) => {
        const el = document.getElementById(`${item[0]}`)
        el.addEventListener("touchend", () => {
            new Audio(`assets/sounds/${item[1].id}.mp3`).play()
        })

    })
}

fillButtons(BUTTONARRAY)
addSoundEventlisteners(BUTTONARRAY)

// Setup event listeners


// const playSound = (id) => {
//     let sound = new Audio(`assets/sounds/${id}.mp3`)
//     sound.play()
// }

// function buttonLogic(buttonId, command) {
//     // Build button content
//     const El = document.getElementById(`${buttonId}`)
//     El.innerHTML = `<h3 class="speechbord__item-icon">${command.icon}</h3>`
//     El.innerHTML += `<h3 class="speechboard__item-title">${command.title}</h3>`

//     // Connect sound to button
//     El.addEventListener("touchend", () => {
//         playSound(command.id)
//     })
// }

// buttonLogic("1-1", command.bra)
// buttonLogic("1-2", command.unnskyld)
// buttonLogic("1-3", command.vetIkke)
// buttonLogic("1-4", command.ferdig)

// buttonLogic("2-1", command.bra)
// buttonLogic("2-2", command.unnskyld)
// buttonLogic("2-3", command.vetIkke)
// buttonLogic("2-4", command.ferdig)

// buttonLogic("3-1", command.ja)
// buttonLogic("3-2", command.unnskyld)
// buttonLogic("3-3", command.vetIkke)
// buttonLogic("3-4", command.nei)
