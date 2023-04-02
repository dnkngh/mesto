class Card {
    constructor({ data } , templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._cardSelector = '.elements__element';
        this._handleCardClick = handleCardClick;
    };

    _handleDelete() {
        this._view.closest(this._cardSelector).remove();
    };

    _handleLike() {
        this._likeButton.classList.toggle('elements__favorite-active');
    };

    _getCardTemplate() {
        this._view = document
            .querySelector(this._templateSelector)
            .content
            .querySelector(this._cardSelector)
            .cloneNode(true);
    };

    _setEventListeners() {
        this._likeButton = this._view.querySelector('.elements__favorite-disabled');
        this._deleteButton = this._view.querySelector('.elements__delete-button');
        this._cardImage = this._view.querySelector('.elements__image');
        this._cardTitle = this._view.querySelector('.elements__title')

        this._deleteButton.addEventListener('click', () => {
            this._handleDelete();
        });

        this._likeButton.addEventListener('click', () => {
            this._handleLike();
        });

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    };

    renderContent() {
        this._getCardTemplate();
        this._setEventListeners();
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;

        return this._view;
    }
}

export {Card}
