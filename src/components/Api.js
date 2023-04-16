class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status}`);
  };

  _getInitialCards() {
    return fetch(
      this._baseUrl + 'cards',
      {
        method: 'GET',
        headers: this._headers,
      },
    ).then(this._checkResponse);
  };

  _getUserInfo() {
    return fetch(
      this._baseUrl + 'users/me',
      {
        method: 'GET',
        headers: this._headers,
      },
    ).then(this._checkResponse);
  };

  setUserInfo(inputValues) {
    return fetch(this._baseUrl + 'users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: inputValues.username,
        about: inputValues.userabout,
      }),
    }).then(this._checkResponse);
  };

  setUserAvatar(inputValues) {
    return fetch(this._baseUrl + 'users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: inputValues.useravatar,
      }),
    }).then(this._checkResponse);
  };

  _addCard(data) {
    return fetch(this._baseUrl + 'cards', {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
      }
    ).then(this._checkResponse);
  };

  deleteCard(id) {
    return fetch(
      this._baseUrl + `cards/${id}`, {
        method: 'DELETE',
        headers: this._headers,
      }
    ).then(this._checkResponse);
  };

  gatherInitialData() {
    return Promise.all([this._getInitialCards(), this._getUserInfo()]);
  };
}

export { Api }
