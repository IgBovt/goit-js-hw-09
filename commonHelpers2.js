import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as s}from"./assets/vendor-e4ae71e9.js";function r(e){if(e.preventDefault(),e.currentTarget.elements.email.value===""||e.currentTarget.elements.message.value==="")return alert("All form fields must be filled in");console.log({email:e.currentTarget.elements.email.value,message:e.currentTarget.elements.message.value}),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}const a={email:"",message:""};function l(e){a.email=t.elements.email.value.trim(),a.message=t.elements.message.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))}function m(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(t.elements.email.value=e.email,t.elements.message.value=e.message)}const t=document.querySelector(".js-feedback-form");t.addEventListener("input",s(l,1e3));t.addEventListener("submit",r);window.addEventListener("DOMContentLoaded",m);
//# sourceMappingURL=commonHelpers2.js.map