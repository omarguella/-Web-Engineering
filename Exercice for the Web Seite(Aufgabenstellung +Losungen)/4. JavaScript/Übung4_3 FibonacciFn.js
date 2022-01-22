
function fibonacci(n) {
    var tabelle = [1,1]
    for (let i=2; i < n; i++) {
        tabelle[i] = tabelle[i-1] + tabelle[i-2];
        console.log(tabelle[i]);
    }
    return tabelle;
}

function fibonacciMaxSafe(n) {
    var tabelle = [1,1]
    const x = Number.MAX_SAFE_INTEGER;
    var y = 0;
    for (let i=2; i < n; i++) {
        tabelle[i] = tabelle[i-1] + tabelle[i-2]
        if(tabelle[i]>x){ 
            y=tabelle[i-1];
            console.log( "the number is  " + y + "  and in der Folge  "+ i--); 
            break;
        }
    }  
}