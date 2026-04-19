// objects in an array
const fruits = [{
    name: 'apple',
    image: 'fruits/apple.jpeg'
}, {
    name: 'banana',
    image: 'fruits/banana.jpeg'
}, {
    name: 'mango',
    image: 'fruits/mango.jpeg'
}, {
    name: 'pineapple',
    image: 'fruits/pineapple.jpeg'
}]
//variables
const btn = document.querySelector('.submit');
// classes  
//player
class player {
    constructor() {
        this.answer;
        this.xp = 0;
        this.points = 0;
        this.wrongAnswers= [];// future features.
    }

    setAnswer(reply) {
        this.answer = reply
    }

}

class game {
    constructor(player, array, h3Selector, imgSelector, heartsSelector, inputSelector, textSelector) {
        this.h3 = h3Selector
        this.img = document.querySelector(imgSelector);
        this.hearts = document.querySelector(heartsSelector);
        this.input = document.getElementById(inputSelector)
        this.text = document.querySelector(textSelector)
        this.player = player;
        this.currentArray = array;
        this.randomNumber = Math.floor(Math.random() * (this.currentArray.length - 1));
        this.correctReply = false;
        this.gameStatus = false
        this.sum = 0;
        this.life = 3;
    }

    displayGame() {

        const html = `
            <div class="grid-item">
            <h3 class="h3"> Escreva o nome da fruta abaixo em inglês</h3>
            <div class="game"> <img class="fruit" src="fruits/apple.jpeg" alt=""> <br>
            <div class="hearts"></div>
            <input id="answer" type="text" />
            <button class="submit">submit</button></div>
           
            <p class="result"></p>
 `
        gamUI.innerHTML = html


    }

    changeArray() {
        this.currentArray.splice(this.randomNumber, 1)

    }
    newArray() {

        if (this.currentArray.length !== 0 && this.life !== 0 ) {

            this.changeRandomNumber();
            console.log('number changed to  :' + this.randomNumber)

            this.img.src = this.currentArray[this.randomNumber].image;

            console.log(this.currentArray);
        }
        else if (this.currentArray.length === 0 || this.life === 0) {
            document.body.innerHTML = `<h1>game over</h1> `
        }
    }
    changeRandomNumber() {
        if (this.currentArray.length > 0) {
            this.randomNumber = Math.floor(Math.random() * (this.currentArray.length));
        }
        else {
            console.log('itens insuficientes');
        }
        //console.log(`number changer to ${this.randomNumber}`);

    }
    showLife() {
        if (this.life === 3) {
            this.hearts.innerHTML = `<img src='heart/butterfly spritesheet.png' class='h'/>
        <img src='heart/butterfly spritesheet.png' class='h'/>
        <img src='heart/butterfly spritesheet.png' class='h'/>`
        } else if (this.life === 2) {
            this.hearts.innerHTML = `<img src='heart/butterfly spritesheet.png' class='h'/>
        <img src='heart/butterfly spritesheet.png' class='h'/>
        `
        } else if (this.life === 1) {
            this.hearts.innerHTML = `<img src='heart/butterfly spritesheet.png' class='h'/>
       `
        } else {
            this.hearts.innerHTML = ''
        }

    }
    checkAnswer() {

        if (this.player.answer.toLowerCase().trim() === this.currentArray[this.randomNumber].name.toLowerCase().trim()) {
            this.gameStatus = true
            this.correctReply = true;
            this.sum += 5;
            this.showLife()
            this.displayResult(`correto
                 xp${this.sum}`)

            this.changeArray()
            this.newArray()


        } else if (this.player.answer !== this.currentArray[this.randomNumber].name && this.life !== 0) {
            this.gameStatus = true
            this.correctReply = false;
            this.sum -= 2;
            this.life--;
            this.showLife()
            this.displayResult(`errado, a resposta era: ${this.currentArray[this.randomNumber].name}
                xp${this.sum} 
            `)
            this.player.wrongAnswers = this.currentArray[this.randomNumber]
            console.log(`your wrong answers are: ${this.player.wrongAnswers.name}`)
            this.changeArray();
            this.newArray()
        }
        else if (!this.player.answer) {
            this.showLife()
            this.displayResult('digite sua resposta!');
        }

        if (this.life === 0) {
            this.showLife();
            this.gameStatus = false
            this.img.style.display = 'none'
            this.h3.style.color = 'crimson'
            this.h3.innerHTML = 'Game over'
            this.player.reply.style = 'display: none;'
            btn.style.display = 'none'
            this.sum = 0
            this.life = 3;

        }
    }
    displayResult(Text) {

        this.text.style = `
            display: block;
            width: 204px;
            font-size: 15px;
            max-width:90%;
            margin: 1rem auto;
            text-align: center;
            color: black;
         
            border:inset 2px gray
            `;
        this.text.innerHTML = Text;
        setTimeout(() => {
            this.text.style.display = 'none'
        }, 2000);
        this.input.value = '';


    }
}

const p1 = new player();
const fruit = new game(p1, [...fruits], '.h3', '.image', '.hearts', 'answer', '.text');
fruit.newArray()
fruit.showLife()

//events 
btn.addEventListener('click', () => {
    const reply = document.getElementById('answer').value;
    p1.setAnswer(reply);
    fruit.checkAnswer()
});



