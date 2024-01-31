let killElement = document.querySelector("#dead");
let missElement = document.querySelector("#lost");

let killCounter = 0;
let missCounter = 0;

let holes = document.querySelectorAll(".hole");

for (let hole of holes) {
	hole.addEventListener("click", function() {
		if (hole.classList.contains("hole_has-mole")) {
			killCounter++;
			killElement.innerHTML = killCounter;
			
			if (killCounter === 10) {
				alert("Победа!..");
				restartGame();
			}
		} else {
			missCounter++;
			missElement.innerHTML = missCounter;
			
			if (missCounter === 5) {
				alert("Вы проиграли...");
				restartGame();
			}
		}
	})
}


function restartGame() {
	killCounter = 0;
	killElement.innerHTML = killCounter;
	
	missCounter = 0;
	missElement.innerHTML = missCounter;
}