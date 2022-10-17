

//let input = Number(window.prompt("Input number between 0 and 20"));

let result = "";
let i = 0;

for (;i <= 20;) {
    console.log (result);
    if (i%2 === 0) {
        result += i + " is even <br>";
    } else { (i%2 != 0)
        result += i + " is odd <br>";
    }
    i++;
}
document.getElementById("odd_even").innerHTML = result;
