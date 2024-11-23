setInterval(() => {
    const now = new Date();
    const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 13);
    const timeDiff = targetTime - now;
    const secondsDiff = Math.floor(timeDiff / 1000);

    let hours = Math.floor(secondsDiff / 3600);
    let minutes = Math.floor((secondsDiff % 3600) / 60);
    let seconds = secondsDiff % 60;

    if (secondsDiff < 0) {
        hours = Math.abs(hours);
        minutes = Math.abs(minutes);
        seconds = Math.abs(seconds);
        const formattedTime = `-00:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.querySelector("#time-two").textContent = formattedTime;
    } else {
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.querySelector("#time-two").textContent = formattedTime;
    }
}, 1000);
