function topsort(array) {


    var Knoten = [];
    var pack = [];
    var gesehen = [];

    for (var k = 0; k < array.length; k++) {
        if (Knoten.indexOf(array[k][0]) < 0) Knoten.push(array[k][0]);
        if (Knoten.indexOf(array[k][1]) < 0) Knoten.push(array[k][1]);
    }

    Knoten.forEach(function (knote) {
        if (gesehen.indexOf(knote) < 0) {
            sort(knote);
        }
    });

    function sort(knote) {
        gesehen.push(knote);
        array.forEach(function (Kante) {
            if (gesehen.indexOf(Kante[1]) < 0 && Kante[0] == knote) {
                sort(Kante[1]);
            }
        });
        pack.push(knote);
    }
    return pack.reverse();
}

class Vorrang {
    [Symbol.iterator]() {
        return this.array.values()
    }
    constructor(array) {
        this.array = topsort(array);
    }


}



try {

    var text = "schlafen,studieren,essen,studieren,studieren,prüfen";
    console.log(text);

    var array = text.split(",").map(String);
    if ((array.length % 2) != 0) {
        throw new Error(' Geben Sie bitte eine Komplette Vorrangrelationen');
    }

    var gfg = new Array(array.length / 2);


    // Loop to create 2D array using 1D array
    for (var i = 0; i < gfg.length; i++) {
        gfg[i] = new Array(2);
    }

    var h = 0;

    // Loop to initialize 2D array elements.
    for (let i = 0; i < array.length / 2; i++) {
        for (let j = 0; j < 2; j++) {
            gfg[i][j] = array[h++];
        }
    }

    const studentenLeben = new Vorrang(gfg);

    var final = [];
    for (const next of studentenLeben) {
        final.push(next);
    }

    console.log(final);

} catch (err) {

    console.log(err.message);
}




const studentenLeben = new Vorrang([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
]);

//TEST
const arrayTest = new Vorrang([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
]);
var arrayfinal = [];
for (const next of arrayTest) {
    arrayfinal.push(next);
}
var ausgabe = ["schlafen", "essen", "studieren", "prüfen"];
for (let i = 0; i < arrayfinal.length; i++) {

    console.assert(ausgabe[i] === arrayfinal[i], `diese beide Werte ${ausgabe[i]} und ${arrayfinal[i]} sind nicht gleich`);
}


//Proxy

const generator = new Proxy(studentenLeben.gen, {
    apply(target, thisArg, argumentList) {
        console.log(studentenLeben.getSize());
        return target(studentenLeben);
    }
});

while (true) {
    tab = generator().next();
    if (tab["done"] !== false) {
        break;
    }
    console.assert(final.includes(out["value"]));
    console.assert(ausgabe[0] === out["value"]);
    testArraySequence.splice(0, 1);
}