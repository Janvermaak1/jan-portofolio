// navigation.js

export function setupNavigation() {
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