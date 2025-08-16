// main.js

import { setupNavigation } from './navigation.js';
import { setupSectionTransitions } from './transitions.js';
import { setupScrollReveal } from './scrollReveal.js';

document.addEventListener("DOMContentLoaded", () => {
    setupSectionTransitions();      // Handles section switching logic
    setupNavigation();              // Navigation now aware of transitions
    setupScrollReveal();           // Adds reveal animations on scroll

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
});