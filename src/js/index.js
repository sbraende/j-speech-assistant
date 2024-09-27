document.getElementById("ja").addEventListener("click", () => {
    playSound("ja")
})
document.getElementById("nei").addEventListener("click", () => {
    playSound("nei")
})
document.getElementById("vet-ikke").addEventListener("click", () => {
    playSound("vet-ikke")
})
document.getElementById("ferdig").addEventListener("click", () => {
    playSound("ferdig")
})
document.getElementById("torst").addEventListener("click", () => {
    playSound("torst")
})
document.getElementById("sulten").addEventListener("click", () => {
    playSound("sulten")
})
document.getElementById("du-gjor").addEventListener("click", () => {
    playSound("du-gjor")
})
document.getElementById("jeg-gjor").addEventListener("click", () => {
    playSound("jeg-gjor")
})
document.getElementById("stopp").addEventListener("click", () => {
    playSound("stopp")
})
document.getElementById("unnskyld").addEventListener("click", () => {
    playSound("unnskyld")
})
document.getElementById("bra").addEventListener("click", () => {
    playSound("bra")
})


const playSound = (soundId) => {
    let sound = new Audio(`assets/sounds/${soundId}.mp3`)
    sound.play()
}


