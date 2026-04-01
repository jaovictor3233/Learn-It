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

let random = Math.floor(Math.random() * fruits.length);

const img = document.getElementById('fruit')

img.addEventListener('click', () => {
    img.src = fruits[random].img

})

/*for (let i = 0; i < random; i++) {

    let newArray = fruits.filter((fruit) =>
        fruit !== fruits[i].img)
}*/
