const loginForm = document.querySelector('.login-form');
const rightEmail = 'email@gmail.com';
const rightPassword = 'password';

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;
   if (emailInput.value === rightEmail && passwordInput.value === rightPassword) {
    const newData = {
      elementsEmail: emailInput.value,
      elementsPassword: passwordInput.value
    };

    console.log(newData);
    loginForm.reset();
  } else if (!emailInput.value || !passwordInput.value) {
    alert('Fill up all fields!');
  }
});