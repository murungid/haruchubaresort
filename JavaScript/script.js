// Booking Form Validation
document.addEventListener('DOMContentLoaded', function() {
    // Booking form handling
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            if (this.checkValidity()) {
                // Hide form and show thank you message
                bookingForm.style.display = 'none';
                document.getElementById('thankYouMessage').style.display = 'block';
                
                // Reset form
                this.reset();
                this.classList.remove('was-validated');
            } else {
                this.classList.add('was-validated');
            }
        }, false);
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            if (this.checkValidity()) {
                // Hide form and show thank you message
                contactForm.style.display = 'none';
                document.getElementById('contactThankYou').style.display = 'block';
                
                // Reset form
                this.reset();
                this.classList.remove('was-validated');
            } else {
                this.classList.add('was-validated');
            }
        }, false);
    }
    
    // Date validation for booking form
    const arrivalDate = document.getElementById('arrival');
    const departureDate = document.getElementById('departure');
    
    if (arrivalDate && departureDate) {
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        arrivalDate.min = today;
        departureDate.min = today;
        
        // Update departure min date when arrival changes
        arrivalDate.addEventListener('change', function() {
            departureDate.min = this.value;
            
            // If departure is before new arrival, reset it
            if (departureDate.value && departureDate.value < this.value) {
                departureDate.value = '';
            }
        });
    }
});
// Back to top button with improved behavior
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Show button after scrolling 1 screen height
    if (scrollPosition > windowHeight) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
    
    // Add/remove shadow based on scroll position
    const navbar = document.querySelector('.navbar');
    if (scrollPosition > 10) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});