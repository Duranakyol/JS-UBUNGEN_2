/*
const person = {
    vorname: "Max",
    nachname: "Mustermann",
    fullname: function() {
        return this.vorname + " " + this.nachname;
    }
}

let name = person.fullname();

const person2 = {
    vorname: "Max",
    nachname: "Mustermann",
    get fullname2() {
        return this.vorname + " " + this.nachname;
    }

}

let name2 = person2.fullname2;

const person3 = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 25,

    setAlter: function(wieAlt) {
        if (wieAlt > 150 || wieAlt < 0) {
            console.log("Das ist nicht realistich!");
        } else {
            this.alter = wieAlt;
        }
    },

    set alterSet(wieAlt) {
        if (wieAlt > 150 || wieAlt < 0) {
            console.log("Das ist nicht realistich!");
        } else {
            this.alter = wieAlt;
        }
    }
}

person.alter = 9999; // yazarsan realistich degil yazar!
person.alterSet = 50; //beide function eigentlich gleich!
person.setAlter(50);


switch (x) {
    case 5:
        console.log("x ist 5");
        console.log("das ist klein");
        break;
    case 10:
        console.log("x ist 10");
        console.log("das ist normal");
        break;
    case 15:
        console.log("x ist 15");
        console.log("das ist groß");
        break;
    default:
}

for (let y = 0; y < 15; y++) {
    console.log("Runde: " + y);

    if (y == 8) {
        console.log("STOP");
        break; //break bu sekilde de kullanilabilir!
    }
}

let alter = 19;
let nationalität = "türkisch";

if (alter == 19) {
    switch (nationalität) {
        case "deustch":
            console.log("deutsch und jung!");
            break;
        case "türkisch":
            console.log("türkisch und jung!");
            break;
    }
} else if (alter == 50) {
    switch (nationalität) {
        case "deustch":
            console.log("deustch und alt!");
            break;
        case "türkisch":
            console.log("türkisch und alt!");
            break;
        default:
    }
}

switch (alter) {
    case 19:
        break;
    case 25:
        break;
    case 29:
        break;
    case 50:
        break;
}

const myClub = {
    namen: "GALATASARAY",
    gegründet: 1905,
    präsident: "BURAK ELMAS"
}

for (x in myClub) {
    console.log(myClub[x]);
} // burada for in ile property ve wert cekmeyi ögrendik!

for (x in myClub) {
    console.log(x + ": " + myClub[x]);
}

const land = "Deutschland";

for (x of land) {
    console.log(x);
}

const meinArray = [12, 24, 36, 48, 72, 84, 96];

for (x of meinArray) {
    console.log(x);
}*/
function Person(id, vorname, nachname, alter) {
    this.id = id;
    this.vorname = vorname;
    this.nachname = nachname;
    this.alter = alter;
}

const personen = {
    id: [1, 2, 3, 4],
    vorname: ["Max", "Martin", "Anton", "Alex"],
    nachname: ["Müller", "Scheuer", "Mustermann", "Musterfrau"],
    alter: [15, 19, 25, 60],
}

for (x in personen) {

    const div = document.createElement("div");
    div.classList.add("spalte");

    const div2 = document.createElement("div");
    div2.innerHTML = x;

    div.appendChild(div2);

    let arr = personen[x];
    for (y of arr) {
        // daha kullanisli bir sekilde icindekileri yazdirabiliriz!
        const div3 = document.createElement("div");
        div3.innerHTML = y;
        div.appendChild(div3);
    }
    document.body.appendChild(div);
}

for (x in personen) {

}

const arrayPerson = []; // bu cok önemli basta bos olmasi lazim.

for (let i = 0; i < personen.id.length; i++) {
    let id = personen.id[i];
    let vorname = personen.vorname[i];
    let nachname = personen.nachname[i];
    let alter = personen.alter[i];

    const p = new Person(id, vorname, nachname, alter);
    console.log(p);
    arrayPerson.push(p);
}