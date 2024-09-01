document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const slot = urlParams.get('slot');
    document.getElementById('confirmation-message').innerText += ``;

    let timeLeft = 15 * 60; // 15 minutes in seconds
    const timerElement = document.getElementById('timer');

    const countdown = setInterval(function() {
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerElement.innerText = `${minutes}:${seconds}`;
        timeLeft -= 1;

        if (timeLeft < 0) {
            clearInterval(countdown);
            document.body.innerHTML = '<h1>Your booked slot is canceled!</h1>';
        }
    }, 1000);
});
