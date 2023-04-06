export default function Constrols({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonRemoveTime,
  buttonFloresta,
  buttonChuva,
  buttonCafeteira,
  buttonLareira,
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause(){
    buttonPause.classList.add('hide')  
    buttonPlay.classList.remove('hide')
  }

  return{
    play,
    pause,
  }
}
