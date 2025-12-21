// --------------- ScrollReveal تنظیمات پایه
ScrollReveal({
    reset: false,
    distance: '50px',
    duration: 1200,
    easing: 'ease-in-out'
});

// --------------- سرویس‌ها، نظرات، سوالات
ScrollReveal().reveal('.service-card', {
    origin: 'bottom',
    interval: 150
});

ScrollReveal().reveal('.testimonial-box', {
    origin: 'right',
    interval: 150
});

ScrollReveal().reveal('.faq-box', {
    origin: 'bottom',
    interval: 150
});

// --------------- تماس با ما
ScrollReveal().reveal('.contact-info', {
    duration: 900,
    distance: '50px',
    origin: 'bottom',
    interval: 150
});
ScrollReveal().reveal('.contact-form', {
    duration: 900,
    distance: '50px',
    origin: 'bottom',
    delay: 200
});

// --------------- دکمه‌ها
ScrollReveal().reveal('.cta-btn', {
    duration: 1100,
    distance: '35px',
    origin: 'bottom',
    interval: 150,
    opacity: 0,
    scale: 0.92
});

// --------------- FAQ Toggle
document.querySelectorAll(".faq-box").forEach(box => {
    box.addEventListener("click", () => {
        box.classList.toggle("active");
    });
});

// --------------- Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// --------------- Sticky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    window.scrollY > 50
        ? header.classList.add("sticky")
        : header.classList.remove("sticky");
});

// --------------- Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});
