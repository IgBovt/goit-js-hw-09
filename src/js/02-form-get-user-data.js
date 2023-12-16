import { formRef } from './02-form';

const formData = {
  email: '',
  message: '',
};

export function getUsersData(e) {
  formData.email = formRef.elements.email.value.trim();
  formData.message = formRef.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
