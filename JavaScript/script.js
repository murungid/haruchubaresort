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