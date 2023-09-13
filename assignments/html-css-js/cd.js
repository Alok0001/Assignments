// Selecting elements
const targetDateTimeInput = document.getElementById('targetDateTime');
const startButton = document.getElementById('startButton');
const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

// Function to update the countdown timer
function updateCountdown() {
    const targetDateTime = new Date(targetDateTimeInput.value).getTime();
    const currentTime = new Date().getTime();
    const timeRemaining = targetDateTime - currentTime;

    if (timeRemaining <= 0) {
        daysDisplay.textContent = '0';
        hoursDisplay.textContent = '0';
        minutesDisplay.textContent = '0';
        secondsDisplay.textContent = '0';
        clearInterval(interval);
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysDisplay.textContent = days;
    hoursDisplay.textContent = hours;
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
}

let interval;

// Event listener for the start button
startButton.addEventListener('click', () => {
    clearInterval(interval); // Clear any existing intervals
    updateCountdown(); // Update immediately
    interval = setInterval(updateCountdown, 1000); // Update every second
});
