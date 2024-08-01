document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slideshow-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Initialize the first image
    images[currentIndex].classList.add('active');

    // Change image every 5 seconds
    setInterval(showNextImage, 5000);
});
