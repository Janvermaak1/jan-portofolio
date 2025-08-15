// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupSectionTransitions();
    setupScrollReveal();
});

function setupNavigation() {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").replace("#", "");
            showSection(targetId);
        });
    });
}

function showSection(id) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = section.id === id ? "block" : "none";
    });
}

function setupSectionTransitions() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.transition = "opacity 0.5s ease-in-out";
    });
}

function setupScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
}
