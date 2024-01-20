let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let pmam = document.querySelector(".ampm");

function liveUpdate(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let ampm = (hours >= 12) ? "PM" : "AM";
    let nowTime = (hours % 12 === 0) ? 12 : `0${hours % 12}`;
    console.log(ampm);
    console.log(nowTime);

    hour.innerHTML = nowTime;
    pmam.innerHTML = ampm;
    minute.innerHTML = (minutes >= 10 ? minutes : `0${minutes}`)
    second.innerHTML = (seconds >= 10 ? seconds : `0${seconds}`)
    
}

setInterval(() => {
    liveUpdate();
}, 1000);

liveUpdate();