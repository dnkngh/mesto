import {Popup} from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._popupFormElement = this._popupElement.querySelector('.popup__form');
        this._popupInputList = this._popupElement.querySelectorAll('.popup__item');
        this._popupSubmitButton = this._popupFormElement.querySelector('.popup__save-button');
        this._popupSubmitButtonDefaultContent = this._popupSubmitButton.textContent;

        this._submitFunction = submitFunction;
    };

    _getInputValues() {
        this._values = {};

        this._popupInputList.forEach(inputElement => {
            this._values[inputElement.name] = inputElement.value;
        });

        return this._values;
    };

    setInputValues(data) {
        this._popupInputList.forEach((input) => {
            input.value = data[input.name];
        });
    };

    handleLoading(isLoading) {
        if(isLoading) {
            this._popupSubmitButton.textContent = 'Сохранение...'
        } else {
            this._popupSubmitButton.textContent = this._popupSubmitButtonDefaultContent;
        }
    };

    close() {
        super.close();
        this._popupFormElement.reset();
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupFormElement.addEventListener('submit', evt => {
            evt.preventDefault();
            const inputValues = this._getInputValues();
            this._submitFunction(inputValues);
        });
    };
}

export { PopupWithForm };
