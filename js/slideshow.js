// JavaScript for Slideshow Functionality
let slideIndex = 0;

// Initialize slideshow
function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
    });
}

function changeSlide(n) {
    const slides = document.querySelectorAll(".slide");
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

// Event listeners for slideshow controls
document.addEventListener("DOMContentLoaded", () => {
    showSlides();

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (prevButton) prevButton.addEventListener("click", () => changeSlide(-1));
    if (nextButton) nextButton.addEventListener("click", () => changeSlide(1));
});

// JavaScript for Fan Zone Functionality
document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("fan-feedback");
    const thankYouMessage = document.getElementById("thank-you");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const favoriteDriver = document.getElementById("favorite-driver").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!favoriteDriver || !message) {
                alert("Please fill out all fields before submitting!");
                return;
            }

            // Display thank you message
            thankYouMessage.style.display = "block";

            // Optionally clear the form
            feedbackForm.reset();

            // Hide thank you message after 5 seconds
            setTimeout(() => {
                thankYouMessage.style.display = "none";
            }, 5000);
        });
    }
});
