let aktuTime , aktuIntervl , aktuButton;

window.onload = function () {
	    const list = document.getElementById("Rednerliste");
		const input = document.getElementById("inputValue");
		const button = document.getElementById("newButtuon");

    if ( input || list  ||button) {
        button.addEventListener("click", (event) => {
            const name = input.value;
				if (name != "") {
					const table = document.createElement("table");
					const redner = document.createElement("li");
					const tr = document.createElement("tr");
					const timeCreat = document.createElement("td");
					const buttonCreat = document.createElement("td");
					const nameCreat = document.createElement("td");
					const newButton = document.createElement("button");

					tr.appendChild(nameCreat);
					tr.appendChild(timeCreat);
					tr.appendChild(buttonCreat);
					buttonCreat.appendChild(newButton);
					redner.appendChild(table);
					table.appendChild(tr);
					newButton.innerText = "Stopp";
					timeCreat.innerText = "00:00:00";
					nameCreat.innerText = name;
					let intervl = setInterval(Timer(timeCreat), 900);
					newButton.onclick = stopTime(intervl ,newButton, Timer(timeCreat));
					stopAll(Timer(timeCreat), newButton, intervl);
					list.appendChild(redner);
            } 
        });
    } 
};

function Timer(time) {
    let h = 0; let m = 0; let s = 0;
    function begin() {
        if (s == 59) { s = 0; newMinute();}
		else {++s; }
		
        htmlPut(); }
    function newMinute() {
        if (m == 59) {
            m = 0;
            ++h;
        } else {
            ++m;}
			}

		function htmlPut() {
        const timeString = numUmwandlung(h) + ":" + numUmwandlung(m) + ":" + numUmwandlung(s);
        time.innerText = timeString;}

		function numUmwandlung(num) {
        return ("0" + num).slice(-2); }

		function getButton() {
        return button;}

    return begin;
}

function stopTime(intervl, button, timer) {
    return function () {
        clearInterval(intervl);
        button.innerText = "Start!";
        button.onclick = restartTimer(intervl, button, timer);};

}

function restartTimer(intervl, button, timer) {
    return function () {
        intervl = setInterval(timer, 900);
        stopAll( timer, button,intervl);
        button.innerText = "Stopp!";
        button.onclick = stopTime(intervl, button, timer);};
}

function stopAll( timer, button,intervl) {
    if ( aktuTime != null && aktuButton != null && aktuIntervl != null ) {
        stopTime(aktuIntervl, aktuButton, aktuTime)();
    } 
    aktuButton = button;
    aktuIntervl = intervl;
    aktuTime = timer;
}
