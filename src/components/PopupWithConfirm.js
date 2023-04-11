import {Popup} from "./Popup.js";

class PopupWithConfirm extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._popupFormElement = this._popupElement.querySelector('.popup__form');

        this._submitFunction = submitFunction;
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupFormElement.addEventListener('submit', evt => {
            evt.preventDefault();
            this._handleDelete();
        });
    };
}

export { PopupWithConfirm };
