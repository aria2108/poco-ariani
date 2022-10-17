
function translate_text () {
    let language = document.getElementById("select_lang");
    let text = document.getElementById("hello");

    switch (language.value) {
        case "spanish":
            text.innerHTML = "Hola Mundo!"
            break;
        case "deutsch":
            text.innerHTML = "Hallo Welt!"
            break;
        default:
            text.innerHTML = "Hello World"
    }
};

