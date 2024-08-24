document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const musicListItems = document.querySelectorAll('.music-list li');

    musicListItems.forEach(item => {
        item.addEventListener('click', function() {
            const songSrc = this.getAttribute('data-src');
            audioPlayer.src = songSrc;
            audioPlayer.play();
        });
    });
});
