function createButtons() {
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');
    
    for (let i = 1; i <= 12; i++) {
        createButton(i, row1);
        createButton(i + 12, row2);
    }
}

function createButton(number, container) {
    const button = document.createElement('button');
    button.textContent = `S ${number}`;
    button.classList.add('button');
    button.addEventListener('click', function() {
        handleButtonClick(button, number);
    });
    container.appendChild(button);
}

let selectedSlot = null;

function handleButtonClick(button, number) {
    // Remove selection from all buttons
    document.querySelectorAll('.button').forEach(b => {
        b.classList.remove('selected');
        b.disabled = false;
    });

    // Select the clicked button
    button.classList.add('selected');
    selectedSlot = number;
    document.getElementById('submitBtn').disabled = false;
}

document.getElementById('submitBtn').addEventListener('click', function() {
    if (selectedSlot !== null) {
        window.location.href = `gandhi_road_confirmation.html?slot=${selectedSlot}`;
    }
});

window.onload = createButtons;
