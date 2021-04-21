const main_nav = document.querySelector(".main-nav");
const open_menu = document.querySelector(".open-menu");
const close_menu = document.querySelector(".close-menu");

open_menu.addEventListener("click", show);
close_menu.addEventListener("click", close);

function show() {
    main_nav.style.top = '0';
}

function close() {
    main_nav.style.top = '-100%';
}



const contactform = document.querySelector(".contact-form");

//Get input values
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");


// Listen for a submit
contactform.addEventListener("submit", (e) => {
    e.preventDefault()

    let formData = {
        name: name.value,
        email: email.value, 
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == "success") {
            alert("Nachricht wurde gesendet");
            name.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
        }else {
            alert("Irgendetwas ist schief gelaufen")
        }
    }

    xhr.send(JSON.stringify(formData));
});