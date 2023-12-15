const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', getUsersData);
formRef.addEventListener('submit', sentUsersData);

const formData = {
  email: '',
  message: '',
};

function getUsersData(e) {
  formData.email = e.currentTarget.elements.email.value.trim();
  formData.message = e.currentTarget.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function sentUsersData(e) {
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
}
