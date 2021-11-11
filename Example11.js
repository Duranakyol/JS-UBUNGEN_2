/*$(function() {
    
    $("#btn").click(function(){
        let input = document.getElementById("input");
        let yazi = document.getElementById("yazi");
        yazi.innerHTML += input.value + "<br>";
    });

});


$(function() {
    $('#input').on('keyup', 'input', function() {
      $(".yazi").text("Hallo");
    });
  });
*/

// wenn man enter geklickt
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});


function ayir() {

    let worts = input.value.split(" ");
    let yazi = document.getElementById("yazi");

    for (let i = 0; i < worts.length; i++) {
        yazi.innerHTML += i + 1 + ". " + worts[i] + "<br>";
    }
}

const insan1 = {
    isim: "Max",
    soyisim: "Mustermann",

    tamIsimAl: function() {
        return this.isim + " " + this.soyisim;
    },

    get tamIsim() {
        return this.isim + " " + this.soyisim;
    }
}

console.log(insan1.tamIsimAl());
console.log(insan1.tamIsim);


function Insan(ad, soyad, yas) {
    this.isim = ad;
    this.soyisim = soyad;
    this.yas = yas;
    this.tamIsim = function() {
        return ad + " " + soyad;
    };
}

const insan1 = new Insan("Max", "Mustermann", 22);
const insan2 = new Insan("Duran", "Akyol", 26);
insan1.tamIsim();

// en basit yapim sekli budur. ilk harf büyük!e