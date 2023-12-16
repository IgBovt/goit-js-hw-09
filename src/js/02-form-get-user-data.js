const formData = {
  email: '',
  message: '',
};

export function getUsersData(e) {
  formData.email = e.currentTarget.elements.email.value.trim();
  formData.message = e.currentTarget.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
