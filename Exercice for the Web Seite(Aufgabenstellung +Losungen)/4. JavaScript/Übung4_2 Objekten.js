
function Person(name, autos) {
    this.name = name;
    this.autos = autos;
}

function Auto(matrikel) {
    this.matrikel = matrikel;
}

function conflict(Persons, auto) {
    var besitzer = 0;
    Persons.forEach((per)=>{
       if (per.autos.includes(auto.matrikel)) {
           besitzer++;
       }
    })  

    if(besitzer > 1) 
    console.log("Das Auto mit der kennzeichen "+ auto.matrikel + " hat Mehrere besitzer");
    else
     console.log("Das Auto mit der kennzeichen "+ auto.matrikel + "  hat ein oder kein besitzer");
}

var persons = [new Person("omar", ["11", "10", "2"]), new Person("guella", ["11", "2", "3"])]
var auto = new Auto("11");