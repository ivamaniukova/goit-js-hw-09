const form = document.querySelector(".feedback-form");
const storage_key = "feedback-for-state";

let formData = {
  email: "",
  message: ""
};

const savedData = localStorage.getItem(storage_key);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || "";
  form.elements.message.value = formData.message || "";
};

form.addEventListener("input", evt => {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  localStorage.setItem(storage_key, JSON.stringify(formData));
});

form.addEventListener("submit", evt => {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  };
  console.log("Form submitted:", formData);
  localStorage.removeItem(storage_key);
  formData = { email: "", message: "" };
  form.reset();
});