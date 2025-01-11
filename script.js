document.getElementById('contactForm').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    
    if (name.length < 2) {
        alert('Please enter a valid name');
        e.preventDefault();
        return;
    }
    
    if (phone.length < 10) {
        alert('Please enter a valid phone number');
        e.preventDefault();
        return;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        e.preventDefault();
        return;
    }
});