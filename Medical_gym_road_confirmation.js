document.addEventListener('DOMContentLoaded', function() {
    const query = new URLSearchParams(window.location.search);
    const selectedSlotNumber = query.get('slot');
    const parkingSlotsContainer = document.getElementById('parking-slots');
    const confirmationMessage = document.getElementById('confirmation-message');
    const timeLeftElement = document.getElementById('time-left');

    confirmationMessage.textContent = `Your slot ${selectedSlotNumber} has been booked.`;

    // Generate slots again for visualization
    for (let i = 1; i <= 15; i++) {
        const slotButton = document.createElement('button');
        slotButton.classList.add('slot');
        slotButton.textContent = i;
        if (i == selectedSlotNumber) {
            slotButton.classList.add('selected');
        }
        parkingSlotsContainer.appendChild(slotButton);
    }

    let time = 15 * 60; // 15 minutes in seconds
    function updateTimer() {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timeLeftElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (time > 0) {
            time--;
            setTimeout(updateTimer, 1000);
        } else {
            confirmationMessage.textContent = '!! OOPS Your slot has been canceled !!';
            parkingSlotsContainer.innerHTML = ''; // Remove slots display
        }
    }

    updateTimer();
});
