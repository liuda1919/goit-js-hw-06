const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;
    const newData = {
      elementsEmail: emailInput.value,
      elementsPassword: passwordInput.value
    };

    console.log(newData);
    loginForm.reset();
   if (!emailInput.value || !passwordInput.value) {
    alert('Fill up all fields!');
  }
});
