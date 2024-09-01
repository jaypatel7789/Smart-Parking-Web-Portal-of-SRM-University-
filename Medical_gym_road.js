document.addEventListener('DOMContentLoaded', function() {
    const parkingSlotsContainer = document.querySelector('.parking-slots');
    const submitBtn = document.getElementById('submitBtn');
    let selectedSlot = null;

    // Dynamically create 15 parking slot buttons
    for (let i = 1; i <= 15; i++) {
        const slotButton = document.createElement('button');
        slotButton.classList.add('slot');
        slotButton.id = `slot${i}`;
        slotButton.textContent = `Slot ${i}`;
        parkingSlotsContainer.appendChild(slotButton);

        slotButton.addEventListener('click', function() {
            // Deselect previous selected slot if any
            if (selectedSlot) {
                selectedSlot.classList.remove('selected');
            }
            slotButton.classList.add('selected'); // Highlight the selected slot
            selectedSlot = slotButton; // Keep track of the selected slot
            submitBtn.style.display = 'block'; // Show submit button
        });
    }

    submitBtn.addEventListener('click', function() {
        if (selectedSlot) {
            // Redirect to confirmation page with the selected slot number
            const slotNumber = selectedSlot.textContent.replace('Slot ', '');
            window.location.href = `Medical_gym_road_confirmation.html?slot=${slotNumber}`;
        }
    });
});
