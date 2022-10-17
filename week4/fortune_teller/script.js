
let numOfChild = prompt ("Input any number");
let getVal = true;
let partner;
let place;
let job;
let result;

if (numOfChild == "" || numOfChild%1 !== 0) {
    alert ("input only number");
    getVal = false;
}
if (getVal === true) {
    partner = prompt ("Input a name of a man in your mind");
    if (partner == ""){
    getVal = false;
    }
}
if (getVal === true){
    place = prompt ("Input your favourite country");
    if (place == ""){
    getVal = false;
    }
}
if (getVal === true){
    job = prompt ("Input your favourite profession");
    if (job == ""){
    getVal = false;
    }
} if (getVal === true) {
    result = "You will be a " + job + " in " + place + " and married to " + partner + " with " + numOfChild + " kids."
}
document.getElementById("text").innerHTML = result;
