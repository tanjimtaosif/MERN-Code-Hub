// Select the Navbar heart count
const navbarHeartCount = document.getElementById('heart-count');

// Select all heart icons in cards
const heartIcons = document.querySelectorAll('.heart-icon');

// Start count from the number already in Navbar
let count = parseInt(navbarHeartCount.textContent) || 0;

// Add click event for each heart icon
heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        count++;
        navbarHeartCount.textContent = count;
        icon.classList.add('text-red-500'); // turn heart red
    });
});

// CALL BUTTON FEATURE
const coinCountEl = document.getElementById('coin-count');
const callButtons = document.querySelectorAll('.call-btn');
const callHistoryList = document.getElementById('call-history');
const clearHistoryBtn = document.getElementById('clear-history');

let coins = parseInt(coinCountEl.textContent) || 0;

callButtons.forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.bg-white.border');
        const serviceName = card.querySelector('h1.text-lg').textContent;
        const serviceNumber = card.querySelector('h1.text-xl').textContent;

        if (coins < 20) {
            alert('Not enough coins to make a call. You need at least 20 coins.');
            return;
        }

        coins -= 20;
        coinCountEl.textContent = coins;

        alert(`Calling ${serviceName} at ${serviceNumber}`);
        addToCallHistory(serviceName, serviceNumber);
    });
});


// ADD TO CALL HISTORY
function addToCallHistory(serviceName, serviceNumber) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const li = document.createElement('li');
    li.className = "border-b pb-2";
    li.innerHTML = `
    <p class="font-medium">${serviceName}</p>
    <p>Number: ${serviceNumber}</p>
    <p class="text-gray-500 text-xs">Time: ${time}</p>
  `;
    callHistoryList.appendChild(li);
}

// CLEAR HISTORY BUTTON
clearHistoryBtn.addEventListener('click', () => {
    callHistoryList.innerHTML = '';
});

// COPY BUTTON FEATURE
const copyButtons = document.querySelectorAll('.copy-btn');
const copyCountEl = document.getElementById('copy-count');
let copyCount = parseInt(copyCountEl.textContent) || 0;

copyButtons.forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.bg-white.border');
        const hotlineNumber = card.querySelector('h1.text-xl').textContent;

        // Copy number to clipboard
        navigator.clipboard.writeText(hotlineNumber).then(() => {
            alert(`Hotline number ${hotlineNumber} copied to clipboard!`);

            // Increase copy count
            copyCount++;
            copyCountEl.textContent = copyCount;
        });
    });
});
