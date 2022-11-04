
var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// --- Access and output Oranges ---
document.getElementById("print").innerHTML = "This is to access " + '"' + (array[2]) + '"';

// --- Remove the Banana ---
array.shift()
console.log (array);

// --- Sort the array in order ---
array.sort()
console.log (array);

// --- Put "Kiwi" at the end ---
array.push("Kiwi")
console.log (array);

// --- Remove "Apples" ---
array.shift()
console.log (array);

// --- Sort the array in reverse ---
array.reverse()
console.log (array);