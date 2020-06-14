const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7000;
const breatheInOutTime = 0.4 * totalTime;
const holdTime = 0.2 * totalTime;

function breatheInOutAnimation() {
    text.innerHTML = 'Breathe in!';
    container.classList.add('grow');
    container.classList.remove('shrink');

    setTimeout(() => {
        text.innerHTML = 'Hold';
        setTimeout(() => {
            text.innerHTML = 'Breathe out!';
            container.classList.add('shrink');
            container.classList.remove('grow');
        }, holdTime);
    }, breatheInOutTime);
}

breatheInOutAnimation();

setInterval(breatheInOutAnimation, totalTime);