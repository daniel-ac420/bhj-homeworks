let request = new XMLHttpRequest();
request.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
request.send();

request.addEventListener("load", function() {
	let values = JSON.parse(request.response);
	let objects = Object.entries(values);

	let title = document.querySelector("#poll__title");
	title.textContent = objects[1][1]["title"];
	
	let answers = objects[1][1]["answers"];
	
	for (let i = 0; i < answers.length; i++) {
		let newButton = document.createElement("button");
		newButton.classList.add("poll__answer");
		newButton.textContent = answers[i];
		newButton.dataset.id = i;
		
		let answersButton = document.querySelector("#poll__answers");
		answersButton.append(newButton);
	}
	
	let answersButtons = document.querySelectorAll(".poll__answer");
	
	for (let answersButton of answersButtons) {
		answersButton.addEventListener("click", function() {
			alert("Спасибо, ваш голос засчитан!");
			
//			let quizID = objects[0][1];			
//			let answerID = this.dataset.id;
//			
//			const xhr = new XMLHttpRequest;
//			xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
//			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//			xhr.send(`vote=${quizID}&answer=${answerID}`);
//			
//			let answer = JSON.parse(xhr.response);
//			console.log(answer);
//			console.log(xhr);
		})
	}
})