class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
    };

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    };

    _handleOverlayClick(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close(evt.target);
        }
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        this._popupElement.addEventListener('mousedown', this._handleOverlayClick.bind(this));
        document.addEventListener('keydown', this._handleEscClose);

    };

    close() {
        this._popupElement.classList.remove('popup_opened');
        this._popupElement.removeEventListener('mousedown', this._handleOverlayClick);
        document.removeEventListener('keydown', this._handleEscClose);
    };

    setEventListeners() {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', this.close); // проверить
    };
}

export { Popup }
