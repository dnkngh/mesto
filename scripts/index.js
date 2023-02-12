const profileEditFormElement = document.querySelector('.popup__form');
const profileEditPopupElement = document.querySelector('.popup_type_edit-profile');
const addPlacePopupElement = document.querySelector('.popup_type_add-place');

// --------------- Кнопки попап-форм
const profileEditOpenButton = document.querySelector('.profile__edit-button');
const profileEditCloseButton = profileEditPopupElement.querySelector('.popup__close-button');
const addPlaceOpenButton = document.querySelector('.profile__add-button');
const addPlaceCloseButton = addPlacePopupElement.querySelector('.popup__close-button');

// --------------- Поля попап-формы профиля
const nameInput = document.querySelector('.popup__item_type_name');
const aboutInput = document.querySelector('.popup__item_type_about');

// --------------- Поля попап-формы добавления места
const newPlaceName = document.querySelector('.popup__item_type_place');
const newPlaceImage = document.querySelector('.popup__item_type_image');

// --------------- Элементы страницы с данными о пользователе
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');

// --------------- Создание карточки из шаблона
const template = document.querySelector('.template');
const cards = document.querySelector('.elements__list');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const createNewPlace = (item) => {
    const newPlace = template.content.querySelector('.elements__element').cloneNode(true);
    const favoriteButton = newPlace.querySelector('.elements__favorite-disabled');
    const deletePlaceButton = newPlace.querySelector('.elements__delete-button');
    const imagePopupElement = document.querySelector('.popup_type_image');
    const placeImage = newPlace.querySelector('.popup__image');
    const closeImagePopupButton = imagePopupElement.querySelector('.popup__close-button');

    function placeToFavoriteToggle() {
        favoriteButton.classList.toggle('elements__favorite-active');
    }

    function deletePlace(evt) {
        evt.target.closest('.elements__element').remove();
    }

    function openImagePopup(imagePopupElement) {
        imagePopupElement.classList.add('popup_opened');
        imagePopupElement.querySelector('.popup__image').src = item.link;
        imagePopupElement.querySelector('.popup__image').alt = item.name;
        imagePopupElement.querySelector('.popup__image-name').textContent = item.name;
    }

    function closeImagePopup() {
        imagePopupElement.classList.remove('popup_opened');
    }

    newPlace.querySelector('.elements__title').textContent = item.name;
    newPlace.querySelector('.elements__image').alt = item.name;
    newPlace.querySelector('.elements__image').src = item.link;

    favoriteButton.addEventListener('click', placeToFavoriteToggle);
    deletePlaceButton.addEventListener('click',deletePlace);
    closeImagePopupButton.addEventListener('click', closeImagePopup);
    document.addEventListener('keydown', function (evt) {
        if (evt.key=='Escape') {
            closeImagePopup();
        }
    });
    newPlace.querySelector('.elements__image').addEventListener('click', () => openImagePopup(imagePopupElement));

    return newPlace;
};

const defaultCards = initialCards.map((item) => {
    return createNewPlace(item);
})

// --------------- Обработчики
function openProfilePopup() {
    profileEditPopupElement.classList.add('popup_opened');
    nameInput.value = userName.textContent;
    aboutInput.value = userAbout.textContent;
}

function closeProfilePopup() {
    profileEditPopupElement.classList.remove('popup_opened');
}

function openAddPlacePopup() {
    addPlacePopupElement.classList.add('popup_opened');
}

function closeAddPlacePopup() {
    addPlacePopupElement.classList.remove('popup_opened');
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userAbout.textContent = aboutInput.value;
    closeProfilePopup();
}

function handleNewPlaceFormSubmit (evt) {
    evt.preventDefault();
    const newPlace = createNewPlace({
            name: newPlaceName.value,
            link: newPlaceImage.value
    })
    cards.prepend(newPlace);
    newPlaceName.value = '';
    newPlaceImage.value = '';

    closeAddPlacePopup();
}

// --------------- Привязка обработчиков
profileEditOpenButton.addEventListener('click', openProfilePopup);
profileEditCloseButton.addEventListener('click', closeProfilePopup);
addPlaceOpenButton.addEventListener('click', openAddPlacePopup);
addPlaceCloseButton.addEventListener('click', closeAddPlacePopup);
profileEditFormElement.addEventListener('submit', handleProfileFormSubmit);
addPlacePopupElement.addEventListener('submit', handleNewPlaceFormSubmit)
document.addEventListener('keydown', function (evt) {
    if (evt.key=='Escape') {
        closeProfilePopup();
    }
});
document.addEventListener('keydown', function (evt) {
    if (evt.key=='Escape') {
        closeAddPlacePopup();
    }
});
cards.append(...defaultCards);
