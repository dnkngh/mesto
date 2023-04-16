class Card {
    constructor({ data } , templateSelector, handleCardClick, handleDeleteClick, handleLikeClick, api, userId) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;

        this._templateSelector = templateSelector;
        this._cardSelector = '.elements__element';

        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;

        this._api = api;
        this._cardId = data._id;
        this._authorId = data.owner._id;
        this._userId = userId;
    };

    handleDelete() {
        this._view.closest(this._cardSelector).remove();
    };

    handleLike() {
        if(this._likeButton.classList.contains('elements__favorite-active')) {
            this._api.dislikeCard(this._cardId)
              .then(data => {
                  this._likeButton.classList.toggle('elements__favorite-active');
                  this._likeCounter.textContent = data.likes.length;
              })
              .catch(error => console.log(error));
        } else {
            this._api.likeCard(this._cardId)
              .then(data => {
                  this._likeButton.classList.toggle('elements__favorite-active');
                  this._likeCounter.textContent = data.likes.length;
              })
              .catch(error => console.log(error));
        }
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
        this._likeCounter = this._view.querySelector('.elements__favorite-count');

        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteClick();
        });

        this._likeButton.addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    };

    renderCardContent() {
        this._getCardTemplate();
        this._setEventListeners();

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle.textContent = this._name;
        this._likeCounter.textContent = this._likes.length;

        if(!(this._authorId === this._userId)) {
            this._deleteButton.style.display = 'none';
        }

        this._likes.forEach(like => {
            if (like._id === this._userId) {
                this._likeButton.classList.toggle('elements__favorite-active');
            }
        });

        return this._view;
    }
}

export {Card}
