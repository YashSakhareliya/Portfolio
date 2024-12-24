import { 
  loadSavedTheme, 
  saveTheme, 
  applyTheme,
  toggleTheme,
  getThemeIcon
} from './utils/themeUtils.js';

export function setupTheme() {
  // Initialize theme
  const currentTheme = loadSavedTheme();
  applyTheme(currentTheme);
  
  // Create theme toggle button
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.setAttribute('aria-label', 'Toggle dark mode');
  themeToggle.innerHTML = `<i class="fas ${getThemeIcon(currentTheme)}"></i>`;
  
  // Handle theme toggle
  themeToggle.addEventListener('click', () => {
    const newTheme = toggleTheme(document.documentElement.getAttribute('data-theme'));
    applyTheme(newTheme);
    saveTheme(newTheme);
    themeToggle.innerHTML = `<i class="fas ${getThemeIcon(newTheme)}"></i>`;
  });
  
  // Add button to DOM
  document.body.appendChild(themeToggle);
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      applyTheme(newTheme);
      themeToggle.innerHTML = `<i class="fas ${getThemeIcon(newTheme)}"></i>`;
    }
  });
}