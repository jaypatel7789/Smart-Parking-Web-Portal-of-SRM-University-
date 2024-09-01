document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('parking-grid');
    const query = new URLSearchParams(window.location.search);
    const selectedSlotNumber = parseInt(query.get('slot'), 10);
    const bookingMessageElement = document.getElementById('booking-message');
    const timerMessageElement = document.getElementById('timer-message');
    const timeLeftElement = document.getElementById('time-left');

    const slotsPerRow = [10, 10, 7, 10, 6, 8, 7, 10, 8];
    let slotNumber = 1;
    slotsPerRow.forEach((slots, rowIndex) => {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('parking-row');
        for (let slot = 1; slot <= slots; slot++) {
            const button = document.createElement('button');
            button.id = `slot-${slotNumber}`;
            button.textContent = `Slot ${slotNumber}`;
            button.classList.add('parking-slot');
            if (slotNumber === selectedSlotNumber) {
                button.classList.add('booked');
                bookingMessageElement.textContent = `Your slot has been booked: Slot ${selectedSlotNumber}`;
                bookingMessageElement.style.display = 'block';
                timerMessageElement.style.display = 'block';
            }
            rowDiv.appendChild(button);
            slotNumber++;
        }
        grid.appendChild(rowDiv);
    });

    let time = 15 * 60; // 15 minutes in seconds
    const updateTimer = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timeLeftElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (time > 0) {
            time--;
            setTimeout(updateTimer, 1000);
        } else {
            alert('Your booking slot has been canceled!');
            // Redirect or handle cancellation as necessary
        }
    };

    updateTimer(); // Start the timer
});
