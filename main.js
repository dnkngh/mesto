(()=>{"use strict";document.forms["profile-form"],document.querySelector(".popup_type_edit-profile"),document.querySelector(".popup_type_add-place");var t=document.querySelector(".popup_type_image"),e=(document.querySelectorAll(".popup__close-button"),t.querySelector(".popup__image"),t.querySelector(".popup__image-name"),document.querySelector(".profile__edit-button")),n=document.querySelector(".profile__add-button"),r=document.querySelector(".profile__avatar-edit-button"),o=(document.querySelector(".popup__item_type_name"),document.querySelector(".popup__item_type_about"),document.querySelector(".popup__item_type_place"),document.querySelector(".popup__item_type_image"),document.querySelector(".profile__name"),document.querySelector(".profile__about"),{formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__item_type_error",errorClass:"popup__error_visible"});function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("".concat(t.status))}},{key:"_getInitialCards",value:function(){return fetch(this._baseUrl+"cards",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"_getUserInfo",value:function(){return fetch(this._baseUrl+"users/me",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(t){return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.username,about:t.userabout})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(t){return fetch(this._baseUrl+"users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.useravatar})}).then(this._checkResponse)}},{key:"_addCard",value:function(t){return fetch(this._baseUrl+"cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch(this._baseUrl+"cards/".concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"likeCard",value:function(t){return fetch(this._baseUrl+"cards/likes/".concat(t),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislikeCard",value:function(t){return fetch(this._baseUrl+"cards/likes/".concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"gatherInitialData",value:function(){return Promise.all([this._getInitialCards(),this._getUserInfo()])}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var s=function(){function t(e,n,r,o,i,u,a){var l=e.data;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=l.name,this._link=l.link,this._likes=l.likes,this._templateSelector=n,this._cardSelector=".elements__element",this._handleCardClick=r,this._handleDeleteClick=o,this._handleLikeClick=i,this._api=u,this._cardId=l._id,this._authorId=l.owner._id,this._userId=a}var e,n;return e=t,(n=[{key:"handleDelete",value:function(){this._view.closest(this._cardSelector).remove()}},{key:"handleLike",value:function(){var t=this;this._likeButton.classList.contains("elements__favorite-active")?this._api.dislikeCard(this._cardId).then((function(e){t._likeButton.classList.toggle("elements__favorite-active"),t._likeCounter.textContent=e.likes.length})).catch((function(t){return console.log(t)})):this._api.likeCard(this._cardId).then((function(e){t._likeButton.classList.toggle("elements__favorite-active"),t._likeCounter.textContent=e.likes.length})).catch((function(t){return console.log(t)}))}},{key:"_getCardTemplate",value:function(){this._view=document.querySelector(this._templateSelector).content.querySelector(this._cardSelector).cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton=this._view.querySelector(".elements__favorite-disabled"),this._deleteButton=this._view.querySelector(".elements__delete-button"),this._cardImage=this._view.querySelector(".elements__image"),this._cardTitle=this._view.querySelector(".elements__title"),this._likeCounter=this._view.querySelector(".elements__favorite-count"),this._deleteButton.addEventListener("click",(function(){t._handleDeleteClick()})),this._likeButton.addEventListener("click",(function(){t._handleLikeClick()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"renderCardContent",value:function(){var t=this;return this._getCardTemplate(),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._likeCounter.textContent=this._likes.length,this._authorId!==this._userId&&(this._deleteButton.style.display="none"),this._likes.forEach((function(e){e._id===t._userId&&t._likeButton.classList.toggle("elements__favorite-active")})),this._view}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(n.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_toggleErrorVisibility",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_toggleButtonState",value:function(){this._checkInputValidity(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var t=this;this._formElement.addEventListener("reset",(function(){setTimeout((function(){t._toggleButtonState()}),0)})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._toggleErrorVisibility(e),t._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var t=this;this._formElement.reset(),this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._toggleButtonState()}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var _=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClick=this._handleOverlayClick.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlayClick",value:function(t){t.target.classList.contains("popup_opened")&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),this._popupElement.addEventListener("mousedown",this._handleOverlayClick),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),this._popupElement.removeEventListener("mousedown",this._handleOverlayClick),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(e){return t.close()}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupFormElement=e._popupElement.querySelector(".popup__form"),e._popupSubmitButton=e._popupFormElement.querySelector(".popup__save-button"),e._popupSubmitButtonDefaultContent=e._popupSubmitButton.textContent,e}return e=u,(n=[{key:"setConfirmHandler",value:function(t){this._confirmHandler=t}},{key:"handleLoading",value:function(t){this._popupSubmitButton.textContent=t?"Удаление...":this._popupSubmitButtonDefaultContent}},{key:"setEventListeners",value:function(){var t=this;b(g(u.prototype),"setEventListeners",this).call(this),this._popupFormElement.addEventListener("submit",(function(e){e.preventDefault(),t._confirmHandler()}))}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._placeImage=e._popupElement.querySelector(".popup__image"),e._placeName=e._popupElement.querySelector(".popup__image-name"),e}return e=u,(n=[{key:"open",value:function(t){C(j(u.prototype),"open",this).call(this),this._placeImage.src=t.link,this._placeImage.alt=t.name,this._placeName.textContent=t.name}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._popupFormElement=n._popupElement.querySelector(".popup__form"),n._popupInputList=n._popupElement.querySelectorAll(".popup__item"),n._popupSubmitButton=n._popupFormElement.querySelector(".popup__save-button"),n._popupSubmitButtonDefaultContent=n._popupSubmitButton.textContent,n._submitFunction=e,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._values={},this._popupInputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setInputValues",value:function(t){this._popupInputList.forEach((function(e){e.value=t[e.name]}))}},{key:"handleLoading",value:function(t){t?this._popupSubmitButton.textContent+="Сохранение...":this._popupSubmitButton.textContent=this._popupSubmitButtonDefaultContent}},{key:"close",value:function(){q(T(u.prototype),"close",this).call(this),this._popupFormElement.reset()}},{key:"setEventListeners",value:function(){var t=this;q(T(u.prototype),"setEventListeners",this).call(this),this._popupFormElement.addEventListener("submit",(function(e){e.preventDefault();var n=t._getInputValues();t._submitFunction(n),t.close()}))}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var x=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var N=function(){function t(e){var n=e.userName,r=e.userAbout,o=e.userAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userAbout=document.querySelector(r),this._userAvatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userInfo={username:this._userName.textContent,userabout:this._userAbout.textContent},this._userInfo}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userAbout.textContent=t.about,this.setUserAvatar(t.avatar)}},{key:"setUserAvatar",value:function(t){this._userAvatar.src=t}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var H=function(t){console.log(t)},J=new a({baseUrl:"https://nomoreparties.co/v1/cohort-64/",headers:{authorization:"0bd885b9-3a94-4715-9b47-6375e24059b0","Content-Type":"application/json"}}),G=function(t){var e=new s({data:t},".template",(function(e){Q.open(t)}),(function(n){W.open(),W.setConfirmHandler((function(){W.handleLoading(!0),J.deleteCard(t._id).then((function(){e.handleDelete()})).catch((function(t){return H(t)})).finally((function(){W.handleLoading(!1),W.close()}))}))}),(function(t){return e.handleLike()}),J,Z);return e.renderCardContent()},M=new x({renderer:function(t){var e=G(t);M.addItem(e)}},".elements__list"),z=new R(".popup_type_add-place",(function(t){z.handleLoading(!0),J._addCard(t).then((function(t){var e=G(t);M.addItem(e)})).catch((function(t){return H(t)})).finally((function(){return z.handleLoading(!1)}))}));z.setEventListeners();var $=new R(".popup_type_edit-profile",(function(t){$.handleLoading(!0),J.setUserInfo(t).then((function(t){return tt.setUserInfo(t)})).catch((function(t){return H(t)})).finally((function(){return $.handleLoading(!1)}))}));$.setEventListeners();var K=new R(".popup_type_update-avatar",(function(t){K.handleLoading(!0),J.setUserAvatar(t).then((function(t){return tt.setUserAvatar(t.avatar)})).catch((function(t){return H(t)})).finally((function(){return K.handleLoading(!1)}))}));K.setEventListeners();var Q=new P(".popup_type_image");Q.setEventListeners();var W=new E(".popup_type_confirm-delete");W.setEventListeners();var X,Y={};X=o,Array.from(document.querySelectorAll(o.formSelector)).forEach((function(t){var e=new y(X,t),n=t.getAttribute("name");Y[n]=e,e.enableValidation()}));var Z,tt=new N({userName:".profile__name",userAbout:".profile__about",userAvatar:".profile__avatar"});n.addEventListener("click",(function(){Y["card-form"].resetValidation(),z.open()})),r.addEventListener("click",(function(){Y["avatar-form"].resetValidation(),K.open()})),e.addEventListener("click",(function(){Y["profile-form"].resetValidation();var t=tt.getUserInfo();$.setInputValues(t),$.open()})),J.gatherInitialData().then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];tt.setUserInfo(i),Z=i._id,M.renderItems(o)})).catch((function(t){return H(t)}))})();