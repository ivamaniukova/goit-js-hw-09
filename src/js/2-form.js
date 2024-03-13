const form = document.querySelector('.feedback-form');
const lskey = 'feedback-form-state';
const email = form.elements.email;
const message = form.elements.message;

const save = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
form.addEventListener('input', save);

const load = () => {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    const { email, message } = JSON.parse(saveData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
};

window.addEventListener('load', load);

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('No data entered!');
  }
  console.log({
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  });
  form.reset();
});