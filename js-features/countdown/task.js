let timerElement = document.querySelector("#timer");
let timerNumber = Number(timer.textContent) - 1;

let timerID = setInterval(function() {
	timerElement.innerHTML = timerNumber--;
	
	if (timer.innerHTML === "0") {
		clearInterval(timerID);
		alert("Вы победили в конкурсе!");
	}
}, 1000);