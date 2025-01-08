

export function setupContactForm() {
  emailjs.init('-cUtB2-KJJ5zlrb36')

  const contactForm = document.getElementById('contact-form');

  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const formProps = Object.fromEntries(formData);
    // console.log(formData)
    // Here you would typically send the form data to a server
    try {
      // Send the form data using EmailJS
      const response = await emailjs.send('service_7635hjf', 'template_u4kz6xl', formProps);
      console.log('Email sent successfully:', response);

      alert('Message sent successfully!');
      contactForm.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    }
  });
}