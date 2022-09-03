// Test Section

// let zob = document.getElementById('sec')
// let zboub = -9

// setInterval(() => {
//     zboub++
//     zob.style.transform = `rotate(${zboub*10}deg)`
// }, 1000);

// Test Section over

function setDate() {
    let date = new Date()

    let sec = date.getSeconds()

    let sechand = document.getElementById('sec')
    let secdeg = ((sec/60) * 360) - 90
    sechand.style.transform = `rotate(${secdeg}deg)`

    let min = date.getMinutes()

    let minhand = document.getElementById('min')
    let mindeg = ((min/60) * 360) - 90
    minhand.style.transform = `rotate(${mindeg}deg)`

    let hr = date.getHours()

    let hrhand = document.getElementById('hr')
    let hrdeg = ((hr/12) * 360) - 90
    hrhand.style.transform = `rotate(${hrdeg}deg)`

    console.log(sec);
    console.log(min);
    console.log(hr);
}


setInterval(setDate, 1000);