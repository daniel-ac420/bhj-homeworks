const toolTipsElements = document.querySelectorAll(".has-tooltip");

for (let toolTipsElement of toolTipsElements) {
	toolTipsElement.addEventListener("click", function(event) {
		event.preventDefault();
		
		if (this.nextElementSibling.classList.contains("tooltip_active")) {
			this.nextElementSibling.remove();
		} else {
			let oldToolTips = document.querySelectorAll(".tooltip");

			for (let oldToolTip of oldToolTips) {
				oldToolTip.remove();
			}

			let newToolTip = document.createElement("div");
			newToolTip.textContent = toolTipsElement.title;
			newToolTip.classList.add("tooltip");
			newToolTip.classList.add("tooltip_active");

			let toolTipsElementRect = this.getBoundingClientRect();

			newToolTip.style.left = `${toolTipsElementRect.left}px`;
			newToolTip.style.top = `${toolTipsElementRect.bottom}px`;
			
			this.insertAdjacentElement("afterEnd", newToolTip);
		}
	})
}