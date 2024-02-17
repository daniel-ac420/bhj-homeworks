let input = document.querySelector("#task__input");
const tasksList = document.querySelector("#tasks__list");

const button = document.querySelector("#tasks__add");

button.addEventListener("click", task);

function task(event) {
	if (event.type === "click") {
		if (input.value.trim() !== "") {
			event.preventDefault();
			
			let newTask = document.createElement("div");
			newTask.classList.add("task");
			newTask.insertAdjacentHTML("afterbegin", `
				<div class="task__title">
					${input.value}
				</div>
				<a href="#" class="task__remove">&times;</a>
			`);
			
			input.value = "";
			tasksList.append(newTask);
			
			const removeTask = newTask.querySelector(".task__remove");
			removeTask.title = "Удалить задачу";
			removeTask.addEventListener("click", function() {
				this.closest(".task").remove();
			})
		} else {
			event.preventDefault();
		}
	}
}