const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const mainImg = document.getElementById('mainImg');
const buttonsContainer = document.querySelector('.buttons');

// "No" button interaction
let messageIndex = 0;
const messages = [
    "Are you sure?",
    "Really sure?",
    "Are you positive?",
    "Pookie please?",
    "Just think about it!",
    "If you say no, I will be sad...",
    "I will be very sad...",
    "I will be very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, please say yes! ❤️"
];

const images = [
    "assets/sad_bear_1.png",
    "assets/sad_bear_2.png",
    "assets/sad_bear_3.png",
    "assets/sad_bear_1.png",
    "assets/sad_bear_2.png",
    "assets/sad_bear_3.png",
    "assets/sad_bear_1.png",
    "assets/sad_bear_2.png",
    "assets/sad_bear_3.png",
    "assets/ask_valentine.png"
];

noBtn.addEventListener('click', () => {
    const currentMessage = messages[messageIndex];
    question.innerHTML = currentMessage;

    // Change image
    if (images[messageIndex]) {
        mainImg.src = images[messageIndex];
    }

    // Cycle to next message, loop back to start if at end
    messageIndex = (messageIndex + 1) % messages.length;

    // Optional: Make Yes button grow slightly to encourage clicking it
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.5}px`;
});

// "Yes" button click logic
yesBtn.addEventListener('click', () => {
    // 1. Trigger Confetti
    triggerConfetti();

    // 2. Change Image
    mainImg.src = 'assets/happy_valentine.png';
    mainImg.style.animation = 'none'; // Stop float
    setTimeout(() => {
        mainImg.style.animation = 'float 2s ease-in-out infinite'; // Faster happy float
    }, 10);

    // 3. Change Text
    question.innerHTML = 'Yay! I love you! <br> ❤️';
    question.classList.add('success-text');

    // 4. Hide Buttons
    buttonsContainer.style.display = 'none';

    // Remove the floating "No" button if it's elsewhere
    noBtn.style.display = 'none';
});

function triggerConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff758f', '#ff4d6d', '#ffffff']
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff758f', '#ff4d6d', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
