let timerElement = document.querySelector("#timer");
let timerNumber = Number(timerElement.textContent) - 1;

let timerID = setInterval(function() {
	timerElement.innerHTML = timerNumber--;
	
	if (timerElement.innerHTML === "0") {
		clearInterval(timerID);
		alert("Вы победили в конкурсе!");
	}
}, 1000);