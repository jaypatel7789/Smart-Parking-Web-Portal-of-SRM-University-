document.getElementById('bookingForm').onsubmit = function(e) {
    e.preventDefault(); // Prevent the default form submission
    var selectedPlace = document.getElementById('submitbtn').value;
    window.location.href = selectedPlace; // Redirect to the selected page
};
