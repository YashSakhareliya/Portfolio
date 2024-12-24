// DOM manipulation utilities
export function createElement(tag, className, attributes = {}) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

export function getElement(selector) {
  return document.querySelector(selector);
}

export function getAllElements(selector) {
  return document.querySelectorAll(selector);
}