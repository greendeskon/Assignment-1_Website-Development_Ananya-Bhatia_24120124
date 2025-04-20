document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    fetch('https://docs.google.com/spreadsheets/d/1l2jAycfnsCzJBVuniqLKJbK9nfnhdT1dw3XIef11OD8/edit?usp=sharing', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        this.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
});
