import {Popup} from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._placeImage = this._popupElement.querySelector('.popup__image');
        this._placeName = this._popupElement.querySelector('.popup__image-name');
    };

    open(values) {
        super.open();
        this._placeImage.src = values.link;
        this._placeImage.alt = values.name;
        this._placeName.textContent = values.name;
    };
}

export { PopupWithImage }
