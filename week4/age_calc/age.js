// ------Age exercise------


let bool = true;

const birthYear = prompt("Enter your birth year");
if (birthYear === "") {
  bool = false;
  window.alert("input the correct value");
}
if (bool === true) {
  const birthMonth = prompt("Enter your birth month");
  if (birthMonth <= 0 || birthMonth > 12 || birthMonth === "") {
    window.alert("input the correct value");
    bool = false;
  }
}
if (bool === true) {
  let futureYear = prompt("Enter the year in the future");
  if (futureYear === "") {
    window.alert("input the correct value");
    bool = false;
  }
}
if (bool === true) {
  let futureMonth = prompt("Enter the month in the future");
  if (futureYear === "" || futureMonth === "") {
    window.alert("input the correct value");
    bool = false;
  }
}
if (bool === true) {
  let ageAfter = futureYear - birthYear;
  let ageBefore = ageAfter - 1;

  if (futureMonth >= birthMonth) {
    window.alert("I am " + ageAfter + " years old");
  } else {
    window.alert("I am " + ageBefore + " years old");
  }
}

//console.log ("I will be either "+ ageBefore + " or " + ageAfter + " in " + futureYear);
