import {
    addPlaceButton,
    cardListSelector,
    initialCards,
    imagePopupSelector,
    popupEditProfileSelector,
    popupNewPlaceSelector,
    profileEditButton,
    templateSelector,
    validationConfig,
    userNameSelector,
    userAboutSelector,
} from '../utils/constants.js';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {Section} from "../components/Section.js";
import {UserInfo} from "../components/UserInfo.js";

import './index.css';


// --------------- Создание карточек

const createCard = (data) => {
    const card = new Card(
        { data: data },
        templateSelector,
        _ => { popupWithImage.open(data) },
    );
    return card.renderContent();
};

const cardSection = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = createCard(item);
        cardSection.addItem(card);
    }
}, cardListSelector);
cardSection.renderItems();

// --------------- Создание попапов

const popupAddPlaceForm = new PopupWithForm(
    popupNewPlaceSelector,
    (newPlace) => {
        const card = createCard(newPlace);
        cardSection.addItem(card);
    }
);
popupAddPlaceForm.setEventListeners();

const handleProfileDataSubmit = (inputValues) => {
    userInfo.setUserInfo(inputValues);
};

const popupEditProfileForm = new PopupWithForm(popupEditProfileSelector, handleProfileDataSubmit);
popupEditProfileForm.setEventListeners();

const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

// --------------- Валидаторы

const formValidators = {};

const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((formElement) => {
        const validator = new FormValidator(config, formElement);
        const formName = formElement.getAttribute('name');
        formValidators[formName] = validator;
        validator.enableValidation();
    });
};

enableValidation(validationConfig);

// --------------- UserInfo

const userInfo = new UserInfo({
    userName: userNameSelector,
    userAbout: userAboutSelector,
});

// --------------- Привязка обработчиков
addPlaceButton.addEventListener('click', () => {
    formValidators['card-form'].resetValidation();
    popupAddPlaceForm.open();
});

profileEditButton.addEventListener('click', () => {
    formValidators['profile-form'].resetValidation();
    const currentUserInfo = userInfo.getUserInfo();
    popupEditProfileForm.setInputValues(currentUserInfo)

    popupEditProfileForm.open();
});
