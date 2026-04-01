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
const img = document.querySelector('.fruit');
const btn = document.querySelector('.submit');
const result = document.querySelector('.result');
// new obj
const p1 = new player();
let ra = false;
//functions

function displayResult(text) {
    result.innerHTML = text;
    setTimeout(() => {
        result.innerHTML = '';
    }, 2000);
    input.value = '';
}

function displayFruit(array) {
    // random number is created

    let random = Math.floor(Math.random() * array.length);
   img.src = array[random].image;
   array[0].name = array[random].name;
   console.log(array[random].image);
   
    for (let i = 0; i > random.length; i++) {
        if (ra) {
            img.src = array[i].image;
             array.name = array[random].name;
        }
    };
function checkAnswer(reply, fruits) {
    if (reply.answer.toLowerCase() === answer.name.toLowerCase()) {
        ra = true;
        console.log(ra);
        reply.points += 5
        displayResult(`Correct, the fruit is ${answer}
        Gained: ${reply.points}XP`)
    } else if (
        reply.answer.toLowerCase() !== answer && reply.points > 0) {
        console.log(ra);
        reply.points -= 2;
        displayResult(`No, the fruit is ${answer}
       Xp - ${reply.points}`);
    } else if (!reply.answer) {
        console.log(ra);
        displayResult('digite sua mensagem');
    }
};
}
//events 
btn.addEventListener('click', () => {
    p1.answer = input.value;
    checkAnswer(p1, fruits[0]);
    displayFruit(fruits);
});



