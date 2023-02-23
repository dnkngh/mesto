const profileEditFormElement = document.forms['profile-form'];
const profileEditPopupElement = document.querySelector('.popup_type_edit-profile');
const addPlacePopupElement = document.querySelector('.popup_type_add-place');
const imagePopupElement = document.querySelector('.popup_type_image');
const closeButtons = document.querySelectorAll('.popup__close-button');

// --------------- Поля изображений
const placeImage = imagePopupElement.querySelector('.popup__image');
const placeImageName = imagePopupElement.querySelector('.popup__image-name');

// --------------- Кнопки попап-форм
const profileEditOpenButton = document.querySelector('.profile__edit-button');
const addPlaceOpenButton = document.querySelector('.profile__add-button');

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

    function toggleLike() {
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

    favoriteButton.addEventListener('click', toggleLike);
    deletePlaceButton.addEventListener('click',deletePlace);
    placeImageElement.addEventListener('click', openImagePopup);

    return newPlace;
};

const defaultCards = initialCards.map(createNewPlace)

// --------------- Обработчики
const handleEscape = (evt) => {
    if (evt.key=='Escape') {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
};

const handleOverlay = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(evt.target);
    }
};

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
  document.addEventListener('mousedown', handleOverlay);
}

function closePopup (popup) {
   popup.classList.remove('popup_opened');
   document.removeEventListener('keydown', handleEscape);
   document.removeEventListener('mousedown', handleOverlay);
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
    evt.target.reset()

    closeAddPlacePopup();
}

// --------------- Привязка обработчиков
profileEditOpenButton.addEventListener('click', openProfilePopup);
addPlaceOpenButton.addEventListener('click', openAddPlacePopup);

profileEditFormElement.addEventListener('submit', handleProfileFormSubmit);
addPlacePopupElement.addEventListener('submit', handleNewPlaceFormSubmit)

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

cards.append(...defaultCards);
