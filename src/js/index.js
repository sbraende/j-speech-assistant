import command from "../json/library.json"

const playSound = (id) => {
    let sound = new Audio(`assets/sounds/${id}.mp3`)
    sound.play()
}

function buttonLogic(buttonId, command) {
    // Build button content
    const El = document.getElementById(`${buttonId}`)
    El.innerHTML = `<h3 class="speechbord__item-icon">${command.icon}</h3>`
    El.innerHTML += `<h3 class="speechboard__item-title">${command.title}</h3>`

    // Connect sound to button
    El.addEventListener("touchend", () => {
        playSound(command.id)
    })
}

buttonLogic("1-1", command.bra)
buttonLogic("1-2", command.unnskyld)
buttonLogic("1-3", command.vetIkke)
buttonLogic("1-4", command.ferdig)

buttonLogic("2-1", command.bra)
buttonLogic("2-2", command.unnskyld)
buttonLogic("2-3", command.vetIkke)
buttonLogic("2-4", command.ferdig)

buttonLogic("3-1", command.ja)
buttonLogic("3-2", command.unnskyld)
buttonLogic("3-3", command.vetIkke)
buttonLogic("3-4", command.nei)
