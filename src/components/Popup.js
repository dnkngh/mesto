class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClick = this._handleOverlayClick.bind(this);
    };

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    };

    _handleOverlayClick(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        this._popupElement.addEventListener('mousedown', this._handleOverlayClick);
        document.addEventListener('keydown', this._handleEscClose);
    };

    close() {
        this._popupElement.classList.remove('popup_opened');
        this._popupElement.removeEventListener('mousedown', this._handleOverlayClick);
        document.removeEventListener('keydown', this._handleEscClose);
    };

    setEventListeners() {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', _ => this.close());
    };
}

export { Popup }
