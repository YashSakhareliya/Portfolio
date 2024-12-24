// Theme constants
const THEME_KEY = 'theme';
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

// Get system preference for dark mode
export function getSystemThemePreference() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? THEMES.DARK 
    : THEMES.LIGHT;
}

// Load theme from localStorage or system preference
export function loadSavedTheme() {
  return localStorage.getItem(THEME_KEY) || getSystemThemePreference();
}

// Save theme to localStorage
export function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

// Apply theme to document
export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

// Toggle between light and dark themes
export function toggleTheme(currentTheme) {
  return currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
}

// Get icon class based on theme
export function getThemeIcon(theme) {
  return theme === THEMES.LIGHT ? 'fa-moon' : 'fa-sun';
}