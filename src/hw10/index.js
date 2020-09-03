import './style.css';
import mp3 from './sounds/box.mp3'

const audios = document.querySelectorAll('audio');

document.addEventListener('keydown', (e) => {
  let curr;
  audios.forEach((audio) => {
    if (audio.id === e.key) {
      curr = audio;
    }
  });
  curr && curr.play();
});
