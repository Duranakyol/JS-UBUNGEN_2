var iconApple = document.getElementById("iconApple");
var iconWindows = document.getElementById("iconWindows");
var iconUbuntu = document.getElementById("iconUbuntu");
var iconAndroid = document.getElementById("iconAndroid");

var appleBox = document.getElementById("appleBox");
var windowsBox = document.getElementById("windowsBox");
var ubuntuBox = document.getElementById("ubuntuBox");
var androidBox = document.getElementById("androidBox");


function apple() {

    iconApple.style.textDecoration = "line-through";

    for (i = 0; i < 2; i++) {
        appleBox.innerHTML += "<i class = 'fab fa-apple'></i>";
    }
}

function windows() {

    iconWindows.style.textDecoration = "line-through";

    for (i = 0; i < 1; i++) {
        windowsBox.innerHTML += "<i class = 'fab fa-windows'></i>";
    }
}

function ubuntu() {

    iconUbuntu.style.textDecoration = "line-through";

    for (i = 0; i < 4; i++) {
        ubuntuBox.innerHTML += "<i class = 'fab fa-ubuntu'></i>";
    }
}

function android() {

    iconAndroid.style.textDecoration = "line-through";

    for (i = 0; i < 6; i++) {
        androidBox.innerHTML += "<i class = 'fab fa-android'></i>";
    }
}