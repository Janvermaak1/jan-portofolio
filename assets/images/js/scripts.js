document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupSectionTransitions();
    setupScrollReveal();
    setupInitialSection(); // handles deep linking
    setupMenuToggle();     // mobile nav toggle
});

// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").replace(".html", "").replace("#", "");
            showSection(targetId);
            updateActiveLink(link);
            history.pushState(null, "", `#${targetId}`);
        });
    });
}

// Section visibility
function showSection(id) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const isTarget = section.id === id;
        section.classList.toggle("visible", isTarget);
        section.style.display = isTarget ? "block" : "none";
    });
}

// Highlight active nav link
function updateActiveLink(activeLink) {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}

// Handle deep linking on load
function setupInitialSection() {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
        showSection(hash);
        const activeLink = [...document.querySelectorAll("nav a")].find(link =>
            link.getAttribute("href").includes(hash)
        );
        if (activeLink) updateActiveLink(activeLink);
    }
}

// Section transitions
function setupSectionTransitions() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.transition = "opacity 0.5s ease-in-out";
    });
}

// Scroll reveal animation
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

// Mobile menu toggle
function setupMenuToggle() {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
}