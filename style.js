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

function myFunction() {
    document.getElementById("color_changer").style.color = "red";
  }

function mouseOver() {
    img.src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c1/Featherknight_Pengu_Tier_3.png/revision/latest?cb=20211004163717"
    
    
}
