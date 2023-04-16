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

    setUserInfo({ name, about, avatar, _id }) {
        this._userName.textContent = name;
        this._userAbout.textContent = about;
        this.setUserAvatar(avatar);
    };

    setUserAvatar(url) {
        this._userAvatar.src = url;
    };
}

export { UserInfo }
