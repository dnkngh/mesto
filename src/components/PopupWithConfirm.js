import {Popup} from "./Popup.js";

class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupFormElement = this._popupElement.querySelector('.popup__form');
        this._popupSubmitButton = this._popupFormElement.querySelector('.popup__save-button');
        this._popupSubmitButtonDefaultContent = this._popupSubmitButton.textContent;
    };

    setConfirmHandler(func) {
        this._confirmHandler = func;
    };

    handleLoading(isLoading) {
        if(isLoading) {
            this._popupSubmitButton.textContent = 'Удаление...'
        } else {
            this._popupSubmitButton.textContent = this._popupSubmitButtonDefaultContent;
        }
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupFormElement.addEventListener('submit', evt => {
            evt.preventDefault();
            this._confirmHandler();
        });
    };
}

export { PopupWithConfirm };
