

var formNum = 0,arrRelations = [];
function newRelation() {
let i=0;
    while(i!=2) {
			i++;
			var newIn = 'newRelation-input-' + formNum++;
			var input = document.createElement("input");
		        input.type = "text";
				input.id = newIn;	
			document.getElementById("newRelation").appendChild(input);
    }
    
}
function inputGet() {
    var d2Arr = [];
    for (i = 0; i < formNum; i++) {
        d2Arr.push(document.getElementById(`newRelation-input-${i}`).value);
        if (i % 2 != 0) {arrRelations.push(d2Arr); d2Arr = [];
         }
     }
	topsort(arrRelations);
}


function topsort(array) {
       var length = 0, finalArray = [], listPred = {};

        for(var i in array) {
                if(listPred[array[i][0]] == null) {
                        listPred[array[i][0]] = 0;
                        length++; }
                
                if(listPred[array[i][1]] == null) {
                        listPred[array[i][1]] = 1;
                        length++;} else {
                        listPred[array[i][1]]++;
              }
      }
        
      while(length > 0) {
             for(var i in listPred) {
                        if(listPred[i] == 0) {
                          finalArray.push(i);  
                          for(var j in array) {
                                if(array[j][0] === i) {
                                      listPred[array[j][1]]--; }
                                }
                                
                                delete listPred[i];
                                length--;
                      }
              }
       }
        
document.getElementById("ergbnis").innerHTML = finalArray.toString();
}
