// 1. ТАЙМЕР ЛОГИКАСЫ
function updateTimer() {
    // 26 Наурыз 2026, 18:45:00
    const eventDate = new Date("March 16, 2026 19:00:00").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        let display = "";
        if (days > 0) display += days + "к ";
        display += hours.toString().padStart(2, "0") + ":" + 
                   mins.toString().padStart(2, "0") + ":" + 
                   secs.toString().padStart(2, "0");
        
        document.getElementById("countdown").innerText = display;
    } else {
        document.getElementById("countdown").innerText = "Ас болсын! ✨";
    }
}

// Таймерді іске қосу
setInterval(updateTimer, 1000);
updateTimer();

// 2. МУЗЫКА ЛОГИКАСЫ
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicControl');
const musicIcon = document.getElementById('musicIcon');
let isPlaying = false;

musicBtn.addEventListener('click', function() {
    if (isPlaying) {
        music.pause();
        musicIcon.innerHTML = "🔇";
    } else {
        music.play().catch(e => console.log("Музыканы қолмен қосу керек"));
        musicIcon.innerHTML = "🎵";
    }
    isPlaying = !isPlaying;
});
// ... Ескі таймер мен музыка кодтары осы жерде қалады ...

// 3. "ЖАУЫП ТҰРҒАН ЖҰЛДЫЗДАР МЕН АЙЛАР" АНИМАЦИЯСЫН ҚҰРУ
function createParticles() {
    const container = document.body;
    const particleCount = 30; // Жұлдыздар саны
    const icons = ['✨', '⭐', '🌙']; // Қандай икондар қолданылады

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Кездейсоқ иконды таңдау
        particle.innerText = icons[Math.floor(Math.random() * icons.length)];
        
        // Кездейсоқ позиция мен жылдамдық
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2-ден 5 секундқа дейін
        particle.style.opacity = Math.random() * 0.5 + 0.3; // Мөлдірлік
        particle.style.fontSize = (Math.random() * 10 + 10) + 'px'; // Өлшемі (10-20px)

        container.appendChild(particle);
        
        // Анимация аяқталғаннан кейін элементті өшіру (ресурсты үнемдеу)
        setTimeout(() => {
            particle.remove();
        }, parseFloat(particle.style.animationDuration) * 1000);
    }
}

// Анимацияны әр 500мс сайын жаңа бөлшектермен толтырып тұру
setInterval(createParticles, 500);
createParticles(); // Басында бір рет іске қосу