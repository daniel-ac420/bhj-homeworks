const toolTipsElements = document.querySelectorAll(".has-tooltip");

for (let toolTipsElement of toolTipsElements) {
	toolTipsElement.addEventListener("click", function(event) {
		let oldToolTips = document.querySelectorAll(".tooltip");

		for (let oldToolTip of oldToolTips) {
			oldToolTip.remove();
		}
		
//		console.log(this.title);
		event.preventDefault();
		toolTipsElement.style.position = "relative";
		toolTipsElement.offsetTop = 10;
		
		let newToolTip = document.createElement("div");
		newToolTip.textContent = toolTipsElement.title;
		newToolTip.classList.add("tooltip");
		newToolTip.classList.add("tooltip_active");
		newToolTip.style.position = "absolute";
		newToolTip.style.left = 0;
//		newToolTip.style.right = 0;
		newToolTip.style.top = "50%";
//		newToolTip.offsetTop = 25;
//		newToolTip.offsetLeft = 0;
//		newToolTip.offsetRight = 0;
		toolTipsElement.appendChild(newToolTip);
//		console.log(newToolTip);
	})
}