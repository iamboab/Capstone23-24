function startTime() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const time = h + ":" + m + ":" + s;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    setTimeout(startTime, 1000);
}
startTime();