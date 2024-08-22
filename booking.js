document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (date && time) {
        // Add code to handle the form submission, e.g., send data to your server
        alert(`Requested schedule: ${date} at ${time}`);
    } else {
        alert('Please select a date and time.');
    }
});
