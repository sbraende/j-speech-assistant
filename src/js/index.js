document.getElementById("ja").addEventListener("click", () => {
    playSound("ja")
})
document.getElementById("nei").addEventListener("click", () => {
    playSound("nei")
})

const playSound = (soundId) => {
    let sound = new Audio(`assets/sounds/${soundId}.mp3`)
    sound.play()
}


