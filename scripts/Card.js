import {imagePopupElement, placeImage, placeImageName, openPopup} from './index.js'

class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    };

    _handleDelete() {
        this._view.closest('.elements__element').remove()
    };

    _handleLike() {
        this._view.querySelector('.elements__favorite-disabled').classList.toggle('elements__favorite-active')
    };

    _getCardTemplate() {
        this._view = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.elements__element')
            .cloneNode(true);
    };

    _handleOpenCardPopup() {
        placeImage.src = this._link;
        placeImage.alt = this._name;
        placeImageName.textContent = this._name;
        openPopup(imagePopupElement);
    }

    _setEventListeners() {
        this._view.querySelector('.elements__delete-button').addEventListener('click', () => {
            this._handleDelete();
        });

        this._view.querySelector('.elements__favorite-disabled').addEventListener('click', () => {
            this._handleLike();
        });

        this._view.querySelector('.elements__image').addEventListener('click', () => {
            this._handleOpenCardPopup();
        });
    }

    renderContent(container) {
        this._getCardTemplate();
        this._setEventListeners();
        this._cardImage = this._view.querySelector('.elements__image');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._view.querySelector('.elements__title').textContent = this._name;
        container.prepend(this._view);
    }
}

export {Card}