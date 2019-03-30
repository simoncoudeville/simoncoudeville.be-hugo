function showTopBar() {
    var topBarObserver = document.querySelector('.js-single-sticky-bar-observer');
    var topBar = document.querySelector('.js-single-sticky-bar');

    let observer = new IntersectionObserver(function (entries) {
        // entries: Array of observed elements
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                topBar.classList.remove("is-shown");
            } else {
                topBar.classList.add("is-shown")
            }
        });
    });

    observer.observe(topBarObserver);
}

function showTopTitle() {
    var topTitleObserver = document.querySelector('.js-single-title');
    var single = document.querySelector('.js-single');

    var options = {
        // rootMargin: '-110px'
        rootMargin: '-20px'
    }

    let observer = new IntersectionObserver(function (entries) {
        // entries: Array of observed elements
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                single.classList.remove("has-scrolled");
            } else {
                single.classList.add("has-scrolled")
            }
        });
    }, options);

    observer.observe(topTitleObserver);
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
    showTopBar();
    showTopTitle();
});
