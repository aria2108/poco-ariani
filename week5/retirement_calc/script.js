

let age_now = prompt("Enter your current age");
let age_retired = prompt("Enter your prefered retirement age");
let years_left = age_retired - age_now;
const d = new Date();
let year_now = d.getFullYear();
let year_retired = years_left + year_now;
//console.log (year_retired)

alert ("It's " + year_now + " so you can retire in " + year_retired)
