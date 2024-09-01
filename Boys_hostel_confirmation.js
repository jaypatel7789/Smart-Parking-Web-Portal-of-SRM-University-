document.addEventListener('DOMContentLoaded', function() {
    const query = new URLSearchParams(window.location.search);
    const selectedSlotNumber = parseInt(query.get('slot'), 10);
    const container = document.getElementById('button-container');
    const bookingMessage = document.getElementById('booking-message');
    const timeLeftElement = document.getElementById('time-left');

    bookingMessage.textContent = `Your slot ${selectedSlotNumber} has been booked.`;
    bookingMessage.style.display = 'block';

    // Generate slots and highlight the selected one
    for (let i = 1; i <= 20; i++) {
        const button = document.createElement('button');
        button.textContent = `Slot ${i}`;
        button.id = `slot-${i}`;
        container.appendChild(button);

        if (i === selectedSlotNumber) {
            button.classList.add('selected');
        }
    }

    // Start a 15-minute countdown timer
    let time = 15 * 60; // 15 minutes in seconds
    const updateTimer = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timeLeftElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (time > 0) {
            time--;
            setTimeout(updateTimer, 1000);
        } else {
            alert("!! OOPS Your slot has been canceled !!");
            document.body.innerHTML = '<h1>!! OOPS Your slot has been canceled !!</h1>'; // Clear the page and show the message
        }
    };

    updateTimer(); // Start the timer
});
