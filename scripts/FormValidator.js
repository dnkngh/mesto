class FormValidator {
    constructor(config, formElement) {
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;

        this._formElement = formElement;
        this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    };

    _showInputError(inputElement,errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
    };

    _checkInputValidity(inputList) {
        return inputList.some(function (inputElement) {
            return !inputElement.validity.valid;
        });
    }

    _toggleErrorVisibility(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage)
        } else {
            this._hideInputError(inputElement)
        }
    };

    _toggleButtonState() {
        if (this._checkInputValidity(this._inputList)) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', true);
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    };

    _setEventListeners() {
        this._formElement.addEventListener('reset', () => {
            setTimeout(() => {
                this._toggleButtonState();
            });
        });

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._toggleErrorVisibility(inputElement);
                this._toggleButtonState();
            });
        });
    };

    _enableValidation() {
        this._setEventListeners();
    };
}

export {FormValidator}