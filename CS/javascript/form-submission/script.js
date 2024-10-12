
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

   
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        
        alert(`Form submitted! \nName: ${name} \nEmail: ${email} \nMessage: ${message}`);
        
        
        console.log(`Form submitted! Name: ${name}, Email: ${email}, Message: ${message}`);

      
        form.reset();
    });
});
