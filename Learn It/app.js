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
const reply = document.getElementById('answer');
const img = document.querySelector('.fruit');
const btn = document.querySelector('.submit');
const text = document.querySelector('.result');
// classes  
//player
class player {
    constructor(reply) {
        this.answer = reply;
        this.xp = 0;
        this.points = 0;
    }
}

class game {
    constructor(player, array) {
        this.player = player;
        this.currentArray = array;
    }

    checkAnswer() {

        if (this.player.answer === this.currentArray[0].name) {
            this.displayResult('correct')
        } else if (this.player.answer !== this.currentArray[0].name) {
            this.displayResult(`wrong, the fruit is: ${this.currentArray[0].name}`)
        }
        console.log(this.player.answer);
        console.log(this.currentArray[0].name);

    }
    displayResult(Text) {
        if (document.body.innerHTML) {
            text.innerHTML = Text;
            setTimeout(() => {
                text.innerHTML = '';
            }, 2000);
            reply.value = '';
        } else {
            document.body.innerHTML = `<h1>Game Over</h1>`
        }
    }
}

const p1 = new player();
const fruit = new game(p1, fruits)
//events 
btn.addEventListener('click', () => {
    p1.answer = reply.value
    fruit.checkAnswer()
});



