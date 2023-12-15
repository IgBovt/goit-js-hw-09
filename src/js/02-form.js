import { sentUsersData } from './02-form-sent-user-data';
import { getUsersData } from './02-form-get-user-data';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', getUsersData);
formRef.addEventListener('submit', sentUsersData);
