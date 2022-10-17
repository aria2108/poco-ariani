

// ----- Exercise 1 -----
function translateDay() {
let inputDay = document.getElementById("myDay");
let transDay;
    switch (inputDay.value){
        case "Monday":
            transDay = "Senin";
        break;
        case "Tuesday":
            transDay = "Selasa";
        break;
        case "Wednesday":
            transDay = "Rabu";
        break;
        case "Thursday":
            transDay = "Kamis";
        break;
        case "Friday":
            transDay = "Jumat";
        break;
        case "Saturday":
            transDay = "Sabtu";
        break;
        case "Sunday":
            transDay = "Minggu";
        break;
        default:
            transDay = "Input is not valid";
        break;
    };
    document.getElementById("translation").innerHTML = transDay;
}
