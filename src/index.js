import {
    aboutInput,
    addPlaceButton,
    addPlacePopupElement,
    cardListSelector,
    initialCards,
    nameInput,
    popupEditProfileSelector,
    popupNewPlaceSelector,
    profileEditButton,
    profileEditFormElement,
    templateSelector,
    validationConfig,
    imagePopupSelector,
    userNameSelector,
    userAboutSelector,
} from './scripts/constants.js';

import {Card} from './scripts/Card.js';
import {FormValidator} from './scripts/FormValidator.js';
import {PopupWithImage} from "./scripts/PopupWithImage.js";
import {PopupWithForm} from "./scripts/PopupWithForm.js";
import {Section} from "./scripts/Section.js";
import {UserInfo} from "./scripts/UserInfo.js";

import './pages/index.css';


// --------------- Создание карточек

const createCard = (data) => {
    return new Card(
        {data: data},
        templateSelector,
            _ => {
            popupWithImage.open(data);
        },
    );
};

const cardSection = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = createCard(item);
        cardSection.addItem(card.renderContent());
    }
}, cardListSelector);
cardSection.renderItems();

// --------------- Создание попапов

const popupAddPlaceForm = new PopupWithForm(
    popupNewPlaceSelector,
    (newPlace) => {
        const card = createCard(newPlace);
        const cardElement = card.renderContent();
        cardSection.addItem(cardElement);
    }
);
popupAddPlaceForm.setEventListeners();

const handleProfileDataSubmit = () => {
    userInfo.setUserInfo(nameInput.value, aboutInput.value);
};

const popupEditProfileForm = new PopupWithForm(popupEditProfileSelector, handleProfileDataSubmit);
popupEditProfileForm.setEventListeners();

const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

// --------------- Валидаторы

const profileEditFormValidation = new FormValidator(validationConfig, profileEditFormElement);
const cardAddFormValidation = new FormValidator(validationConfig, addPlacePopupElement.querySelector('.popup__form'))

profileEditFormValidation.enableValidation();
cardAddFormValidation.enableValidation();

// --------------- UserInfo

const userInfo = new UserInfo({
    userName: userNameSelector,
    userAbout: userAboutSelector,
});

// --------------- Привязка обработчиков
addPlaceButton.addEventListener('click', () => {
    popupAddPlaceForm.open();
});

profileEditButton.addEventListener('click', () => {
    const currentUserInfo = userInfo.getUserInfo();
    nameInput.value = currentUserInfo.name;
    aboutInput.value = currentUserInfo.info;

    popupEditProfileForm.open();
});
