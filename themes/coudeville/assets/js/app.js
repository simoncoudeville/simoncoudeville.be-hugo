var single = document.querySelector('.js-single');

var options = {
  rootMargin: '-85px'
}

function handler(entries, observer) {
  for (entry of entries) {
    if (entry.isIntersecting) {
      single.classList.remove("has-scrolled");
    } else {
      single.classList.add("has-scrolled")
    }
  }
}

/* By default, invokes the handler whenever:
   1. Any part of the target enters the viewport
   2. The last part of the target leaves the viewport */

let observer = new IntersectionObserver(handler, options);
observer.observe(document.querySelector('.js-single-background'));
