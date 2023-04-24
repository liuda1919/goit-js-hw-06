const textInput = document.querySelector('#validation-input')

textInput.addEventListener('blur', event => {
    const length = textInput.getAttribute('data-length')
    const value = event.target.value
   if (value.length === Number(length)) {
    textInput.classList.add('valid')
    textInput.classList.remove('invalid')
  } else {
    textInput.classList.add('invalid')
    textInput.classList.remove('valid')
  }
})