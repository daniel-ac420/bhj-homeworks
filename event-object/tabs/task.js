// /* --- ДЛЯ ОДНОГО НАБОРА ВКЛАДОК НА СТРАНИЦЕ --- */
//const tabs = document.querySelectorAll(".tab__navigation .tab");
//
//const tabsContent = document.querySelectorAll(".tab__contents .tab__content");
//
//tabs.forEach(function(tab, index) {
//	tab.addEventListener("click", function() {
//		tabs.forEach(function(tab) {
//			tab.classList.remove("tab_active");
//		})
//		
//		this.classList.add("tab_active");
//		
//		tabsContent.forEach(function(tabContent) {
//			tabsContent.forEach(function(tabContent) {
//				tabContent.classList.remove("tab__content_active");
//			})
//			
//			tabsContent[index].classList.add("tab__content_active");
//		})
//	})
//})



/* --- ДЛЯ МНОЖЕСТВА НАБОРОВ ВКЛАДОК НА СТРАНИЦЕ --- */

const allTabs = document.querySelectorAll(".tabs");

for (let tabsElements of allTabs) {
	const tabs = tabsElements.querySelectorAll(".tab__navigation .tab");

	const tabsContent = tabsElements.querySelectorAll(".tab__contents .tab__content");

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
}