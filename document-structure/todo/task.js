let input = document.querySelector("#task__input");
const tasksList = document.querySelector("#tasks__list");

const button = document.querySelector("#tasks__add");

document.addEventListener("keydown", task);
button.addEventListener("click", task);

function task(event) {
	if (event.key === "Enter" || event.type === "click") {
		if (input.value !== "") {
//			console.log(input.value);
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
	} else {
//		console.log(false);
	}
}