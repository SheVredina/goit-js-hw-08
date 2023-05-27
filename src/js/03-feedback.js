import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const FORMS_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('input', throttle(onInputForm, 500));
saveText();

function onSubmitForm(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;

  console.log({ email: email.value, message: message.value });
  formEl.reset();
  localStorage.removeItem(FORMS_KEY);
}
const data = {};

function onInputForm(event) {
  data[event.target.name] = event.target.value;
  localStorage.setItem(FORMS_KEY, JSON.stringify(data));
}

function saveText() {
  const savedMessege = JSON.parse(localStorage.getItem(FORMS_KEY));
  if (savedMessege) {
    messageEl.value = savedMessege.message;
    emailEl.value = savedMessege.email;
    console.log('savedMessege');
  }
}
