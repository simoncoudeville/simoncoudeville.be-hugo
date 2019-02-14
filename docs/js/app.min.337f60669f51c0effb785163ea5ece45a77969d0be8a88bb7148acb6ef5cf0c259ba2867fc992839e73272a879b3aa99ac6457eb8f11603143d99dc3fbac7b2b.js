var topTitle=document.querySelector('.js-single-top-title');var singleHeader=document.querySelector('.js-single-header');var options={rootMargin:'-84px'}
function handler(entries,observer){for(entry of entries){if(entry.isIntersecting){topTitle.classList.remove("is-shown");singleHeader.classList.add("is-shown");}else{topTitle.classList.add("is-shown")
singleHeader.classList.remove("is-shown")}}}
let observer=new IntersectionObserver(handler,options);observer.observe(document.querySelector('.js-single-background'));