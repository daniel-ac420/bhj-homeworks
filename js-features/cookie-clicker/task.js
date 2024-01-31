let clickCountElement = document.querySelector("#clicker__counter");
let cookieElement = document.querySelector("#cookie");

let clickCount = clickCountElement.textContent;

let loadMoment = Date.now();
let lastClickMoment = 0;

let clickerElement = document.querySelector(".clicker__status");
clickerElement.insertAdjacentHTML("afterend", 
	`<div class="clicker__speed">
		Скорость клика: <span id="speed-value">0</span>
	</div>`);
let speedValueElement = document.querySelector("#speed-value");

cookieElement.addEventListener("click", function cookieClick() {
	clickCount++;
	clickCountElement.textContent = clickCount;
	cookieElement.classList.toggle("click");
	
	let clickMoment = Date.now();
	
	/* Разница между первым кликом и загрузкой страницы */
	let clickDiff = (clickMoment - loadMoment) / 1000;
	
	let clickSpeed = (1 / (clickDiff - lastClickMoment)).toFixed(2);
	
	speedValueElement.innerHTML = clickSpeed;
	
	/* Обнуляется вне функции при загрузке страницы */
	lastClickMoment = clickDiff;
	
//	console.log("# клика - " + clickCount);
//	console.log("Момент загрузки страницы: " + loadMoment);
//	console.log("Момент клика: " + clickMoment);
//	console.log("Время клика: " + clickDiff);
//	console.log("Скорость клика: " + clickSpeed);
});



