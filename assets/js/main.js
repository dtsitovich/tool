document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Checking and applying the saved theme on page load
    if (localStorage.getItem('theme') === 'black-and-white') {
        body.classList.add('black-and-white');
        themeToggle.style.transform = 'rotate(180deg)';
    }

    themeToggle.addEventListener('click', function (e) {
        e.preventDefault(); // Preventing default link behavior

        // Checking if <body> has applied black-and-white class
        const isBlackAndWhite = body.classList.contains('black-and-white');

        // Adding/removing the black-and-white class from <body>
        body.classList.toggle('black-and-white');

        // Saving theme state to localStorage
        if (isBlackAndWhite) {
            localStorage.setItem('theme', 'color');
            themeToggle.style.transform = 'none';
        } else {
            localStorage.setItem('theme', 'black-and-white');
            themeToggle.style.transform = 'rotate(180deg)';
        }
    });
});
