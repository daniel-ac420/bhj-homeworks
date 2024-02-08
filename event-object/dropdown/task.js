let button = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
let listItems = document.querySelectorAll(".dropdown__link");

button.addEventListener("click", function() {
	list.classList.toggle("dropdown__list_active");
})

listItems.forEach(function(listItem) {
	listItem.addEventListener("click", function changeValue(event) {
//		console.log(this.textContent.trim());
		button.innerHTML = this.textContent.trim();
		list.classList.remove("dropdown__list_active");
		event.preventDefault();
	})
})