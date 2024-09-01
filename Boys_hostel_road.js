document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('button-container');
    for (let i = 1; i <= 20; i++) {
        const button = document.createElement('button');
        button.textContent = `Slot ${i}`;
        button.id = `slot-${i}`;
        button.onclick = function() { selectSlot(i); };
        container.appendChild(button);
    }

    let selectedSlot = null;

    function selectSlot(slot) {
        if (selectedSlot) {
            document.getElementById(`slot-${selectedSlot}`).classList.remove('selected');
        }
        
        if (selectedSlot === slot) {
            selectedSlot = null;
            document.getElementById('submit-btn').style.display = 'none';
        } else {
            selectedSlot = slot;
            document.getElementById(`slot-${slot}`).classList.add('selected');
            document.getElementById('submit-btn').style.display = 'block';
        }
    }

    document.getElementById('submit-btn').addEventListener('click', function() {
        if (selectedSlot !== null) {
            window.location.href = `Boys_hostel_confirmation.html?slot=${selectedSlot}`;
        }
    });
});
