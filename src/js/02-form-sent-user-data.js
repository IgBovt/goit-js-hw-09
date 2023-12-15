export function sentUsersData(e) {
  e.preventDefault();
  if (
    e.currentTarget.elements.email.value === '' ||
    e.currentTarget.elements.message.value === ''
  ) {
    return alert('All form fields must be filled in');
  } else {
    console.log({
      email: e.currentTarget.elements.email.value,
      message: e.currentTarget.elements.message.value,
    });
  }

  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
