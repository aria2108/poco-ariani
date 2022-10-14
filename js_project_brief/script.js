


let personData = [ 
    {
        imageURL : 'img/class_pict/Abdul Fatah.jpg',
        name : "Abdul Fatah Shieryar", 
        age : 33, 
        origin : "Afghanistan", 
        canton : "Zürich", 
        hobby : "Hiking",
    },
    {
        imageURL : "img/class_pict/Ali.jpg",
        name : "Ali Göcmen", 
        age : 35, 
        origin : "Turkey", 
        canton : "Bern", 
        hobby : "Hiking",
    },
    {
        imageURL : "img/class_pict/ari.jpg",
        name : "Ni Luh Ariani", 
        age : 35, 
        origin : "Indonesia", 
        canton : "Aargau", 
        hobby : "Hiking",
    },
    {
        imageURL : "img/class_pict/Arwa.jpg",
        name : "Arwa Alhussein", 
        age : 42, 
        origin : "Syria", 
        canton : "Valais", 
        hobby : "Reading",
    },
    {
        imageURL : "img/class_pict/Baris.jpg",
        name : "Baris Durucan", 
        age : 45, 
        origin : "Turkey", 
        canton : "Vaud", 
        hobby : "Playing Table-tennis",
    },
    {
        imageURL : "img/class_pict/Bilal.jpg",
        name : "Muhammad Bilal Sulaimankhil", 
        age : 28, 
        origin : "Afghanistan", 
        canton : "Basel", 
        hobby : "Dancing Salsa",
    },
    {
        imageURL : "img/class_pict/Emin.jpg",
        name : "Emin Samed Yilmaz", 
        age : 34, 
        origin : "Turkey", 
        canton : "Luzern", 
        hobby : "Swimming",
    },    
    {
        imageURL : "img/class_pict/Enes.jpg",
        name : "Enes Bora", 
        age : 38, 
        origin : "Turkey", 
        canton : "Luzern", 
        hobby : "Cycling",
    },
    {
        imageURL : "img/class_pict/Fatih.jpg",
        name : "Fatih Yavuz", 
        age : 34, 
        origin : "Turkey", 
        canton : "Valais", 
        hobby : "Cycling",
    },
    {
        imageURL : "img/class_pict/Hasan.jpg",
        name : "Hasan H. Danaci", 
        age : 41, 
        origin : "Turkey", 
        canton : "Graubünden", 
        hobby : "Swimming",
    },
    {
        imageURL : "img/class_pict/Ismet.jpg",
        name : "Ismet Bakay", 
        age : 38, 
        origin : "Turkey", 
        canton : "Geneva", 
        hobby : "Cycling",
    },
    {
        imageURL : "img/class_pict/Jyothi.jpg",
        name : "Jyothi Jogin", 
        age : 35, 
        origin : "India", 
        canton : "Aargau", 
        hobby : "Yoga",
    },
    {
        imageURL : "img/class_pict/Murat.jpg",
        name : "Murat Güldibi", 
        age : 33, 
        origin : "Turkey", 
        canton : "Zürich", 
        hobby : "Basketball",
    },
    {
        imageURL : "img/class_pict/Oguz.jpg",
        name : "Oguz Yildiz", 
        age : 37, 
        origin : "Turkey", 
        canton : "Aargau", 
        hobby : "Playing Guitar",
    },
    {
        imageURL : "img/class_pict/Olena.jpg",
        name : "Olena Smetiuk", 
        age : 39, 
        origin : "Ukranine", 
        canton : "Bern", 
        hobby : "Crocheting",
    },
    {
        imageURL : "img/class_pict/Sadettin.jpg",
        name : "Sadettin Karatas", 
        age : 35, 
        origin : "Turkey", 
        canton : "Bern", 
        hobby : "Hiking",
    },
    {
        imageURL : "img/class_pict/Senay.jpg",
        name : "Senay Atli", 
        age : 35, 
        origin : "Turkey", 
        canton : "Valais", 
        hobby : "Hiking",
    },
    {
        imageURL : "img/class_pict/Serkan.jpg",
        name : "Serkan Tasgin", 
        age : 45, 
        origin : "Turkey", 
        canton : "Bern", 
        hobby : "Playing Guitar",
    },
    {
        imageURL : "img/class_pict/Sevim.jpg",
        name : "Sevim Gokturk", 
        age : 40, 
        origin : "Turkey", 
        canton : "Vaud", 
        hobby : "Camping",
    },
]

let container = document.getElementsByClassName("container")[0];
let str = "";
// str += "<div class='content'>";

for (let i = 0; i < personData.length; i++) {
    let person = personData[i]
    str += "<div class = 'content' onclick='toggleBtn(this)'>"
    str += '<img src="' + person.imageURL + '">'
    str += "<button>" + person.name + "</button>"
    str += "<p class = 'info'>" + `Hi, I am ${person.name} and am ${person.age} years old. Originally from ${person.origin}, currently live in canton ${person.canton}. In spare time, I like to do ${person.hobby}` + "</p>"
    str += "</div>"
}
// str += "</div>"
container.innerHTML = str;



function toggleBtn(e) {
    console.log('function')
    let context = e.firstElementChild.nextElementSibling.nextElementSibling;
    if (context.style.visibility == "hidden") {
        context.style.visibility = "visible";
    } else {
        context.style.visibility = "hidden"
    }
}









// let content = document.querySelectorAll("content")
// content.onmouseover = function () {mouseOver()};
// content.onmouseout = function () {mouseOut()};

// function mouseOver() {
//     content.style.backgroundColor = "red";
// }
// function mouseOut () {
//     content.style.backgroundColor = "";
// }

// let personalData = {
//     personName : "Ari",
//     age : 35,
//     city : "Zofingen"
// };

// let h2 = querySelector ("h2");
// h2.onclick = function(){myFunction()};

// function myFunction() {
//     document.getElementById("info").innerHTML= personalData.personName + ", " + personalData.age + ", " + personalData.city;
// }