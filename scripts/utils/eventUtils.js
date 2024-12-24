// Event handling utilities
export function addEventListeners(elements, eventType, handler) {
  elements.forEach(element => {
    element?.addEventListener(eventType, handler);
  });
}

export function removeEventListeners(elements, eventType, handler) {
  elements.forEach(element => {
    element?.removeEventListener(eventType, handler);
  });
}