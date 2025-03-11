// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            authButtons.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Template slider scroll buttons (optional enhancement)
    const templateSlider = document.querySelector('.template-slider');
    if (templateSlider) {
        // You could add arrow buttons for the slider here
    }
    
    // Navigation to canvas.html
    const goToCanvasButtons = document.querySelectorAll('#goToCanvas, #goToCanvasBottom');
    goToCanvasButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'canvas.html';
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
