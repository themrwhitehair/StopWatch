



let clockTenM = document.getElementById("tenM")
let clockMinutes = document.getElementById("minutes")
let clockTenS = document.getElementById("tenS")
let clockSeconds = document.getElementById("seconds")
let clockTenths = document.getElementById("tenths")
let clockHundredths = document.getElementById("hundredths")

let running = false
let interval

let tenM = 0
let minutes = 0
let tenS = 0
let seconds = 0
let tenths = 0
let hundredths = 0

function main() {
    if (hundredths >= 10) {
        hundredths = 0
        tenths += 1;
    }
    if (tenths >= 10) {
        tenths = 0
        seconds += 1
    }
    if (seconds >= 10) {
        seconds = 0
        tenS += 1
    }
    if (tenS >= 6) {
        tenS = 0
        minutes += 1
    }
    if (minutes >= 10) {
        minutes = 0
        tenM += 1
    }
    if (tenM >= 10) {
        hundredths = 0
        tenths = 0
        seconds = 0
        tenS = 0
        minutes = 0
        tenM = 0
    }

    clockTenM.innerHTML = tenM
    clockMinutes.innerHTML = minutes
    clockTenS.innerHTML = tenS
    clockSeconds.innerHTML = seconds
    clockTenths.innerHTML = tenths
    clockHundredths.innerHTML = hundredths

    hundredths += 1
}



function start() {
    if (running == false) {
        interval = setInterval(main, 10)
        document.getElementById("start").innerHTML = "stop"
        running = true;
    } else {
        document.getElementById("start").innerHTML = "start"
        running = false;
        clearInterval(interval)
    }
}

function lap() {
    let newLap = document.getElementById("laps");
    newLap.innerHTML += "<li>" + tenM + minutes + ":" +
                                 tenS + seconds + ":" +
                                 tenths + hundredths + "</li>";
}


function reset() {
    document.getElementById("start").innerHTML = "start"
    running = false;
    clearInterval(interval)
    let clearLaps = document.getElementById("laps")
    clearLaps.innerHTML = ""

    tenM = 0
    clockTenM.innerHTML = 0
    minutes = 0
    clockMinutes.innerHTML = 0
    tenS = 0
    clockTenS.innerHTML = 0
    seconds = 0
    clockSeconds.innerHTML = 0
    tenths = 0
    clockTenths.innerHTML = 0
    hundredths = 0
    clockHundredths.innerHTML = 0


}
