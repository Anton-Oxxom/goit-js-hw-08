import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

const getTimeSum = (localStorage.getItem('videoplayer-current-time'));
if (getTimeSum !== null) {
    player.setCurrentTime(getTimeSum)

}