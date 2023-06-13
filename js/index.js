import Controls from "./controls.js"
import Timer from "./timer.js"

const playButton = document.querySelector('#play')
const pauseButton = document.querySelector('#pause')
const stopButton = document.querySelector('#stop')
const setButton = document.querySelector('#set')

const soundOnButton = document.querySelector('.sound-on')
const soundOffButton = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

let minutes = Number(minutesDisplay.textContent)
let seconds = 0




let fixedMinutes = Number(minutesDisplay.textContent)

let controls = Controls({
  setButton,
  stopButton,
  playButton,
  pauseButton,
  soundOnButton,
  soundOffButton
})

let timer = Timer({
  minutesDisplay,
  secondsDisplay,
  fixedMinutes,
  minutes,
  seconds,
  resetControl: controls.resetControl
})





playButton.onclick  = () => {
  controls.play()
  timer.countdown()
}

pauseButton.onclick = () => {

  controls.pause()
  timer.hold()
}


stopButton.onclick = () => {
  controls.resetControl()
  timer.resetTime()
}

soundOnButton.onclick = () => {
  controls.soundToggle()
}
soundOffButton.onclick = () => {
  controls.soundToggle()
}

setButton.onclick = () => { 

  timer.timeUpdate(timer.getMinutes(), 0)
}



