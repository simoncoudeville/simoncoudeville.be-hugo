function toggleBaselines() {
    const toggles = document.querySelectorAll(".js-toggle-baseline-example");

    for(t of toggles) {
        t.addEventListener('change', function() {
            this.closest(".js-baseline-example").classList.toggle("has-baseline");
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    toggleBaselines();
});
