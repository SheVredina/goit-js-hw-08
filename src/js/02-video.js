
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(event){
localStorage.setItem('videoplayer-current-time', event.seconds);
console.log(event);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0 ) 
