import { sentUsersData } from './02-form-sent-user-data';
import { getUsersData } from './02-form-get-user-data';
import { fillUsersData } from './02-form-fill-user-data';
import throttle from 'lodash.throttle';

export const formRef = document.querySelector('.js-feedback-form');

formRef.addEventListener('input', throttle(getUsersData, 1000));
formRef.addEventListener('submit', sentUsersData);
window.addEventListener('DOMContentLoaded', fillUsersData);
