function toggleBaselines() {
    const toggles = document.querySelectorAll(".js-toggle-baseline-example");

    for(t of toggles) {
        t.addEventListener('change', function() {
            this.closest(".js-baseline-example").classList.toggle("has-baseline");
        });
    }
}
function hideBaselines() {
    const buttons = document.querySelectorAll(".js-hide-baseline-button");

    for(b of buttons) {
        b.addEventListener('click', function() {
            this.closest(".js-baseline-example").classList.toggle("has-baseline");
            this.classList.remove('is-enabled');
            this.setAttribute('aria-pressed', true);
            this.nextElementSibling.classList.add('is-enabled');
        });
    }
}
function showBaselines() {
    const buttons = document.querySelectorAll(".js-show-baseline-button");

    for(b of buttons) {
        b.addEventListener('click', function() {
            this.closest(".js-baseline-example").classList.toggle("has-baseline");
            this.classList.remove('is-enabled');
            this.setAttribute('aria-pressed', true);
            this.previousElementSibling.classList.add('is-enabled');
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    toggleBaselines();
    showBaselines();
    hideBaselines();
});
