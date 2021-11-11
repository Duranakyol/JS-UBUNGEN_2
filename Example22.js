const span = document.getElementById("anzahl");
const textarea = document.getElementById("nachricht");

function aktualisieren(zahl) {
    span.innerHTML = zahl + " / 100";

    if (zahl >= 90) {
        span.style.color = "#A00";
    } else if (zahl >= 70) {
        span.style.color = "#700";
    } else if (zahl == 100) {
        span.style.color = "red";
    }
}

var app = new Vue({
    el: '#meinContainer',
    data: {
        inhaltContainer: "Hallo Vue JS!",
        inhaltH1: "Das ist die Überschrift"
    }
})