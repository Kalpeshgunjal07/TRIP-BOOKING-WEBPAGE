// script.js

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Navigation Menu (for mobile view)
const navLinks = document.querySelector('.nav-links');
const toggleNav = document.querySelector('.logo');

toggleNav.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Handle Booking Form Submission
document.querySelector('.booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const checkInDate = document.getElementById('check-in').value;
    const checkOutDate = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;

    // Example of what you might do with form data
    alert(`Booking confirmed for ${destination} from ${checkInDate} to ${checkOutDate} for ${guests} guests.`);
});

// Handle Feedback Form Submission
document.querySelector('.feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedbackDate = document.getElementById('feedback-date').value;
    const feedback = document.getElementById('feedback').value;

    // Example of what you might do with feedback data
    alert(`Thank you for your feedback, ${name}.`);
});
