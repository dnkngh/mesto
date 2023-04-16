const profileEditFormElement = document.forms['profile-form'];
const profileEditPopupElement = document.querySelector('.popup_type_edit-profile');
const addPlacePopupElement = document.querySelector('.popup_type_add-place');
const imagePopupElement = document.querySelector('.popup_type_image');
const closeButtons = document.querySelectorAll('.popup__close-button');

// --------------- Поля изображений
const placeImage = imagePopupElement.querySelector('.popup__image');
const placeImageName = imagePopupElement.querySelector('.popup__image-name');

// --------------- Кнопки попап-форм
const profileEditButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const avatarEditButton = document.querySelector('.profile__avatar-edit-button');

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
const templateSelector = '.template';
const cardListSelector = '.elements__list';
const cardSelector = '.elements__element';
const popupNewPlaceSelector = '.popup_type_add-place';
const popupEditProfileSelector = '.popup_type_edit-profile';
const popupEditAvatarSelector = '.popup_type_update-avatar';
const popupConfirmDeleteSelector = '.popup_type_confirm-delete';
const imagePopupSelector = '.popup_type_image';
const userNameSelector = '.profile__name';
const userAboutSelector = '.profile__about';
const userAvatarSelector = '.profile__avatar';


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__error_visible'
}

export {
    userAvatarSelector,
    profileEditFormElement,
    profileEditPopupElement,
    addPlacePopupElement,
    avatarEditButton,
    imagePopupElement,
    closeButtons,
    placeImage,
    placeImageName,
    profileEditButton,
    addPlaceButton,
    nameInput,
    aboutInput,
    newPlaceName,
    newPlaceImage,
    userName,
    userAbout,
    templateSelector,
    cardListSelector,
    validationConfig,
    popupConfirmDeleteSelector,
    popupEditAvatarSelector,
    popupNewPlaceSelector,
    popupEditProfileSelector,
    cardSelector,
    imagePopupSelector,
    userNameSelector,
    userAboutSelector,
}
