export function setupNavigation() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = extractId(link.getAttribute("href"));
            showSection(targetId);
            updateActiveLink(link);
            history.pushState(null, "", `#${targetId}`);
        });
    });

    // Handle deep linking on initial load
    const initialId = window.location.hash.replace("#", "");
    if (initialId) {
        showSection(initialId);
        const initialLink = [...navLinks].find(link =>
            extractId(link.getAttribute("href")) === initialId
        );
        if (initialLink) updateActiveLink(initialLink);
    }
}

function extractId(href) {
    return href.replace(".html", "").replace("#", "");
}

function showSection(id) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const isTarget = section.id === id;
        section.classList.toggle("visible", isTarget);
        section.style.display = isTarget ? "block" : "none";
    });
}

function updateActiveLink(activeLink) {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}