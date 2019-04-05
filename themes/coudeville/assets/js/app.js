// function showTopBar() {
//     var topBarObserver = document.querySelector('.js-single-sticky-bar-observer');
//     var topBar = document.querySelector('.js-single-sticky-bar');
//
//     let observer = new IntersectionObserver(function (entries) {
//         // entries: Array of observed elements
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 topBar.classList.remove("is-shown");
//             } else {
//                 topBar.classList.add("is-shown")
//             }
//         });
//     });
//
//     observer.observe(topBarObserver);
// }

function showHeaderTitle() {
    var introTitle = document.querySelector('.js-intro-title');
    var body = document.querySelector('body');

    var options = {
        rootMargin: '-110px'
    }

    let observer = new IntersectionObserver(function (entries) {
        // entries: Array of observed elements
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                body.classList.remove("has-scrolled");
            } else {
                body.classList.add("has-scrolled")
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
    // showTopBar();
    showHeaderTitle();
});
