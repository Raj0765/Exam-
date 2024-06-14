let swipeMessage = document.getElementById('swipe-message');
let timetable = document.getElementById('timetable');

let startY;

window.addEventListener('touchstart', function (event) {
    startY = event.touches[0].clientY;
}, false);

window.addEventListener('touchmove', function (event) {
    let endY = event.touches[0].clientY;
    if (startY > endY + 50) {  // Detecting a swipe up gesture
        swipeMessage.style.opacity = '0';
        setTimeout(() => {
            swipeMessage.classList.add('hidden');
            timetable.classList.remove('hidden');
            timetable.classList.add('visible');
        }, 500);
    }
}, false);
