// ========================================
// Mobile Navigation Menu
// ========================================

// Selects the mobile menu button and navigation menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Toggles the navigation menu when the user clicks the menu icon
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// ========================================
// Shopping Cart Functionality
// ========================================

// Simulates adding a product to the shopping cart
// Displays a confirmation message to the user
function addToCart(productName) {
    alert(productName + ' has been added to your cart (prototype only).');
}


// ========================================
// Contact Form Validation
// ========================================

// Selects the contact form and message display area
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Runs validation when the form is submitted
contactForm.addEventListener('submit', function (e) {

    // Prevents the page from refreshing after submission
    e.preventDefault();

    // Retrieves and removes extra spaces from user inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Checks whether all required fields have been completed
    if (!name || !email || !message) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all required fields.';
        return;
    }

    // Regular expression used to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Checks if the entered email matches a valid format
    if (!emailPattern.test(email)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // Displays success message when validation passes
    formMessage.style.color = 'green';
    formMessage.textContent =
        'Thank you! Your message has been submitted (prototype only).';

    // Clears the form fields after successful submission
    contactForm.reset();
});
