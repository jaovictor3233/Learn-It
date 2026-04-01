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
// classes  
//player
class player {

    constructor() {
        this.points = 0;
        this.answer = '';
    }
}

// variables

let input = document.getElementById('answer')

const btn = document.querySelector('.submit');
const result = document.querySelector('.result');
// new obj
const p1 = new player();
let rightAnswer = false;
//functions

function displayResult(text) {
    result.innerHTML = text;
    setTimeout(() => {
        result.innerHTML = '';
    }, 2000);
    input.value = '';
}
function checkAnswer(reply, answer) {
    if (reply.answer.toLowerCase() === answer[0].name.toLowerCase()) {
        rightAnswer = true;
        console.log(rightAnswer);
        reply.points += 5
        displayResult(`Correct, the fruit is ${answer[0].name}
        Gained: ${reply.points}XP`)

    } else if (!reply.answer) {
        console.log(rightAnswer);
        displayResult('Digite sua mensagem');
    }
    else if (reply.answer.toLowerCase() !== answer[0].name.toLowerCase() && reply.points > 0 && reply.points) {
        console.log(rightAnswer);
        reply.points -= 2
        displayResult(`No, the fruit is ${answer[0].name}
       Xp - ${reply.points}`)
    }
};
function displayFruit(array) {
    let random = Math.floor(Math.random() * array.length)
    let newArray;
    let limit;
    if (limit.length !== array.length && rightAnswer === true) {

        for (let i = 0; i < random.length; i++) {
            limit++;
            img.src = array[i].img;
            newArray = array.splice(i)
        }
    }

}
//events 
btn.addEventListener('click', () => {
    p1.answer = input.value;
    checkAnswer(p1, fruits);
    displayFruit(fruits)
});



