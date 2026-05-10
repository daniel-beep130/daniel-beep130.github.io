// Featured Game JavaScript Object
const featuredGame = {
    title: "Elden Ring",
    genre: "Action RPG",
    rating: 9.5,
    platform: "PC / PS5"
};

document.addEventListener("DOMContentLoaded", function () {

    const easterEgg = document.getElementById("easterEgg");
    
    if (easterEgg) {
        easterEgg.addEventListener("click", function () {
            alert("Easter egg unlocked!");
            window.open("https://www.youtube.com/watch?v=wzC55D3PB0k", "_blank");
        });
    }

});

// Display object information in console
console.log("Featured Game:");
console.log(featuredGame.title);
console.log(featuredGame.genre);
console.log(featuredGame.rating);
console.log(featuredGame.platform);

// Wait until page fully loads
window.onload = function () {

    // Get stored favorite game from session storage
    const savedGame = sessionStorage.getItem("favoriteGame");

    // Display saved favorite game if it exists
    if (savedGame) {
        console.log("Saved Favorite Game: " + savedGame);
    }

    // Contact Form Validation
    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const favoriteGame = document.getElementById("favoriteGame").value.trim();
            const message = document.getElementById("message").value.trim();

            // Name Validation
            if (name === "") {
                alert("Please enter your name.");
                return;
            }

            // Email Validation
            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address.");
                return;
            }

            // Favorite Game Validation
            if (favoriteGame === "") {
                alert("Please enter your favorite game.");
                return;
            }

            // Message Validation
            if (message.length < 10) {
                alert("Message must be at least 10 characters long.");
                return;
            }

            // Store favorite game in session storage
            sessionStorage.setItem("favoriteGame", favoriteGame);

            // Success message
            alert("Form submitted successfully!!! ps. click the logo in the home page... if you know you know.");

            // Reset form after submit
            form.reset();
        });
    }
};