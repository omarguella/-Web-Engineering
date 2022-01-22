var texta = fetch('A.txt');
        var textb = fetch('B.txt');

        Promise.all([
            arrayA.then(x => x.text()).split("'\r\n"),
            ArrayB.then(x => x.text()).split("'\r\n")
        ]).then(() => {
            var maxlen = (arrayA.length >= arrayB.length) ? maxlen = arrayA.length : maxlen = arrayB.length;

            for (var i = 0; i < maxlen; i++) {
                document.getElementById("feld").textContent += arrayA[i] + arrayB[i];
            }
        });