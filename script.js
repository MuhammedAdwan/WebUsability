// Scroll to top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide the button based on the scroll position
window.onscroll = function() {
    var btn = document.getElementById("back-to-top-btn");
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};