const deg = 6;
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let ss = day.getSeconds() * deg;

    sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000);