import * as el from './elements.js';
import * as actions from './actions.js';
import state from './state.js';

export function registerControls() {
  el.controls.addEventListener('click', () => {
    const action = event.target.dataset.action;
    
    if(action === undefined) {
    return;
    }
    
    actions.playTimer();
    actions.pauseTimer();
    actions.reset();

    if(state.isRunnig === false) {
      actions.add();
      actions.remove();
    }
  });
}