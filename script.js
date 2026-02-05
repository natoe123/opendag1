
document.querySelectorAll('nav a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var doel = document.querySelector(this.getAttribute('href'));
        if (doel) {
            doel.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
