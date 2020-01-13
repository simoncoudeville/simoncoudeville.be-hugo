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
        rootMargin: '-96px'
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

document.addEventListener("DOMContentLoaded", function() {
    // observeHeader();
    // observeIntroTitle();
});
