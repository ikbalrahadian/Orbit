// ===========================================
// Orbit Landing Page
// script.js
// ===========================================
// -------------------------------------------
// Fade In Animation
// -------------------------------------------
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });
document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade");
    observer.observe(section);
});
// -------------------------------------------
// Smooth Navigation
// -------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// -------------------------------------------
// Navbar Background
// -------------------------------------------
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// -------------------------------------------
// Pricing Button Hover
// -------------------------------------------
const buyButton = document.querySelector(".price-card .btn");
if (buyButton) {
    buyButton.addEventListener("mouseenter", () => {
        buyButton.innerHTML = "Buy Now →";
    });
    buyButton.addEventListener("mouseleave", () => {
        buyButton.innerHTML = "Buy with Lemon Squeezy";
    });
}
// -------------------------------------------
// Image Lazy Loading
// -------------------------------------------
document.querySelectorAll("img").forEach(img => {
    img.loading = "lazy";
});
// -------------------------------------------
// Console Easter Egg
// -------------------------------------------
console.log(`
🪐 Orbit

Stop searching for windows.

Start switching with muscle memory.

https://github.com/ikbalrahadian/Orbit
`);