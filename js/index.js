const ENABLE_AUDIO = true;

(function () {
    if (!ENABLE_AUDIO) return;
    var audio = new Audio()
    audio.autoplay = false;
    audio.loop = true;
    audio.type = 'audio/mpeg';
    audio.src = './media/the_descent_clip.mp3';
    audio.volume = 0.15;
    window.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        }
    });
})();