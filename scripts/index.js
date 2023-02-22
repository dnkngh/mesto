const profileEditFormElement = document.querySelector('.popup__form');
const profileEditPopupElement = document.querySelector('.popup_type_edit-profile');
const addPlacePopupElement = document.querySelector('.popup_type_add-place');
const imagePopupElement = document.querySelector('.popup_type_image');

// --------------- Поля изображений
const placeImage = imagePopupElement.querySelector('.popup__image');
const placeImageName = imagePopupElement.querySelector('.popup__image-name');

// --------------- Кнопки попап-форм
const profileEditOpenButton = document.querySelector('.profile__edit-button');
const profileEditCloseButton = profileEditPopupElement.querySelector('.popup__close-button');
const addPlaceOpenButton = document.querySelector('.profile__add-button');
const addPlaceCloseButton = addPlacePopupElement.querySelector('.popup__close-button');
const closeImagePopupButton = imagePopupElement.querySelector('.popup__close-button');

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

const createNewPlace = (item) => {
    const newPlace = template.content.querySelector('.elements__element').cloneNode(true);
    const favoriteButton = newPlace.querySelector('.elements__favorite-disabled');
    const deletePlaceButton = newPlace.querySelector('.elements__delete-button');
    const placeImageElement = newPlace.querySelector('.elements__image')

    function placeToFavoriteToggle() {
        favoriteButton.classList.toggle('elements__favorite-active');
    }

    function deletePlace() {
        newPlace.remove();
    }

    function openImagePopup() {
        openPopup(imagePopupElement);
        placeImage.src = item.link;
        placeImage.alt = item.name;
        placeImageName.textContent = item.name;
    }

    newPlace.querySelector('.elements__title').textContent = item.name;
    placeImageElement.alt = item.name;
    placeImageElement.src = item.link;

    favoriteButton.addEventListener('click', placeToFavoriteToggle);
    deletePlaceButton.addEventListener('click',deletePlace);

    newPlace.querySelector('.elements__image').addEventListener('click', openImagePopup);

    return newPlace;
};

const defaultCards = initialCards.map((item) => {
    return createNewPlace(item);
})

// --------------- Обработчики
const popupListener = function (evt) {
    if (evt.key=='Escape' || evt.target.classList.contains('popup_opened')) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', popupListener);
  document.addEventListener('mousedown', popupListener);
}

function closePopup (popup) {
   popup.classList.remove('popup_opened');
   document.removeEventListener('keydown', popupListener);
   document.removeEventListener('mousedown', popupListener);
}

function openProfilePopup() {
    openPopup(profileEditPopupElement);
    nameInput.value = userName.textContent;
    aboutInput.value = userAbout.textContent;
}

function closeProfilePopup() {
    closePopup(profileEditPopupElement);
}

function openAddPlacePopup() {
    openPopup(addPlacePopupElement);
}

function closeAddPlacePopup() {
    closePopup(addPlacePopupElement);
}

function closeImagePopup() {
    closePopup(imagePopupElement);
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
closeImagePopupButton.addEventListener('click', closeImagePopup);

cards.append(...defaultCards);

