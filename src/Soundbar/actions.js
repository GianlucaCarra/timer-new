import * as sound from './sounds.js';
import * as el from './elements.js';

export function toggleSound() {
  if(event.target.dataset.action != "toggleSound") {
    return;
  }

  let idButton = event.target.dataset.sound;
  
  if(idButton === "park") {
    el.parkButton.classList.toggle("is-selected");
    sound.forest.play();
    sound.forest.loop = true;

    if(el.parkButton.classList.contains('is-selected') === false) {
      sound.forest.pause();
    }
  }

  if(idButton === "rain") {
    el.rainButton.classList.toggle("is-selected");
    sound.rain.play().loop = true;
    sound.rain.loop = true;

    if(el.rainButton.classList.contains('is-selected') === false) {
      sound.rain.pause();
    }
  }

  if(idButton === "coffe") {
    el.coffeButton.classList.toggle("is-selected");
    sound.shop.play();
    sound.shop.loop = true;

    if(el.coffeButton.classList.contains('is-selected') === false) {
      sound.shop.pause();
    }
  }

  if(idButton === "fireplace") {
    el.fireplaceButton.classList.toggle("is-selected");
    sound.fireplace.play();
    sound.fireplace.loop = true;

    if(el.fireplaceButton.classList.contains('is-selected') === false) {
      sound.fireplace.pause();
    }
  }

  console.log(idButton);
  
} 