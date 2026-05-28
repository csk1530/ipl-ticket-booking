// script.js

function bookTicket(matchName){
    document.getElementById("match").value = matchName;
    window.scrollTo({
        top: document.querySelector(".booking-form").offsetTop,
        behavior: "smooth"
    });
}

document.getElementById("ticketForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let match = document.getElementById("match").value;
    let tickets = document.getElementById("tickets").value;

    if(name === "" || email === "" || match === "" || tickets === ""){
        alert("Please fill all fields");
        return;
    }

    document.getElementById("message").innerHTML =
        `✅ Booking Confirmed for ${name}<br>
         Match: ${match}<br>
         Tickets: ${tickets}`;

    document.getElementById("ticketForm").reset();
});