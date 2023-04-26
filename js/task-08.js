const loginForm = document.querySelector('.login-form');
 const emailInput = loginForm.elements.email;
 const passwordInput = loginForm.elements.password;

loginForm.addEventListener('submit', event => {
    event.preventDefault();
  if (!emailInput.value || !passwordInput.value) {
    return alert('Fill up all fields!')
  }
  
    const newData = {
      elementsEmail: emailInput.value,
      elementsPassword: passwordInput.value
    };

    console.log(newData);
     loginForm.reset();
});
