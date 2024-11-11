document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a'); // Assuming your navbar links are in <nav>

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the href attribute
            const targetElement = document.querySelector(targetId); // Get the target element

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });
});
