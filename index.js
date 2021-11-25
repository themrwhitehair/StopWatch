



let clockTenM = document.getElementById("tenM");
let clockMinutes = document.getElementById("minutes");
let clockTenS = document.getElementById("tenS");
let clockSeconds = document.getElementById("seconds");
let clockTenths = document.getElementById("tenths");
let clockHundredths = document.getElementById("hundredths");

let running = false;
let interval;

let tenM = 0;
let minutes = 0;
let tenS = 0;
let seconds = 0;
let tenths = 0;
let hundredths = 0;

let lapHundredths = 0
let lapTenths = 0
let lapSeconds = 0
let lapTenS = 0
let lapMinutes = 0
let lapTenM = 0


let lapArr = [];


function main() {
    hundredths += 1;
    lapHundredths += 1;
 
    //main timer

    if (hundredths >= 10) {
        hundredths = 0;
        tenths += 1;
    }
    if (tenths >= 10) {
        tenths = 0;
        seconds += 1;
    }
    if (seconds >= 10) {
        seconds = 0;
        tenS += 1;
    }
    if (tenS >= 6) {
        tenS = 0;
        minutes += 1;
    }
    if (minutes >= 10) {
        minutes = 0;
        tenM += 1;
    }
    if (tenM >= 10) {
        hundredths = 0;
        tenths = 0;
        seconds = 0;
        tenS = 0;
        minutes = 0;
        tenM = 0;
    }


    //lap timer


    if (lapHundredths >= 10) {
        lapHundredths = 0
        lapTenths += 1;
    }
    if (lapTenths >= 10) {
        lapTenths = 0
        lapSeconds += 1
    }
    if (lapSeconds >= 10) {
        lapSeconds = 0
        lapTenS += 1
    }
    if (lapTenS >= 6) {
        lapTenS = 0
        lapMinutes += 1
    }
    if (lapMinutes >= 10) {
        lapMinutes = 0
        lapTenM += 1
    }
    if (lapTenM >= 10) {
        lapHundredths = 0
        lapTenths = 0
        lapSeconds = 0
        lapTenS = 0
        lapMinutes = 0
        lapTenM = 0
    }






    clockTenM.innerHTML = tenM
    clockMinutes.innerHTML = minutes
    clockTenS.innerHTML = tenS
    clockSeconds.innerHTML = seconds
    clockTenths.innerHTML = tenths
    clockHundredths.innerHTML = hundredths

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
    if (running == true) {
        let newLap = document.getElementById("laps");
        newLap.innerHTML += "<li>" + lapTenM + lapMinutes + ":" +
                                     lapTenS + lapSeconds + ":" +
                                     lapTenths + lapHundredths + "</li>";
    
       lapHundredths = 0
       lapTenths = 0
       lapSeconds = 0
       lapTenS = 0
       lapMinutes = 0
       lapTenM = 0
    }

}





function reset() {
    document.getElementById("start").innerHTML = "start"
    running = false;
    clearInterval(interval)
    let clearLaps = document.getElementById("laps")
    clearLaps.innerHTML = ""

    clockTenM.innerHTML = 0
    clockMinutes.innerHTML = 0
    clockTenS.innerHTML = 0
    clockSeconds.innerHTML = 0
    clockTenths.innerHTML = 0
    clockHundredths.innerHTML = 0

    tenM = 0
    minutes = 0
    tenS = 0
    seconds = 0
    tenths = 0
    hundredths = 0

    lapHundredths = 0
    lapTenths = 0
    lapSeconds = 0
    lapTenS = 0
    lapMinutes = 0
    lapTenM = 0

}
