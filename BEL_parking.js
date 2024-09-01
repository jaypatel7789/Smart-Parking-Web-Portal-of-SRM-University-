document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('parking-grid');
    const submitButton = document.getElementById('submit-booking');
    const slotsPerRow = [10, 10, 7, 10, 6, 8, 7, 10, 8];
    let selectedSlotNumber; // Variable to store the selected slot number

    // Function to clear all selected slots
    const clearSelectedSlots = () => {
        document.querySelectorAll('.parking-slot.booked').forEach(slot => {
            slot.classList.remove('booked'); // Remove 'booked' class to reset the slot
        });
    };

    const updateSubmitButtonVisibility = () => {
        // If any slot is booked, show the submit button, otherwise hide it
        const anySlotBooked = document.querySelector('.parking-slot.booked');
        submitButton.style.display = anySlotBooked ? 'block' : 'none';
    };

    slotsPerRow.forEach((slots, rowIndex) => {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('parking-row');
        for (let slot = 1; slot <= slots; slot++) {
            const slotNumber = rowIndex * 10 + slot; // Adjust to correctly reflect slot numbering
            const button = document.createElement('button');
            button.id = `slot-${slotNumber}`;
            button.textContent = `Slot ${slotNumber}`;
            button.classList.add('parking-slot');
            button.addEventListener('click', function() {
                clearSelectedSlots(); // Clear any previously booked slot
                this.classList.add('booked'); // Mark the current slot as booked
                selectedSlotNumber = slotNumber; // Store the selected slot number
                updateSubmitButtonVisibility(); // Update submit button visibility
            });
            rowDiv.appendChild(button);
        }
        grid.appendChild(rowDiv);
    });

    submitButton.addEventListener('click', function() {
        if (selectedSlotNumber) {
            // Redirect to confirmation page with the selected slot number in the query string
            window.location.href = `BEL_confirmation.html?slot=${selectedSlotNumber}`;
        } else {
            alert('Please select a slot before submitting.');
        }
    });
});
