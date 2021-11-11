/*function Kullanici(id, isim, soyisim) {
    this.id = id;
    this.isim = isim;
    this.soyisim = soyisim
}

const gelenVeriler = {
    idler: [1, 2, 3, 4, 5, 6],
    isimler: ["Max", "Max", "Max", "Max", "Max", "Max"],
    soyisimler: ["Mustermann", "Mustermann", "Mustermann", "Mustermann", "Mustermann", "Mustermann"],
}

const kullanicilar = [];

for (let i = 0; i < gelenVeriler.idler.length; i++) {
    let id = gelenVeriler.idler[i];
    let isim = gelenVeriler.isimler[i];
    let soyisim = gelenVeriler.soyisimler[i];
    const objemiz = new Kullanici(id, isim, soyisim);

    kullanicilar.push(objemiz);
}

console.log(kullanicilar); */

//new Person diye array ac sonra function Person() { this.id} yaz!
function kullaniciEkle() {

    let i = 1;
    i++;
    let id = i;
    var isim = document.getElementById("isim").value;
    var soyisim = document.getElementById("soyisim").value;

    let text = "";

    text += id + ". " + isim + ", " + soyisim + "<br>";

    document.getElementById("liste").innerHTML += text;
}