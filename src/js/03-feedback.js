import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const formEl = document.querySelector('form');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onformEl, 500));

fillForm();


function onFormSubmit(e) {
    e.preventDefault();
    formData.email = formEl.elements.email.value;
    formData.message = formEl.elements.message.value;

    console.log(formData);
    formData = {};
    formEl.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onformEl(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function fillForm() {
    const savedForm = localStorage.getItem(STORAGE_KEY);
    if (savedForm) {
        const parceSavedForm = JSON.parse(savedForm);
        
        for (const prop in parceSavedForm) {
        if (parceSavedForm.hasOwnProperty(prop)) {
            formEl.elements[prop].value = parceSavedForm[prop];
            formData[prop] = parceSavedForm[prop];
        }
    }
    }  
};