document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentPath = window.location.pathname;
    const homeLink = document.querySelector('a[href="index.html"]');
    const contactLink = document.querySelector('a[href="../pages/contact.html"]');
    const sectionsToAnimate = [
        { section: document.querySelector('.services'), hasScrolled: false, cardBoxSelector: '.card-box', headingSelector: '.services > h3', delay: 1000 },
        { section: document.querySelector('.projects'), hasScrolled: false, itemSelector: '.project-item', delay: 500 }
    ];

    // Apply saved theme on page load
    if (localStorage.getItem('theme') === 'black-and-white') {
        applyTheme('black-and-white');
    }

    // Theme toggle click event
    themeToggle.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const newTheme = body.classList.contains('black-and-white') ? 'color' : 'black-and-white';
        applyTheme(newTheme);
    });

    // Function to apply theme
    function applyTheme(theme) {
        body.classList.toggle('black-and-white', theme === 'black-and-white');
        localStorage.setItem('theme', theme);
        themeToggle.style.transform = theme === 'black-and-white' ? 'rotate(180deg)' : 'none';
    }

    // Set active class based on current URL
    if (currentPath.endsWith('index.html')) {
        homeLink.classList.add('active');
    } else if (currentPath.endsWith('contact.html')) {
        contactLink.classList.add('active');
    }

    // Hero section animation for devices with screen resolution 991px and higher
    if (window.innerWidth >= 991) {
        const heroSection = document.querySelector('.hero');
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }

    // Function to animate sections on scroll
    function animateSectionsOnScroll() {
        if (window.innerWidth >= 991) {
            sectionsToAnimate.forEach(({ section, hasScrolled, cardBoxSelector, headingSelector, itemSelector, delay }) => {
                window.addEventListener('scroll', function scrollHandler() {
                    if (!hasScrolled && section.getBoundingClientRect().top <= window.innerHeight * 0.75) {
                        section.classList.add('animate');
                        hasScrolled = true;

                        if (cardBoxSelector && headingSelector) {
                            setTimeout(() => {
                                section.classList.remove('animate');
                                const cardBox = section.querySelector(cardBoxSelector);
                                const heading = section.querySelector(headingSelector);
                                if (cardBox) cardBox.style.opacity = '1';
                                if (heading) heading.style.opacity = '1';
                            }, delay);
                        }

                        if (itemSelector) {
                            const items = section.querySelectorAll(itemSelector);
                            let animationsCompleted = 0;

                            items.forEach((item, index) => {
                                setTimeout(() => {
                                    item.classList.add('visible');
                                    item.classList.remove('hidden');

                                    item.addEventListener('transitionend', function transitionEndHandler() {
                                        animationsCompleted++;
                                        if (animationsCompleted === items.length) {
                                            section.classList.remove('animate');
                                            section.style.opacity = '1';
                                            section.style.transform = 'translateY(0)';

                                            // Remove .hidden and .visible classes after the animation completes
                                            items.forEach(item => {
                                                item.classList.remove('hidden', 'visible');
                                            });
                                        }

                                        // Remove the transitionend event listener after it has executed
                                        item.removeEventListener('transitionend', transitionEndHandler);
                                    });
                                }, index * delay);
                            });
                        }

                        // Remove the scroll event listener after it has been triggered
                        window.removeEventListener('scroll', scrollHandler);
                    }
                });
            });
        } else {
            // Remove the .hidden class for devices with screen resolution below 991px
            sectionsToAnimate.forEach(({ itemSelector }) => {
                if (itemSelector) {
                    const items = document.querySelectorAll(itemSelector);
                    items.forEach(item => {
                        item.classList.remove('hidden');
                    });
                }
            });
        }
    }


    // Initial call to animate sections
    animateSectionsOnScroll();
});
