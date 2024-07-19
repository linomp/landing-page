const audio = new Audio()
audio.autoplay = false;
audio.loop = true;
audio.type = 'audio/mpeg';
audio.src = './media/the_descent_clip.mp3';
audio.volume = 0.15;

const playClip = function () {
    if (!audio.paused) {
        audio.pause();

        return;
    }
    audio.play();
}