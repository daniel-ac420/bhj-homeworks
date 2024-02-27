let form = document.querySelector("#form");
let progressBar = document.querySelector("#progress");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	
	let formData = new FormData(form);
	
	let request = new XMLHttpRequest();
	request.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
	
	request.upload.addEventListener("progress", function(event) {		
		progressBar.value = event.loaded / event.total;
	})
	
	request.send(formData);
})