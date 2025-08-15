// transitions.js

export function setupSectionTransitions() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = "opacity 0.5s ease-in-out";
    });

    // Optional: fade in the default section
    const defaultSection = document.querySelector("section#home");
    if (defaultSection) {
        defaultSection.style.opacity = 1;
        defaultSection.style.display = "block";
    }
}

export function showSection(id) {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        if (section.id === id) {
            section.style.display = "block";
            setTimeout(() => section.style.opacity = 1, 50);
        } else {
            section.style.opacity = 0;
            setTimeout(() => section.style.display = "none", 500);
        }
    });
}
