document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordToggleIcon = document.getElementById('passwordToggleIcon');
    const submitButton = document.getElementById('submitButton');
    const buttonText = document.getElementById('buttonText');
    
    // Toggle password visibility
    passwordToggle.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggleIcon.classList.remove('ri-eye-line');
        passwordToggleIcon.classList.add('ri-eye-off-line');
      } else {
        passwordInput.type = 'password';
        passwordToggleIcon.classList.remove('ri-eye-off-line');
        passwordToggleIcon.classList.add('ri-eye-line');
      }
    });
    
    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Show loading state
      submitButton.disabled = true;
      buttonText.innerHTML = '<span class="spinner"></span>Signing in...';
      
      // Simulate API call
      setTimeout(function() {
        // Reset button state after "API call"
        submitButton.disabled = false;
        buttonText.textContent = 'Sign in';
        
        // You would normally handle the response here
        console.log('Form submitted with:', {
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
          remember: document.getElementById('remember').checked
        });
        
        // For demo purposes, you could redirect or show a success message
        // window.location.href = '/dashboard';
      }, 2000);
    });
  });  

  