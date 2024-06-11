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

    // Defining the current URL-address and menu navigation links
    const currentPath = window.location.pathname;
    const homeLink = document.querySelector('a[href="index.html"]');
    const contactLink = document.querySelector('a[href="../pages/contact.html"]');

    // Setting the active class on page onload
    if (currentPath.endsWith('index.html')) {
        homeLink.classList.add('active');
    } else if (currentPath.endsWith('contact.html')) {
        contactLink.classList.add('active');
    }

    // Animation in the hero section for devices with screen resolution 991px and higher
    if (window.innerWidth >= 991) {
        const heroSection = document.querySelector('.hero');
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }

    // Animation in the .services section
    const servicesSection = document.querySelector('.services');
    let hasScrolled = false; // Scroll state tracking flag

    if (window.innerWidth >= 991) {
        window.addEventListener('scroll', function () {
            if (!hasScrolled && servicesSection.getBoundingClientRect().top <= window.innerHeight * 0.75) {
                servicesSection.classList.add('animate');
                hasScrolled = true; // Set the flag value to 'true' after the first scroll

                // 'animate' class removing after animation ends
                setTimeout(() => {
                    servicesSection.classList.remove('animate');

                    // Setting opacity property value to 1 after animation ends
                    const cardBox = servicesSection.querySelector('.card-box');
                    cardBox.style.opacity = '1';

                    const servicesHeading = document.querySelector('.services > h3');
                    servicesHeading.style.opacity = '1';
                }, 1000);
            }
        });
    }

});
