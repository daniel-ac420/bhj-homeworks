const revealElements = document.querySelectorAll(".reveal");

for (let revealElement of revealElements) {
	document.addEventListener("scroll", function() {		
		if (revealElement.getBoundingClientRect().top < window.innerHeight) {
			revealElement.classList.add("reveal_active");
		}
	})
}