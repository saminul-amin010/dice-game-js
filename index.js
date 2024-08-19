// console.log("hello");
let a = Math.floor(Math.random() * 6) + 1;
let b = Math.floor(Math.random() * 6) + 1;

let diceImage1 = 'dice' + a + '.png';
let diceImage2 = 'dice' + b + '.png';
diceImage1 = 'images/' + diceImage1;
diceImage2 = 'images/' + diceImage2;

document.querySelectorAll('img')[0].setAttribute('src', diceImage1);
document.querySelectorAll('img')[1].setAttribute('src', diceImage2);

if(a > b) {
    document.querySelector('h1').innerHTML = '🚩Player 1 Wins';
} else if(a < b) {
    document.querySelector('h1').innerHTML = '🚩Player 2 Wins';
} else {
    document.querySelector('h1').innerHTML = 'Draw';
}