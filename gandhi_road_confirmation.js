document.addEventListener('DOMContentLoaded', function() {
    const query = new URLSearchParams(window.location.search);
    const selectedSlot = 'S ' + query.get('slot');
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = `Your slot ${selectedSlot} has been booked.`;

    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');

    for (let i = 1; i <= 24; i++) {
        const button = document.createElement('button');
        button.textContent = `S ${i}`;
        if (`S ${i}` === selectedSlot) {
            button.classList.add('selected');
        }
        if (i <= 12) {
            row1.appendChild(button);
        } else {
            row2.appendChild(button);
        }
    }

    const timerMessage = document.getElementById('timer-message');
    const timeLeftElement = document.getElementById('time-left');

    let time = 15 * 60; // 15 minutes
    const updateTimer = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timeLeftElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (time > 0) {
            time--;
            setTimeout(updateTimer, 1000);
        } else {
            document.body.innerHTML = '<h1>!! OOPS Your slot has been canceled !!</h1>';
        }
    };

    updateTimer();
});
