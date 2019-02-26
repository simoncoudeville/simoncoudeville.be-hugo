function showTopBar(){var topBarTrigger=document.querySelector('.js-single-top-bar-trigger');var topBar=document.querySelector('.js-single-top-bar');var options={}
function handler(entries,observer){for(entry of entries){if(entry.isIntersecting){topBar.classList.remove("is-shown");}else{topBar.classList.add("is-shown")}}}
let observer=new IntersectionObserver(handler,options);observer.observe(topBarTrigger);}
function showTopTitle(){var topTitleTrigger=document.querySelector('.js-single-title');var single=document.querySelector('.js-single');var options={rootMargin:'-8px'}
function handler(entries,observer){for(entry of entries){if(entry.isIntersecting){single.classList.remove("has-scrolled");}else{single.classList.add("has-scrolled")}}}
let observer=new IntersectionObserver(handler,options);observer.observe(topTitleTrigger);}
function toggleBaseline(){let toggleTrigger=document.querySelector(".js-toggle-baseline");let toggleTarget=document.querySelector("html");toggleTrigger.addEventListener("click",function(){if(this.checked==true){toggleTarget.classList.toggle("has-baseline");}else{toggleTarget.classList.toggle("has-baseline");}});}
document.addEventListener("DOMContentLoaded",function(){toggleBaseline();showTopBar();showTopTitle();});