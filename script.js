// Simulate username availability check (client-side for demo)
function checkUsername() {
    const username = document.getElementById('usernameInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (!username) {
        resultDiv.innerHTML = '<p class="text-red-500">Please enter a username.</p>';
        return;
    }

    resultDiv.innerHTML = '<p class="text-yellow-500">Checking...</p>';

    // Simulated API call (replace with real API for production)
    setTimeout(() => {
        const platforms = ['Twitter', 'Instagram', 'TikTok', 'YouTube'];
        let resultHTML = '<h4 class="text-2xl font-semibold mb-4">Results:</h4>';

        platforms.forEach(platform => {
            const isAvailable = Math.random() > 0.5; // Random availability for demo
            resultHTML += `
                <p>${platform}: 
                    <span class="${isAvailable ? 'text-green-500' : 'text-red-500'}">
                        ${isAvailable ? 'Available' : 'Taken'}
                    </span>
                </p>`;
        });

        resultDiv.innerHTML = resultHTML;
    }, 1000);
}

// Pop-Up Ad Logic (Show after 5 seconds)
setTimeout(() => {
    document.getElementById('popupAd').classList.remove('hidden');
}, 5000);

function closePopup() {
    document.getElementById('popupAd').classList.add('hidden');
}

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
