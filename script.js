document.addEventListener("DOMContentLoaded", () => {
    alert("DOM ready!");
});

let message = document.getElementById("message");

function displayMessage() {
    message.style.display = "block"
}