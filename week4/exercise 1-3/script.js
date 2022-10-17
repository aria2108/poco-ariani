// -------- Exercise 1 ---------------------

let username = document.getElementById("name");
let btn = document.getElementById("btn");

function hello() {
const replace = username.value
if (username.value !== "" ) {
    document.getElementById("hello").innerHTML = "Hello " + username.value;
} else {
    document.getElementById("hello").innerHTML = "Please input your name";
}
};

// -------- Exercise 2 -------------------

document.getElementById("char_count").innerHTML = 0
function countChar() {
    let inputText = document.getElementById("char").value;
    let counter = inputText.length;
    
    document.getElementById("myword").innerHTML = inputText;

    document.getElementById("char_count").innerHTML = counter
};

// -------- Exercise 3 -------------------

let authorName = document.getElementById("author");
let theQuote = document.getElementById("quote");
let button = document.getElementById("display");
let getQuote = document.getElementById("theirQuote");

button.addEventListener("click", sayQuote);

function sayQuote() {
    if (authorName.value === "" || theQuote.value === "") {
    //alert ("empty")
    getQuote.innerHTML = "Please input the right value";
    } else {
    //alert (authorName.value + " says" + ' "' + theQuote.value + '"');
    getQuote.innerHTML = authorName.value + " says" + '" ' + theQuote.value + ' "';
    }
};

// -------- Exercise 4 -------------------


// -------- Exercise 4 -------------------

let birthYear = 1987
let futureYear = 2023
let ageAfter = futureYear - birthYear;
let ageBefore = ageAfter - 1;


//console.log ("I will be either "+ ageBefore + " or " + ageAfter + " in " + futureYear);
