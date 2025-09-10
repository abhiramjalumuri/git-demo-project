document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // For demo purposes, just display a success message
    document.getElementById("status").textContent = 
        `Thank you, ${name}! Your message has been received.`;

    // Clear form fields
    document.getElementById("contactForm").reset();
});
