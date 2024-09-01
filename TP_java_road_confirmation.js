document.addEventListener('DOMContentLoaded', function() {
    const query = new URLSearchParams(window.location.search);
    const selectedSlotNumber = query.get('slot');
    const parkingSlotsContainer = document.getElementById('parking-slots');
    const confirmationMessage = document.getElementById('confirmation-message');
    const timeLeftElement = document.getElementById('time-left');

    confirmationMessage.textContent = `Your slot ${selectedSlotNumber} has been booked.`;

    for (let i = 1; i <= 28; i++) {
        const slotButton = document.createElement('button');
        slotButton.classList.add('slot');
        slotButton.textContent = i;
        slotButton.disabled = true; // Disable buttons as they are just for display now
        if (i.toString() === selectedSlotNumber) {
            slotButton.classList.add('selected');
        }
        parkingSlotsContainer.appendChild(slotButton);
    }

    let time = 15 * 60; // 15 minutes
    const updateTimer = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timeLeftElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (time > 0) {
            time--;
            setTimeout(updateTimer, 1000);
        } else {
            confirmationMessage.textContent = '!! OOPS Your slot has been canceled !!';
            // Optionally clear slots or redirect user
        }
    };

    updateTimer();
});
    