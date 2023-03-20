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


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__error_visible'
}

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

export {
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
}
