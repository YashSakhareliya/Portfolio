export function setupContactForm() {
  const contactForm = document.getElementById('contact-form');

  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const formProps = Object.fromEntries(formData);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formProps);
    
    alert('Message sent successfully!');
    contactForm.reset();
  });
}