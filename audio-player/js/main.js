// Время лайкать 

const likes = document.querySelectorAll('.like');
likes.forEach(like => {
    like.addEventListener('click', () => {
        alert('Вы лайкнули песню :)');
    });
});

// Управление on / off

const audio = document.getElementById('music');
const playPauseBtn = document.getElementById('play-pause-btn');
const playPauseIcon = playPauseBtn.querySelector('img');
playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play(); 
        playPauseIcon.src = './img/icon/pause.svg'; 
        playPauseIcon.alt = 'pause'; 
    } else {
        audio.pause();
        playPauseIcon.src = './img/icon/play.svg'; 
        playPauseIcon.alt = 'play'; 
    }
});

audio.addEventListener('ended', function() {
    playPauseIcon.src = './img/icon/play.svg'; 
    playPauseIcon.alt = 'play'; 
});

// Управление звуком

const volume = document.getElementById('volume');

audio.volume = volume.value;
volume.addEventListener('input', function() {
    audio.volume = volume.value;
});

const soundToggle = document.getElementById('sound-toggle');
const volumeIcon = document.getElementById('volume-icon');

let isMuted = false;

soundToggle.addEventListener('click', function() {
    if (isMuted) {
        audio.muted = false;
        volumeIcon.src = './img/icon/volume-up.png';
        volumeIcon.alt = 'sound-on';
        alert('Звук включен');
    } else {
        audio.muted = true;
        volumeIcon.src = './img/icon/sound-off.png';
        volumeIcon.alt = 'sound-off';
        alert('Звук выключен');
    }
    isMuted = !isMuted; 
});


// Управление временем :)

const currentTimeElement = document.getElementById('current-time');
const totalTimeElement = document.getElementById('total-time');
const seekbar = document.getElementById('bar');
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
audio.addEventListener('loadedmetadata', function() {
    totalTimeElement.textContent = formatTime(audio.duration);
    seekbar.max = Math.floor(audio.duration);
});
audio.addEventListener('timeupdate', function() {
    currentTimeElement.textContent = formatTime(audio.currentTime);
    seekbar.value = Math.floor(audio.currentTime);
});

// Перемотка трека 
seekbar.addEventListener('input', function() {
    audio.currentTime = seekbar.value; 
});
