document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (event) => {
        let valid = true;

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Check if fields are empty
        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
            valid = false;
        }

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            valid = false;
        }

        // Prevent form submission if validation fails
        if (!valid) {
            event.preventDefault();
        }
    });
});
