const tabs = document.querySelectorAll(".tab__navigation .tab");

const tabsContent = document.querySelectorAll(".tab__contents .tab__content");

tabs.forEach(function(tab, index) {
	tab.addEventListener("click", function() {
		tabs.forEach(function(tab) {
			tab.classList.remove("tab_active");
		})
		
		this.classList.add("tab_active");
		
		tabsContent.forEach(function(tabContent) {
			tabsContent.forEach(function(tabContent) {
				tabContent.classList.remove("tab__content_active");
			})
			
			tabsContent[index].classList.add("tab__content_active");
		})
	})
})