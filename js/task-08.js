let form = document.getElementsByClassName('login-form')[0];

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.currentTarget.elements);
  const {
    elements: { password, email },
  } = e.currentTarget;
  if (password.value.split('').length > 1 || email.value.split('').length > 1) {
    return alert('Please fill in all the fields!');
  }

  let toSendData = {
    [password.name]: password.value,
    [email.name]: email.value,
  };
  console.log(toSendData);
  e.currentTarget.reset();
});
