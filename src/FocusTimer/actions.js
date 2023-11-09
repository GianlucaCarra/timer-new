import state from "./state.js";
import * as timer from './timer.js';

export function playTimer() {
  if(event.target.dataset.action != 'playTimer') {
    return;
  }

  document.getElementById('play').classList.add('hide');
  document.getElementById('pause').classList.remove('hide');

  state.isRunnig = true;

  timer.countdown();
}

export function pauseTimer() {
  if(event.target.dataset.action != 'pauseTimer') {
    return;
  }

  document.getElementById('play').classList.remove('hide');
  document.getElementById('pause').classList.add('hide');

  state.isRunnig = false;
}

export function reset() {
  if(event.target.dataset.action != 'reset') {
    return;
  }

  document.getElementById('play').classList.remove('hide');
  document.getElementById('pause').classList.add('hide');

  state.isRunnig = false;
  state.minutes = 30;

  timer.updateDisplay();
}

export function add() {
  if(event.target.dataset.action != 'add') {
    return;
  }

  state.minutes = state.minutes + 5;
  state.seconds = 0;

  if(state.minutes > 60) {
    state.minutes = 60;
  }

  timer.updateDisplay();
}

export function remove() {
  if(event.target.dataset.action != 'remove') {
    return;
  }

  state.minutes = state.minutes - 5;
  state.seconds = 0;

  if(state.minutes < 0) {
    state.minutes = 0;
  }
  
  timer.updateDisplay();
}