export function setupNavigation() {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").replace("#", "").replace(".html", "");
            showSection(targetId);
            updateActiveLink(link);
        });
    });

    // Optional: handle deep linking on page load
    const initialId = window.location.hash.replace("#", "");
    if (initialId) {
        showSection(initialId);
        const initialLink = [...navLinks].find(link => link.getAttribute("href").includes(initialId));
        if (initialLink) updateActiveLink(initialLink);
    }
}

function showSection(id) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.toggle("visible", section.id === id);
        section.style.display = section.id === id ? "block" : "none";
    });
}

function updateActiveLink(activeLink) {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}