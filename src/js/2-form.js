const formData = {
    email: "",
    message: ""
}
// const { email, message } = formData;

const key = "feedback-form-state";

const formEl = document.querySelector(".feedback-form");
formEl.addEventListener("input", onFormHandler);

function onFormHandler(event) {

    const value = event.target.value.trim();

    formData[event.target.name] = value;
    
    console.log(formData);
}


