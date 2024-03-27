document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    
   
    const storedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (storedFormData) {
      emailInput.value = storedFormData.email;
      messageInput.value = storedFormData.message;
    }
    
  
    form.addEventListener('input', (event) => {
      if (event.target.matches('input[name="email"], textarea[name="message"]')) {
        const formData = {
          email: emailInput.value.trim(),
          message: messageInput.value.trim()
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
      }
    });
    
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const formData = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
      };
  
    
      if (formData.email && formData.message) {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        emailInput.value = '';
        messageInput.value = '';
        console.log('Please fill in all fields.');
      }
    });
  });