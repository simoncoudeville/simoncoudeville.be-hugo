function observeHeader() {
    const headerObserver = document.querySelector('.js-header-observer');
    const header = document.querySelector('.js-header');

    let observer = new IntersectionObserver(function (entries) {
        // entries: Array of observed elements
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.remove("is-sticky");
            } else {
                header.classList.add("is-sticky")
            }
        });
    });

    observer.observe(headerObserver);
}

function observeIntroTitle() {
    const title = document.querySelector('.js-title');
    const target = document.querySelector('body');

    const options = {
        rootMargin: '-108px'
    }

    let observer = new IntersectionObserver(function (entries) {
        // entries: Array of observed elements
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                target.classList.remove("has-scrolled");
            } else {
                target.classList.add("has-scrolled")
            }
        });
    }, options);

    observer.observe(title);
}

function toggleBaselines() {
    const toggles = document.querySelectorAll(".js-toggle-baseline-example");

    for(t of toggles) {
        t.addEventListener('change', function() {
            this.closest(".js-baseline-example").classList.toggle("has-baseline");
        });
    }
}

function rotateGradient() {
    const gradientBackground = document.querySelector('body');

    gradientBackground.addEventListener('mousemove', (e) => {
        const homeBackgroundImage = document.querySelector('.js-gradient-background-image');
        const mouseX = (homeBackgroundImage.getBoundingClientRect().left);
        const mouseY = (homeBackgroundImage.getBoundingClientRect().top);
        const radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
        const rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
        homeBackgroundImage.style.transform = `rotate(${rotationDegrees}deg)`;
        // homeBackgroundImage.style.setProperty('--deg', rotationDegrees + "deg");
    });
}

document.addEventListener("DOMContentLoaded", function() {
    toggleBaselines();
    rotateGradient();
    // observeHeader();
    // observeIntroTitle();
});
