// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Add to Cart feedback
function addToCart(productName) {
    alert(productName + ' has been added to your cart (prototype only).');
}

// Contact form validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all required fields.';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you! Your message has been submitted (prototype only).';
    contactForm.reset();
});
