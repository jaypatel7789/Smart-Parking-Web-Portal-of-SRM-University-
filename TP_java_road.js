document.addEventListener('DOMContentLoaded', function() {
    const parkingSlotsContainer = document.querySelector('.parking-slots');
    let selectedSlot = null;

    // Dynamically create parking slot buttons
    for (let i = 1; i <= 28; i++) {
        const slotButton = document.createElement('button');
        slotButton.classList.add('slot');
        slotButton.id = `slot${i}`;
        slotButton.textContent = `S ${i}`;
        parkingSlotsContainer.appendChild(slotButton);

        // Attach event listener to each slot button
        slotButton.addEventListener('click', function() {
            // Deselect previous selected slot if any
            if (selectedSlot) {
                selectedSlot.classList.remove('selected');
            }
            selectedSlot = slotButton; // Update the selected slot
            selectedSlot.classList.add('selected');
            document.getElementById('submitBtn').style.display = 'block'; // Show the submit button
        });
    }

    // Add functionality to the submit button
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function() {
        if (selectedSlot) {
            // Pass the selected slot number to the confirmation page
            const selectedSlotNumber = selectedSlot.textContent.replace('S ', '');
            window.location.href = `TP_java_road_confirmation.html?slot=${selectedSlotNumber}`;
        }
    });
});
