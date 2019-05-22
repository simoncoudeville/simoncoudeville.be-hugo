function observeHeader() {
    var headerObserver = document.querySelector('.js-header-observer');
    var header = document.querySelector('.js-header');

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
    var introTitle = document.querySelector('.js-intro-title');
    var target = document.querySelector('body');

    var options = {
        rootMargin: '-30px'
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

    observer.observe(introTitle);
}

function toggleBaselines() {
    const toggles = document.querySelectorAll(".js-toggle-example-baseline");

    for(t of toggles) {
        t.addEventListener('change', function() {
            this.closest(".js-example").classList.toggle("has-baseline");
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    toggleBaselines();
    observeHeader();
    observeIntroTitle();
});
