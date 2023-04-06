import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonRemoveTime,
  buttonFloresta,
  buttonChuva,
  buttonCafeteira,
  buttonLareira,
} from "./elements.js"

export default function ({controls}) {
  buttonPlay.addEventListener('click', function(){
    controls.play()
  })

  buttonPause.addEventListener('click', function(){
    controls.pause()
  })
}