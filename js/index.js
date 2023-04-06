const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTime')
const buttonRemoveTime = document.querySelector('.removeTime')
const buttonFloresta = document.querySelector('.floresta')
const buttonChuva = document.querySelector('.chuva')
const buttonCafeteria = document.querySelector('.cafeteria')
const buttonLareira = document.querySelector('.lareira')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const bgChuva = document.getElementById('audioChuva')
const bgCafeteria = document.getElementById('audioCafeteria')
const bgLareira = document.getElementById('audioLareira')
const bgFloresta = document.getElementById('audioFloresta')
let timerTimeOut
let minutes = Number(minutesDisplay.textContent)
let newMinutes




buttonPlay.addEventListener('click', function(){
  play()
  countDown()
  pressButton()
})

buttonPause.addEventListener('click', function(){
  pause()
  hold()
  pressButton()
})

buttonStop.addEventListener('click', function(){
  stop()
  reset()
  pressButton()

})

buttonAddTime.addEventListener('click', function(){
  addTime()
  pressButton()
})

buttonRemoveTime.addEventListener('click', function(){
  removeTime()
  pressButton()
})

buttonFloresta.addEventListener('click', function(){
  pressButton()
  if (bgFloresta.paused) {
    florestaOn()
    chuvaOff()
    lareiraOff()
    cafeteriaOff()
    bgFloresta.play()
    bgChuva.pause()
    bgCafeteria.pause()
    bgLareira.pause()
  } else {
    pauseAllSounds()
  }
})

buttonChuva.addEventListener('click', function(){
  pressButton()   
  if (bgChuva.paused) {
    florestaOff()
    chuvaOn()
    lareiraOff()
    cafeteriaOff()
    bgFloresta.pause()
    bgChuva.play()
    bgCafeteria.pause()
    bgLareira.pause()
  } else {
    pauseAllSounds()
  }
})

buttonCafeteria.addEventListener('click', function(){
  pressButton()
  if (bgCafeteria.paused) {
    florestaOff()
    chuvaOff()
    lareiraOff()
    cafeteriaOn()
    bgFloresta.pause()
    bgChuva.pause()
    bgCafeteria.play()
    bgLareira.pause() 
  } else {
    pauseAllSounds()
  }
})

buttonLareira.addEventListener('click', function(){
  pressButton()
  if (bgLareira.paused) {
    florestaOff()
    chuvaOff()
    lareiraOn()
    cafeteriaOff()
    bgFloresta.pause()
    bgChuva.pause()
    bgCafeteria.pause()
    bgLareira.play()    
  } else {
    pauseAllSounds()
  }
})

function pauseAllSounds() {
  bgFloresta.pause()
  bgChuva.pause()
  bgCafeteria.pause()
  bgLareira.pause()
  florestaOff()
  chuvaOff()
  lareiraOff()
  cafeteriaOff()
}

function pressButton(){
  buttonPressAudio.play()
}

function kitchenTimerSound(){
  kitchenTimer.play()
}

function play() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  
}
function pause(){
  buttonPause.classList.add('hide')  
  buttonPlay.classList.remove('hide')
}

function stop(){
  buttonPause.classList.add('hide')  
  buttonPlay.classList.remove('hide')
}

function addTime(){
  minutes = minutes + 5
  updateDisplay(minutes, 0)
  console.log('add')
}

function removeTime(){
  minutes = minutes - 5
  updateDisplay(minutes, 0)
  console.log('remove')
}

function chuvaOff() {
  buttonChuva.querySelector('path:first-child').setAttribute('fill', '#E1E1E6');
  buttonChuva.querySelector('path:nth-of-type(2)').setAttribute('fill', '#323238');
}

function florestaOff() {
  buttonFloresta.querySelector('path:first-child').setAttribute('fill', '#E1E1E6');
  buttonFloresta.querySelector('path:nth-of-type(2)').setAttribute('fill', '#323238');
}

function cafeteriaOff() {
  buttonCafeteria.querySelector('path:first-child').setAttribute('fill', '#E1E1E6');
  buttonCafeteria.querySelector('path:nth-of-type(2)').setAttribute('fill', '#323238');
}

function lareiraOff() {
  buttonLareira.querySelector('path:first-child').setAttribute('fill', '#E1E1E6');
  buttonLareira.querySelector('path:nth-of-type(2)').setAttribute('fill', '#323238');
}

function florestaOn() {
  buttonFloresta.querySelector('path:first-child').setAttribute('fill', '#02799D');
  buttonFloresta.querySelector('path:nth-of-type(2)').setAttribute('fill', '#FFFFFF');
}

function chuvaOn() {
  buttonChuva.querySelector('path:first-child').setAttribute('fill', '#02799D');
  buttonChuva.querySelector('path:nth-of-type(2)').setAttribute('fill', '#FFFFFF');
}

function cafeteriaOn() {
  buttonCafeteria.querySelector('path:first-child').setAttribute('fill', '#02799D');
  buttonCafeteria.querySelector('path:nth-of-type(2)').setAttribute('fill', '#FFFFFF');
}

function lareiraOn() {
  buttonLareira.querySelector('path:first-child').setAttribute('fill', '#02799D');
  buttonLareira.querySelector('path:nth-of-type(2)').setAttribute('fill', '#FFFFFF');
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)

    if(isFinished) {
      reset()
      kitchenTimerSound()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))
    countDown()    
  }, 1000)
}

  function hold(){
    clearTimeout(timerTimeOut)
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)  
  }
