import * as el from './elements.js';
import * as actions from './actions.js';

export function registerClick() {
  el.soundbar.addEventListener('click', () => {
    const action = event.target.dataset.action;

    if(action === undefined) {
      return;
    }

    actions.toggleSound()
  });
}