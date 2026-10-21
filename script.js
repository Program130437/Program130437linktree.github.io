// --- Button Link Logic ---
document.querySelectorAll('.my-button').forEach(button => {
    button.addEventListener('click', function() {
        const targetURL = this.getAttribute('data-encode-url');
        if(targetURL) {
            window.open(targetURL, '_blank');
        }
    });
});

// --- Theme Toggle Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
if(themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggleBtn.querySelector('i');

        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// --- Ocean Animation Logic ---
function createOceanElements() {
    const ocean = document.getElementById('ocean');
    if (!ocean) return;

    // Generate 25 random glassy bubbles
    for (let i = 0; i < 25; i++) {
        let bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        let size = Math.random() * 30 + 10; 
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 7 + 5}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        
        ocean.appendChild(bubble);
    }

    // Generate 10 Goldfish and Tropical Fish
    const fishEmojis = ['🐟', '🐠', '🐡']; 
    for (let i = 0; i < 10; i++) {
        let fish = document.createElement('div');
        fish.classList.add('fish');
        fish.innerText = fishEmojis[Math.floor(Math.random() * fishEmojis.length)];
        
        fish.style.top = `${Math.random() * 80 + 10}vh`;
        fish.style.animationDuration = `${Math.random() * 13 + 12}s`;
        fish.style.animationDelay = `${Math.random() * 10}s`;
        
        // Make half the fish swim reverse (right to left)
        if (Math.random() > 0.5) {
            fish.classList.add('reverse');
        }
        
        ocean.appendChild(fish);
    }
}

// Initialize ocean graphics
createOceanElements();