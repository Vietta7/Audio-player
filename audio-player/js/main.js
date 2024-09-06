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
