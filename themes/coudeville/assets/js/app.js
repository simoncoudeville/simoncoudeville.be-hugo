// var single = document.querySelector('.js-single');
//
// var options = {
//   // rootMargin: '-98px'
//   // rootMargin: '-18px'
//   // rootMargin: '20px'
// }
//
// function handler(entries, observer) {
//   for (entry of entries) {
//     if (entry.isIntersecting) {
//       single.classList.remove("has-scrolled");
//     } else {
//       single.classList.add("has-scrolled")
//     }
//   }
// }
//
// /* By default, invokes the handler whenever:
//    1. Any part of the target enters the viewport
//    2. The last part of the target leaves the viewport */
//
// let observer = new IntersectionObserver(handler, options);
// observer.observe(document.querySelector('.js-single-title'));

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
        rootMargin: '-95px'
        // rootMargin: '-20px'
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


function toggleBaseline() {
    let toggleObserver = document.querySelector(".js-toggle-baseline");
    let toggleTarget = document.querySelector("html");

    toggleObserver.addEventListener("click", function() {
        if (this.checked == true){
            toggleTarget.classList.toggle("has-baseline");
        } else {
            toggleTarget.classList.toggle("has-baseline");
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // toggleBaseline();
    showTopBar();
    showTopTitle();
});
