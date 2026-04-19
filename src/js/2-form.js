const formData = {
    email: "",
    message: ""
}

const key = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const emailInput = formEl.querySelector("input");
const messageTextarea = formEl.querySelector("textarea");

formEl.addEventListener("input", onFormHandler);
formEl.addEventListener("submit", onFormSubmit);

function onFormHandler(event) {
    const value = event.target.value.trim();

    formData[event.target.name] = value;
    localStorage.setItem(key, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    if (formData.email.length === 0 || formData.message.length === 0) {
        alert('Fill please all fields')
        return
    }
    console.log(formData);
    event.target.reset();
    localStorage.removeItem(key);
}

const savedValue = localStorage.getItem(key)
if (savedValue) {
    const savedObj = JSON.parse(savedValue);
    emailInput.value = savedObj.email;
    messageTextarea.value = savedObj.message;
    formData.email = emailInput.value;
    formData.message = messageTextarea.value;
}

