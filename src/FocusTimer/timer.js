import state from './state.js';
import * as el from './elements.js';
import * as actions from './actions.js';
import * as audio from './sounds.js'

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutesSpan.textContent = String(minutes).padStart(2, '0');
  el.secondsSpan.textContent = String(seconds).padStart(2, '0');
}

export function countdown() {
  clearTimeout(state.countdouwn)

  if(state.isRunnig === false) {
    return;
  }

  let minutes = Number(el.minutesSpan.textContent);
  let seconds = Number(el.secondsSpan.textContent);

  seconds--

  if(seconds < 0) {
    seconds = 59;
    minutes--
  }

  if(minutes < 0) {
    audio.timerZero.play();
    document.getElementById('pause').classList.add('hide');
    document.getElementById('play').classList.remove('hide');
    return;
  }

  updateDisplay(minutes, seconds);
  state.countdouwn = setTimeout(() => countdown(), 1000);
}