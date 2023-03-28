import {
    profileEditFormElement,
    profileEditPopupElement,
    addPlacePopupElement,
    imagePopupElement,
    closeButtons,
    placeImage,
    placeImageName,
    profileEditOpenButton,
    addPlaceOpenButton,
    nameInput,
    aboutInput,
    newPlaceName,
    newPlaceImage,
    userName,
    userAbout,
    template,
    cards,
    validationConfig,
    initialCards,
} from './constants.js';

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { Section } from "./Section.js";
import { UserInfo } from "./UserInfo.js";


// --------------- Создание карточек
const handleAddPlace = (item) => {
    const newPlace = new Card(item, '.template', handleCardClick);

    cards.prepend(newPlace.renderContent());
};

initialCards.forEach((item) => {
    handleAddPlace(item);
});

function handleNewPlaceFormSubmit (evt) {
    evt.preventDefault();
    const newPlace = {
        name: newPlaceName.value,
        link: newPlaceImage.value
    };

    handleAddPlace(newPlace);

    evt.target.reset();

    closeAddPlacePopup();
}

const profileEditFormValidation = new FormValidator(validationConfig, profileEditFormElement);
const cardAddFormValidation = new FormValidator(validationConfig, addPlacePopupElement.querySelector('.popup__form'))

profileEditFormValidation.enableValidation();
cardAddFormValidation.enableValidation();

// --------------- Обработчики
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

function openProfilePopup() {
    openPopup(profileEditPopupElement);
    nameInput.value = userName.textContent;
    aboutInput.value = userAbout.textContent;
}

function closeProfilePopup() {
    closePopup(profileEditPopupElement);
}

function openAddPlacePopup() {
    cardAddFormValidation.resetValidation();
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

function handleCardClick(name, link) {
    placeImage.src = link;
    placeImage.alt = name;
    placeImageName.textContent = name;
    openPopup(imagePopupElement);
}


// --------------- Привязка обработчиков
profileEditOpenButton.addEventListener('click', openProfilePopup);
addPlaceOpenButton.addEventListener('click', () => {
    openAddPlacePopup();
});

profileEditFormElement.addEventListener('submit', handleProfileFormSubmit);
addPlacePopupElement.addEventListener('submit', handleNewPlaceFormSubmit)

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

export {imagePopupElement, placeImageName, placeImage, openPopup}
