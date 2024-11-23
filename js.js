setInterval(() => {
    const now = new Date();
    const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 13);
    const timeDiff = targetTime - now;
    const secondsDiff = Math.floor(timeDiff / 1000);

    const hours = Math.floor(secondsDiff / 3600);
    const minutes = Math.floor((secondsDiff % 3600) / 60);
    const seconds = secondsDiff % 60;

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.querySelector("#time-two").textContent = formattedTime;
}, 1000);
