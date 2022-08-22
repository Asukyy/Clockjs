const secondsHands = document.getElementById('seconds');
const minutesHands = document.getElementById('minutes');
const hoursHands = document.getElementById('hours');

const getTime = () => {

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6

    secondsHands.style.transform = `rotate(${seconds * timeInterval}deg)`;
    minutesHands.style.transform = `rotate(${minutes * timeInterval}deg)`;
    hoursHands.style.transform = `rotate(${hours * timeInterval}deg)`;

    //affiche l'heure
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerHTML = time;

    
}

setInterval(getTime, 100);