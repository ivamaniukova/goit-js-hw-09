import"./assets/1-gallery-9540f5ca.js";/* empty css                      */import"./assets/vendor-870f0eb5.js";const e=document.querySelector(".feedback-form"),a="feedback-form-state";e.elements.email;e.elements.message;const l=()=>{const t=localStorage.getItem(a);if(t){const{email:s,message:m}=JSON.parse(t);e.elements.email.value=s,e.elements.message.value=m}};window.addEventListener("DOMContentLoaded",l);const n=()=>{const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem(a,JSON.stringify(t))};e.addEventListener("input",n);e.addEventListener("submit",t=>{if(t.preventDefault(),console.log({email:e.elements.email.value.trim(),message:e.elements.message.value.trim()}),e.elements.email.value===""){alert("No email entered!");return}if(e.elements.message.value===""){alert("No message entered!");return}e.reset(),localStorage.removeItem(a)});
//# sourceMappingURL=commonHelpers3.js.map