class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
	this.newTimer = null;
    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода символа вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */
	  
	document.addEventListener("keypress", (event) => {
		let currentKeySymbol = event.key.toLowerCase();
//		console.log(currentKeySymbol);
//		console.log(this.currentSymbol.textContent);
		
		if (currentKeySymbol === this.currentSymbol.textContent) {
			this.success();
		} else {
			this.fail();
		}
	})
  }

	
	timer() {
		clearInterval(this.newTimer);
		
		let wordLength = document.querySelectorAll(".symbol").length;
	//	console.log(wordLength);

		let timerElement = document.querySelector(".timer__inner");
		timerElement.innerHTML = wordLength;

		this.newTimer = setInterval(() => {
			timerElement.innerHTML--;

			if (timerElement.textContent === "0") {
				this.fail();
			}
		}, 1000);
	}
	
	
  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
//	this.timer();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
//	this.timer();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
	  
	this.timer();
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

