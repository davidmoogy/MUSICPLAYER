document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const progress = document.getElementById('progress');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');

    // Update progress bar and time display
    function updateUI() {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progressValue = (currentTime / duration) * 100;

        progress.value = progressValue;
        currentTimeDisplay.textContent = formatTime(currentTime);
        durationDisplay.textContent = formatTime(duration);
    }

    // Format time to MM:SS
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Play and Pause
    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.textContent = '❚❚';
        } else {
            audio.pause();
            playButton.textContent = '▶';
        }
    });

    // Update UI every second
    audio.addEventListener('timeupdate', updateUI);

    // Update time and progress when slider changes
    progress.addEventListener('input', () => {
        const duration = audio.duration;
        const newTime = (progress.value / 100) * duration;
        audio.currentTime = newTime;
    });

    // Placeholder actions for prev/next buttons
    prevButton.addEventListener('click', () => {
        alert('Previous track functionality not implemented.');
    });

    nextButton.addEventListener('click', () => {
        alert('Next track functionality not implemented.');
    });

    // Initial UI setup
    audio.addEventListener('loadedmetadata', updateUI);
});
