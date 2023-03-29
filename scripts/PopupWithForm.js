import {Popup} from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._popupFormElement = this._popupElement.querySelector('.popup__form');
        this._popupInputList = this._popupElement.querySelectorAll('.popup__item');

        this._submitFunction = submitFunction;
    };

    _getInputValues() {
        this._values = {};

        this._popupInputList.forEach(inputElement => {
            this._values[inputElement.name] = inputElement.value;
        });

        return this._values;
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupFormElement.addEventListener('submit', evt => {
            evt.preventDefault();
            this._submitFunction(this._getInputValues());
            this.close();
        });
    };

    close() {
        super.close();
        this._popupFormElement.reset();
    };
}

export { PopupWithForm };
