var Stoppworte = ["ab", "aber", "alle", "allem", "allen", "aller", "allerdings", "als", "also", "am", "an", "andere", "anderem", "anderen", "anderer", "andernfalls", "anders", "andersherum", "anfangs", "anhand", "anschließend", "ansonsten", "anstatt", "auch", "auf", "aufgrund", "aus", "außerdem", "befindet", "bei", "beide", "beim", "beispielsweise", "bereits", "besonders", "besteht", "bestimmte", "bestimmten", "bestimmter", "bevor", "bietet", "bis", "bleiben", "bringen", "bringt", "bsp", "bzw", "d.h", "da", "dabei", "dafür", "daher", "damit", "danach", "dann", "dar", "daran", "darauf", "daraus", "darf", "darstellt", "darüber", "das", "dass", "davon", "dazu", "dem", "demzufolge", "den", "denen", "denn", "der", "deren", "des", "dessen", "desto", "die", "dies", "diese", "diesem", "diesen", "dieser", "dieses", "doch", "dort", "durch", "ebenfalls", "eher", "eigenen", "eigentlich", "ein", "eine", "einem", "einen", "einer", "eines", "einigen", "einiges", "einmal", "einzelnen", "entscheidend", "entweder", "er", "erstmals", "es", "etc", "etwas", "euch", "folgende", "folgendem", "folgenden", "folgender", "folgendes", "folgt", "für", "ganz", "gegen", "gehen", "gemacht", "genannte", "genannten", "gerade", "gerne", "gibt", "gilt", "gleich", "gleichen", "gleichzeitig", "habe", "haben", "hält", "hat", "hatte", "hätte", "hauptsächlich", "her", "heutigen", "hier", "hierbei", "hierfür", "hin", "hingegen", "hinzu", "hoch", "ihn", "ihr", "ihre", "ihren", "ihrer", "im", "immer", "immerhin", "in", "indem", "insgesamt", "ist", "ja", "je", "jede", "jedem", "jeder", "jedes", "jedoch", "jetzt", "jeweilige", "jeweiligen", "jeweils", "kam", "kann", "keine", "kommen", "kommt", "können", "konnte", "könnte", "konnten", "lassen", "lässt", "lautet", "lediglich", "leider", "letztendlich", "letztere", "letzteres", "liegt", "machen", "macht", "mal", "man", "mehr", "mehrere", "meine", "meinem", "meisten", "mich", "mit", "mithilfe", "mittels", "möchte", "möglich", "möglichst", "momentan", "muss", "müssen", "musste", "nach", "nachdem", "nächsten", "nahezu", "nämlich", "natürlich", "neue", "neuen", "nicht", "nichts", "noch", "nun", "nur", "ob", "obwohl", "oder", "oftmals", "ohne", "per", "sämtliche", "scheint", "schon", "sehr", "sein", "seine", "seinem", "seinen", "sich", "sicherlich", "sie", "siehe", "sind", "so", "sobald", "sofern", "solche", "solchen", "soll", "sollen", "sollte", "sollten", "somit", "sondern", "sorgt", "sowie", "sowohl", "später", "sprich", "statt", "trotz", "über", "überhaupt", "um", "und", "uns", "unter", "usw", "viel", "viele", "vielen", "völlig", "vom", "von", "vor", "vorerst", "vorher", "während", "war", "wäre", "waren", "warum", "was", "weil", "weitere", "weiteren", "weiterer", "weiteres", "weiterhin", "welche", "welchen", "welcher", "welches", "wenn", "wer", "werden", "wesentlich", "wichtige", "wichtigsten", "wie", "wieder", "wiederum", "will", "wir", "wird", "wirklich", "wo", "wobei", "worden", "wurde", "wurden", "z.b", "ziemlich", "zu", "zuerst", "zum", "zur", "zusätzlich", "zuvor", "zwar", "zwecks"];

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://kaul.inf.h-brs.de/we/assets/html/plagiatsresolution.html");
xhr.send();
var text = responseText;
//text sabuer machen
var text = text.replaceAll(/@^()[]%\n\d\r\t,."'#_-`'!{}/g, " ")
    .split(" ").trim().filter(x => !Stoppworte.includes(x) && x !== "");


var anzahlWord = {};


text.forEach(word => {
    anzahlWord[word] = anzahlWord[word] ? anzahlWord[word] + 1 : 1;
  });

var Begriffe =bject.keys(arg).sort(function (a, b) {
    return arg[a] - arg[b]
     });

     console.log("die 3 häufigsten Begriffe sind = "+ Object.values(woerter).slice(Object.values(alleWoerter).length-3));

