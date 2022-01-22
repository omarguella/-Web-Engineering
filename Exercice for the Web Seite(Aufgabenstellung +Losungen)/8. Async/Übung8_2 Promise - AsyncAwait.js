       
(async _=> {
	   var texta
        var textb 

                await Promise.all([
                    (async _=> a = await readFile('.A.txt'))(),
                    (async _=> b = await readFile('.B.txt'))()
                ]);

       
            var maxlen = (arrayA.length >= arrayB.length) ? maxlen = arrayA.length : maxlen = arrayB.length;

            for (var i = 0; i < maxlen; i++) {
                document.getElementById("feld").textContent += arrayA[i] + arrayB[i];
            }
        });
		         async function readFile(text){
                let importText = await fetch(text);
                let newText = await importText.text();
                return newText.split('\r\n');
            }
