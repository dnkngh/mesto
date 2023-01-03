let formElement = document.querySelector('.popup__form');
let profileEditPopupElement = document.querySelector('.popup')

// --------------- Кнопки попап-формы
let profileEditOpenButton = document.querySelector('.profile__edit-button')
let profileEditCloseButton = document.querySelector('.popup__close-button');

// --------------- Поля попап-формы
let nameInput = document.querySelector('.popup__item_type_name');
let aboutInput = document.querySelector('.popup__item_type_about');

// --------------- Элементы страницы с данными о пользователе
let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__about');

// --------------- Обработчики
function openProfilePopup() {
    profileEditPopupElement.classList.add('popup_opened')
    nameInput.value = userName.textContent;
    aboutInput.value = userAbout.textContent;
}

function closeProfilePopup() {
    profileEditPopupElement.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userAbout.textContent = aboutInput.value;
    closeProfilePopup();
}

// --------------- Привязка обработчиков
profileEditOpenButton.addEventListener('click', openProfilePopup);
profileEditCloseButton.addEventListener('click', closeProfilePopup);
formElement.addEventListener('submit', handleFormSubmit);
document.addEventListener('keydown', function (evt) {
    if (evt.key=='Escape') {
        closeProfilePopup();
    }
});
