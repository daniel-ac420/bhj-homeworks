const book = document.querySelector("#book");

const controlSizeButtons = document.querySelectorAll(".book__control_font-size .font-size");
const controlColorButtons = document.querySelectorAll(".book__control_color .color");
const controlBckgrndButtons = document.querySelectorAll(".book__control_background .color");


controlSizeButtons.forEach(function(button) {
	button.addEventListener("click", function(event) {
		controlSizeButtons.forEach(function(button) {
			button.classList.remove("font-size_active");
		})
							   
		button.classList.add("font-size_active");
		
		let fontSize = button.getAttribute("data-size");
		
		book.removeAttribute("class");
		book.classList.add("book");
		book.classList.add(`book_fs-${fontSize}`);
		
		event.preventDefault();
	})
})


//controlColorButtons.forEach(function(button) {
//	button.addEventListener("click", function(event) {
//		controlColorButtons.forEach(function(button) {
//			button.classList.remove("color_active");
//		})
//							   
//		button.classList.add("color_active");
//		
//		let textColor = button.getAttribute("data-text-color");
//		console.log(textColor);
//		
//		book.removeAttribute("class");
//		book.classList.add("book");
//		book.classList.add(`book_color-${textColor}`);
//		
//		event.preventDefault();
//	})
//})