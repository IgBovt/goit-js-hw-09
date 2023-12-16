import { sentUsersData } from './02-form-sent-user-data';
import { getUsersData } from './02-form-get-user-data';
import { fillUsersData } from './02-form-fill-user-data';

export const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', getUsersData);
formRef.addEventListener('submit', sentUsersData);
window.addEventListener('DOMContentLoaded', fillUsersData);

// function fillUsersData() {
//   const lsData = localStorage.getItem('feedback-form-state');
//   if (lsData) {
//     refs.formRef.elements.email.value = 'ssss';
//     refs.textareaRef.value = 'yyyyy';
//   }
// }
