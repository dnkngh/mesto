import {
    userAvatarSelector,
    addPlaceButton,
    avatarEditButton,
    cardListSelector,
    imagePopupSelector,
    popupConfirmDeleteSelector,
    popupEditAvatarSelector,
    popupEditProfileSelector,
    popupNewPlaceSelector,
    profileEditButton,
    templateSelector,
    validationConfig,
    userNameSelector,
    userAboutSelector,
} from '../utils/constants.js';

import {Api} from "../components/Api.js";
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithConfirm} from "../components/PopupWithConfirm.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {Section} from "../components/Section.js";
import {UserInfo} from "../components/UserInfo.js";

import './index.css';


const errorHandler = (err) => {
    console.log(err)
};

// --------------- API

const api = new Api({
    baseUrl: 'https://nomoreparties.co/v1/cohort-64/',
    headers: {
        authorization: '0bd885b9-3a94-4715-9b47-6375e24059b0',
        'Content-Type': 'application/json',
    },
});

// --------------- Создание карточек

const createCard = (data) => {
    const card = new Card(
        { data: data },
        templateSelector,
        _ => { popupWithImage.open(data) },
        _ => {
            popupWithConfirm.open()
            popupWithConfirm.setConfirmHandler(() => {
                popupWithConfirm.handleLoading(true);
                api.deleteCard(data._id)
                  .then(() => {card.handleDelete()})
                  .catch(error => errorHandler(error))
                  .finally(() => {
                      popupWithConfirm.handleLoading(false)
                      popupWithConfirm.close()
                  });
            });
        },
      api,
      userId,
    );
    return card.renderCardContent();
};

const cardSection = new Section({
    renderer: (item) => {
        const card = createCard(item);
        cardSection.addItem(card);
    }
}, cardListSelector);

// --------------- Создание попапов

const popupAddPlaceForm = new PopupWithForm(
    popupNewPlaceSelector,
    (newPlace) => {
        popupAddPlaceForm.handleLoading(true);
        api._addCard(newPlace)
          .then((data) => {
            const card = createCard(data);
            cardSection.addItem(card);
          })
          .catch((error) => errorHandler(error))
          .finally(() => popupAddPlaceForm.handleLoading(false));
    }
);
popupAddPlaceForm.setEventListeners();

const popupEditProfileForm = new PopupWithForm(
  popupEditProfileSelector,
  (inputValues) => {
    popupEditProfileForm.handleLoading(true);
    api.setUserInfo(inputValues)
        .then(data => userInfo.setUserInfo(data))
        .catch(error => errorHandler(error))
        .finally(() => popupEditProfileForm.handleLoading(false));
  },
);
popupEditProfileForm.setEventListeners();

const popupEditAvatarForm = new PopupWithForm(
  popupEditAvatarSelector,
  (inputValues) => {
      popupEditAvatarForm.handleLoading(true);
      api.setUserAvatar(inputValues)
        .then(inputValues => userInfo.setUserAvatar(inputValues.avatar))
        .catch(error => errorHandler(error))
        .finally(() => popupEditAvatarForm.handleLoading(false));
  }
);
popupEditAvatarForm.setEventListeners();

const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

const popupWithConfirm = new PopupWithConfirm(popupConfirmDeleteSelector);
popupWithConfirm.setEventListeners();

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
    userAvatar: userAvatarSelector,
});

// --------------- Привязка обработчиков
addPlaceButton.addEventListener('click', () => {
    formValidators['card-form'].resetValidation();
    popupAddPlaceForm.open();
});

avatarEditButton.addEventListener('click', () => {
    formValidators['avatar-form'].resetValidation();
    popupEditAvatarForm.open();
})

profileEditButton.addEventListener('click', () => {
    formValidators['profile-form'].resetValidation();
    const currentUserInfo = userInfo.getUserInfo();
    popupEditProfileForm.setInputValues(currentUserInfo)

    popupEditProfileForm.open();
});


let userId;
api.gatherInitialData().then(
    (args) => {
        const [initialCardsData, initialUserData] = args;

        userInfo.setUserInfo(initialUserData);
        userId = initialUserData._id;

        cardSection.renderItems(initialCardsData);
    }
).catch(error => errorHandler(error));
