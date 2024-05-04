document.addEventListener("DOMContentLoaded", function() {
    var educationOptions = document.querySelectorAll('.education-option');
    var detailsSections = document.querySelectorAll('.details');

    educationOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            var id = this.id;
            detailsSections.forEach(function(section) {
                section.classList.remove('active');
            });
            document.getElementById('details-' + id).classList.add('active');
        });
    });
});
// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for displaying acknowledgment note
window.addEventListener('load', function() {
    alert("For the best experience, please use a laptop or desktop computer.");
});
