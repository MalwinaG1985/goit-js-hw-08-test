import '../css/common.css';
import Player from '@vimeo/player';
import { throttle } from 'lodash.throttle';

const onPlay = function (data) {
    const stringifyData = JSON.stringify(data);
    localStorage.setItem(TIME_KEY, stringityData);
};

Player.on('timeupdate', throttle(onPlay, 1000));

function resumePlayback() {
    if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
        return;
    }
    const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
    if (paused) {
        Player
            .setCurrentTime(paused)
            .then(function (seconds) { })
            .catch(function (error) {
                switch (error.name) {
                    case 'Error': break;
                    default: break;
                }
            });
    }
}
resumePlayback();
