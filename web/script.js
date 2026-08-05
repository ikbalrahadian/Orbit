// ===========================================
// Orbit Landing Page
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    // ---------------------------------------
    // Fade In Animation
    // ---------------------------------------

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("show");

            obs.unobserve(entry.target);

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("fade");

        observer.observe(section);

    });


    // ---------------------------------------
    // Smooth Scroll
    // ---------------------------------------

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            const href = link.getAttribute("href");

            if (!href || href === "#") return;

            const target = document.querySelector(href);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // ---------------------------------------
    // Header Scroll Effect
    // ---------------------------------------

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", () => {

            header.classList.toggle(
                "scrolled",
                window.scrollY > 40
            );

        });

    }


    // ---------------------------------------
    // Pricing Button
    // ---------------------------------------

    const buyButton = document.querySelector(".price-card .btn");

    if (buyButton) {

        const originalText = buyButton.textContent;

        buyButton.addEventListener("mouseenter", () => {

            buyButton.textContent = "Buy Now →";

        });

        buyButton.addEventListener("mouseleave", () => {

            buyButton.textContent = originalText;

        });

    }


    // ---------------------------------------
    // Lazy Loading
    // ---------------------------------------

    document.querySelectorAll("img").forEach(img => {

        if (!img.classList.contains("hero-image")) {

            img.loading = "lazy";

        }

    });


    // ---------------------------------------
    // FAQ Accordion
    // ---------------------------------------

    document.querySelectorAll(".faq-item h3").forEach(title => {

        title.style.cursor = "pointer";

        title.addEventListener("click", () => {

            const item = title.parentElement;

            item.classList.toggle("open");

        });

    });


    // ---------------------------------------
    // Console Message
    // ---------------------------------------

    console.log(`
🪐 Orbit

The fastest way to switch applications on Windows.

Download:
https://github.com/ikbalrahadian/Orbit

Built by Achmad Ikbal Rahadian
`);

});
