

let input = Number(window.prompt("Input number between 0 and 20"));


if (input < 0 || input > 20){
    alert ("incorect value")
} else if (input%2 === 0) {
    alert (input + " is even");
} else { (input%2 != 0)
    alert (input + " is odd");
}



// for (let input = 1; input < 20; input++){
//     if (input%2 === 0) {
//         console.log (input + " is even");
//     } else { (input%2 != 0)
//         console.log (input + " is odd");
//     }
// }