export default function Controls ({
  setButton,
  stopButton,
  playButton,
  pauseButton,
  soundOnButton,
  soundOffButton



}){
  function resetControl() {
    setButton.classList.remove('hide')
    stopButton.classList.add('hide')
  
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
  }

  function play(){
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
  
    setButton.classList.add('hide')
    stopButton.classList.remove('hide')
  }

  function pause(){
    playButton.classList.toggle('hide')
    pauseButton.classList.toggle('hide')
  }

  function soundToggle(){
    soundOnButton.classList.toggle('hide')
    soundOffButton.classList.toggle('hide')
  }


  

  
  

  return {
    resetControl,
    play,
    pause,
    soundToggle
  }
}



