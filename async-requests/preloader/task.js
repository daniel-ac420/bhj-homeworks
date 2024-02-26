let currenciesList = document.querySelector("#items");

let loaderGIF = document.querySelector("#loader");

let request = new XMLHttpRequest();
request.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
request.send();

request.addEventListener("load", function() {
	loaderGIF.remove();
	
	let currencies = Object.entries(JSON.parse(request.response)["response"]["Valute"]);
	
	for (let currency of currencies) {
		let newItem = document.createElement("div");
		newItem.classList.add("item");
		
		newItem.insertAdjacentHTML("afterBegin", `
			<div class="item__code">
				${currency[1]["CharCode"]}
			</div>
			<div class="item__value">
				${currency[1]["Value"]}
			</div>
			<div class="item__currency">
				руб.
			</div>
		`);
		
		currenciesList.append(newItem);
	}
})