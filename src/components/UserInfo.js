class UserInfo {
    constructor({ userName, userAbout, userAvatar }) {
        this._userName = document.querySelector(userName);
        this._userAbout = document.querySelector(userAbout);
        this._userAvatar = document.querySelector(userAvatar);
    };

    getUserInfo() {
        this._userInfo = {
            username: this._userName.textContent,
            userabout: this._userAbout.textContent,
        }
        return this._userInfo;
    };

    setUserInfo(inputValues) {
        this._userName.textContent = inputValues.username;
        this._userAbout.textContent = inputValues.userabout;
        this._setUserAvatar(inputValues.useravatar);
    };

    _setUserAvatar(url) {
        this._userAvatar.src = url;
    };
}

export { UserInfo }
