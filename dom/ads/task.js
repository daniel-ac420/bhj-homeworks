const spanList = document.querySelectorAll(".rotator__case");

//setInterval(function() {
//	spanList.forEach(function(spanElement, index) {
////		console.log(spanElement.textContent);
////		console.log(index);
//
//	//		console.log(spanList[index]);
//
//			if (spanElement.classList.contains("rotator__case_active")) {
//	//			spanElement.classList.toggle("rotator__case_active");
//	//			spanElement.nextElementSibling.classList.toggle("rotator__case_active");
//			}
//
//	})
//}, 1000)


let counter = 0;

setInterval(function() {
	for (let i = 0; i < spanList.length; i++) {
//		console.log(spanList[i].textContent);
		spanList[i].classList.remove("rotator__case_active");
	}
	
	spanList[counter].style.color = spanList[counter].getAttribute("data-color");
	spanList[counter].classList.toggle("rotator__case_active");
	
	console.log(spanList[counter].getAttribute("data-speed"));
	
	counter++;
//	console.log(counter);
	
	if (counter === spanList.length) {
		counter = 0;
	}
}, 1000) // spanList[counter].getAttribute("data-speed")