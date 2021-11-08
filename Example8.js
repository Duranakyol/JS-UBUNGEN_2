/* let x = 5;
const objekt = document.getElementById("element");

$("#meinElement").hide();
$("#meinElement").text("Hallo");

objekt.innerHTML = "Hallo"; 

$("#meineId").hide(); //innerHTML yazamazsin!
$("#meineId").show();

$(document).ready(function() {
    alert("Die Seite hat geladen!");
});

//alltaki ile üssteki ayni!

$(document).ready(hatGeladen);

function hatGeladen() {
    console.log("Die Seite hat geladen!");
}
*/

$(function() {
    $("#meinBtn").click(function() {
        alert("Sie haben eine Button geklickt!");
    });
});

$(function() {
    const rictigerBenutzername = "admin";
    const richtigesPasswort = "keineAhnung";

    $(".login>button").click(function() {
        if ($(".bn").val() == richtigerBenutzername) {
            if ($(".pw").val() == richtigesPasswort) {
                $("#meldung").text("ERFOLGREICH EINGELOGGT!");
            } else {
                $("#meldung").text("Passwort ist falsch!");
            }
        } else {
            $("#meldung").text("Benutzername unbekannt!");
        }
    });
});

console.log("Hallo!");

$(function() {
    $("#meldung").hide();

    setTimeout(function() {
        $("#meldung").fadeIn("slow");
    });
});

$(function() {
    setInterval(function() {
        $("#meldung").fadeToggle();
    }, 500);
});