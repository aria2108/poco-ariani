
let mysteryNum = getRandomArbitrary(0,10);
let input;

console.log(mysteryNum);

while ((input = prompt ("Try Me! Guess from 0 - 10")) != mysteryNum ) {
    if (mysteryNum < input) {
        alert ("Nope, try smaller!")
    }

    if (mysteryNum > input) {
        alert ("Nope, try bigger!")
    }
}
alert ("correct, the mistery number is " + mysteryNum);

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }