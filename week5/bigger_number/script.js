
let a = prompt("Enter your first number");
let b = prompt("Enter your second number");

a = Math.floor(a);
b = Math.floor(b);

if (a > b) {
    alert ("The greater number of " + a + " and " + b + " is " + a );
} else if (a < b) {
    alert ("The smaller number of " + a + " and " + b + " is " + a );
} else if (a = b) {
    alert ("They are equal");   
} else {
    alert ("Input is not a number");
};