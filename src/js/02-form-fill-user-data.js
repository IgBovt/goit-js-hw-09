import { formRef } from './02-form';

export function fillUsersData() {
  const lsData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (lsData) {
    formRef.elements.email.value = lsData.email;
    formRef.elements.message.value = lsData.message;
  }
}
