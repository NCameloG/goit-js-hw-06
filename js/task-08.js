let form = document.getElementsByClassName('login-form')[0];

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.currentTarget.elements);
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (!email.value || !password.value) {
    return alert('Please fill in all the fields!');
  }

  let toSendData = {
    [password.name]: password.value,
    [email.name]: email.value,
  };
  console.log(toSendData);
  e.currentTarget.reset();
});
