
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  fixedMinutes,
  minutes,
  seconds,
  resetControl
}){

  let timerTimeOut

  function timeUpdate(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  
  function resetTime(){
    clearTimeout(timerTimeOut)
    timeUpdate(fixedMinutes, 0)
  }
  
  
  function countdown(){
  
  
      timerTimeOut = setTimeout(() => {
  
      console.log(timerTimeOut)
  
      seconds = Number(secondsDisplay.textContent)
      minutes =  Number(minutesDisplay.textContent)
  
  
      timeUpdate(minutes, 0)
      
      if(minutes <= 0 && seconds <= 0){
   
          resetControl()
          resetTime()

        return
      }
      if(seconds <= 0){
        seconds = 4
        --minutes
      }
      
      timeUpdate(minutes, String(--seconds))

      
      countdown()
    }, 1000)
    
    return timerTimeOut
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }


  function getMinutes(){
    return minutes = fixedMinutes = prompt('Quantos Minutos?') || minutes 
  }

  return {
    countdown,
    resetTime,
    timeUpdate,
    getMinutes,
    hold,

    

  }
}
