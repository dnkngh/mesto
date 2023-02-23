const showInputError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
};

const checkInputValidity = (inputList) => {
    return inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
    });
};

const toggleErrorVisibility = (formElement, inputElement, validationConfig) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    } else {
        hideInputError(formElement, inputElement, validationConfig);
    }
};

const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {
    if (checkInputValidity(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
};

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, ...validationConfig}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    toggleButtonState(inputList, buttonElement, validationConfig);
    formElement.addEventListener('reset', () => {
        setTimeout(() => {
            toggleButtonState(inputList, buttonElement, validationConfig);
        }, 0);
    });

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            toggleErrorVisibility(formElement, inputElement, validationConfig);
            toggleButtonState(inputList, buttonElement, validationConfig);
        });
    });
};

const enableValidation = ({formSelector, ...validationConfig}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, validationConfig);
    });
};

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__error_visible'
}

enableValidation(validationConfig);
