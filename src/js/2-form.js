const form = document.querySelector('.feedback-form');
const lskey = 'feedback-form-state';
const email = form.elements.email;
const message = form.elements.message;

const load = () => {
  const saveData = localStorage.getItem(lskey);
  if (saveData) {
    const { email, message } = JSON.parse(saveData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
};

window.addEventListener('DOMContentLoaded', load);

const save = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(lskey, JSON.stringify(formData));
};
form.addEventListener('input', save);

form.addEventListener('submit', e => {
  e.preventDefault();

  console.log({
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  });

  if (form.elements.email.value === '') {
    alert('No email entered!');
    return;
  }
  if (form.elements.message.value === '') {
    alert('No message entered!');
    return;
  }
  
  form.reset();
  localStorage.removeItem(lskey);
});