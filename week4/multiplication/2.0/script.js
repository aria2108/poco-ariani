

//let input = Number(window.prompt("Input number between 0 and 20"));
let i = 0;
let result = "";

while (i <= 10) {
    result += "<br>" + i + " x 9 = " + (i*9);
    i++;
}
document.getElementById("result").innerHTML = result