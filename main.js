function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    //formulas for the rotation of the hands

    const secondsDegrees = ((seconds / 60) * 360) + 90; 
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
