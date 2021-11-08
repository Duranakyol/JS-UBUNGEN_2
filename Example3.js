var i = 0;
var images = [];
var time = 2000;

images[0] = 'flugzeug1.jpg';
images[1] = 'flugzeug2.jpg';
images[2] = 'flugzeug3.jpg';

function imageChange() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("imageChange()", time);
}
aktuell = 0;

function back() {
    aktuell++;
    if (aktuell == 1) {
        document.slide.src = images[2];
    } else if (aktuell == 2) {
        document.slide.src = images[1];
    } else if (aktuell == 3) {
        document.slide.src = images[0];
    } else {
        aktuell = 0;
    }
}

function prev() {
    aktuell++;
    if (aktuell == 1) {
        document.slide.src = images[1];
    } else if (aktuell == 2) {
        document.slide.src = images[2];
    } else if (aktuell == 3) {
        document.slide.src = images[0];
    } else {
        aktuell = 0;
    }
}