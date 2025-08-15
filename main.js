// main.js

import { setupNavigation } from './navigation.js';
import { setupSectionTransitions } from './transitions.js';
import { setupScrollReveal } from './scrollReveal.js';

document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupSectionTransitions();
    setupScrollReveal();
});
// main.js

import { setupNavigation } from './navigation.js';
import { setupSectionTransitions } from './transitions.js';
import { setupScrollReveal } from './scrollReveal.js';

document.addEventListener("DOMContentLoaded", () => {
    setupSectionTransitions();
    setupNavigation(); // now uses transitions-aware showSection
    setupScrollReveal();
});
document.getElementById('menu-toggle')?.addEventListener('click', () => {
    document.querySelector('nav')?.classList.toggle('show');
});
