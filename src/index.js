import './index.css';
import avatar from '../img/020.jpg';

console.log('hello weback. you are cool');

let root = document.getElementById('root');

const avatarImg = `<img src="${avatar}" />`;

root.innerHTML = avatarImg;
