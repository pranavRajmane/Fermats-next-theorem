document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'b':
                    e.preventDefault();
                    window.location.href = '#blog';
                    break;
                case 'd':
                    e.preventDefault();
                    window.location.href = '#docs';
                    break;
                case 'y':
                    e.preventDefault();
                    window.location.href = '#youtube';
                    break;
                case 'g':
                    e.preventDefault();
                    window.location.href = '#github';
                    break;
                case 'm':
                    e.preventDefault();
                    window.location.href = '#meetups';
                    break;
                case 'c':
                    e.preventDefault();
                    window.location.href = '#console';
                    break;
            }
        }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
});