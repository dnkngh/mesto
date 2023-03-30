class UserInfo {
    constructor({ userName, userAbout }) {
        this._userName = document.querySelector(userName);
        this._userAbout = document.querySelector(userAbout);
        this._userNameInput = document.querySelector('.popup__item_type_name');
        this._userAboutInput = document.querySelector('.popup__item_type_about');
    };

    getUserInfo() {
        this._userInfo = {
            name: this._userName.textContent,
            info: this._userAbout.textContent,
        }
        return this._userInfo;
    };

    setUserInfo() {
        this._userName.textContent = this._userNameInput.value;
        this._userAbout.textContent = this._userAboutInput.value;
    };
}

export { UserInfo }
