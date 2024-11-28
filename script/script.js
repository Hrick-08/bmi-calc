
// JavaScript for automatic image sliding
let currentSlide = 0;
const slides = document.querySelectorAll('.slider .slide');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

// Function to change slide every 5 seconds
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    showSlide(currentSlide);
}

// Function to show the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// Add event listeners for navigation buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
