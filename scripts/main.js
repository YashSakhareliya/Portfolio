import { setupTheme } from './theme.js';
import { setupAnimations } from './animations.js';
import { setupNavigation } from './navigation.js';
import { setupContactForm } from './contact.js';
import { getElement } from './utils/domUtils.js';

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    // Make body visible after all modules are loaded
    const body = getElement('body');
    body.style.visibility = 'visible';

    setupTheme();
    setupAnimations();
    setupNavigation();
    setupContactForm();
});