export function setupSectionTransitions() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.classList.add("fade-section");
        section.style.opacity = 0;
        section.style.transition = "opacity 0.5s ease-in-out";
        section.style.display = "none";
    });

    // Show default section (e.g., #home)
    const defaultSection = document.querySelector("section#home");
    if (defaultSection) {
        defaultSection.style.display = "block";
        requestAnimationFrame(() => {
            defaultSection.style.opacity = 1;
            defaultSection.classList.add("visible");
        });
    }
}

export function showSection(id) {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const isTarget = section.id === id;

        if (isTarget) {
            section.style.display = "block";
            requestAnimationFrame(() => {
                section.style.opacity = 1;
                section.classList.add("visible");
            });
        } else {
            section.style.opacity = 0;
            section.classList.remove("visible");
            setTimeout(() => {
                section.style.display = "none";
            }, 500);
        }
    });
}