

let input = Number(window.prompt("Input number between 0 and 10"));


if (input%1 != 0 || input == "" || input < 0 || input > 10){
    alert ("incorect value")
} else {
    alert (input + " x 9  = " + input * 9);
}
