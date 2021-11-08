function Auto(mrk, mdl, bj) {
    this.marka = mrk;
    this.modell = mdl;
    this.baujahr = bj;

    this.starten = function() {
        console.log("Auto " + this.marka + " gestartet!");
    }
}

const auto1 = new Auto("BMW", "5.20", "2017");

console.log(auto1.baujahr); // 2017 gelir.
auto1.starten();

const meinObjekt = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 22,
    job: "Web Entwickler",
    nameAusgeben: function(param1) {
        console.log(this.vorname + " " + this.nachname);
    },
    get ganzerName() {
        return this.vorname + " " + this.nachname;
    },
    fulllName: function() {
        return this.vorname + " " + this.nachname;
    },
    set neuerName(n) {
        let arr = n.split(" ");
        this.vorname = arr[0];
        this.nachname = arr[1];
    }
};



meinObjekt.neuerName = "MARTIN MÜLLER";
console.log(meinObjekt.vorname);

console.log(meinObjekt.ganzerName);
console.log(meinObjekt.fullName());
// basina get yazarsak parantez kullanmaya gerek kalmaz!









for (let x in meinObjekt) {
    console.log(meinObjekt[x]);
} // icinde ne varsa yazar.

meinObjekt.hobbys = "Basketball, Fußball";
meinObject["hobbys"] = "Fußball, Basketball";
Object.defineProperty(meinObjekt, "hobbys", "Schwimmen, Tischtennis");


delete meinObjekt.alter;

document.querySelector("button").onclick = meinObjekt.nameAusgeben;
let n = "max";
n = n.toUpperCase();
console.log(n); //büyük harf yazar


function Person(vn, nn, alt) {
    this.vorname = vn,
        this.nachname = nn,
        this.alter = alt
}

const p1 = new Person("Max", "Mustermann", "22");

console.log(p1);

p1.hobbys = "Fußball";

//Person.hobbys yazamazsin ama !
Person.prototype.nationality = "England";

const person1 = new Person("Max", "Mustermann");
console.log(person1);