class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  };

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status}`);
  };

  _getInitialCards() {
    return this._request(
      this._baseUrl + 'cards',
      {
        method: 'GET',
        headers: this._headers,
      },
    );
  };

  _getUserInfo() {
    return this._request(
      this._baseUrl + 'users/me',
      {
        method: 'GET',
        headers: this._headers,
      },
    );
  };

  setUserInfo(inputValues) {
    return this._request(
      this._baseUrl + 'users/me',
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: inputValues.username,
          about: inputValues.userabout,
        }),
      },
    );
  };

  setUserAvatar(inputValues) {
    return this._request(
      this._baseUrl + 'users/me/avatar',
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: inputValues.useravatar,
        }),
      },
    );
  };

  addCard(data) {
    return this._request(
      this._baseUrl + 'cards',
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
      },
    );
  };

  deleteCard(id) {
    return this._request(
      this._baseUrl + `cards/${id}`,
      {
        method: 'DELETE',
        headers: this._headers,
      },
    );
  };

  likeCard(id) {
    return this._request(
      this._baseUrl + `cards/likes/${id}`,
      {
        method: 'PUT',
        headers: this._headers,
      },
    );
  };

  dislikeCard(id) {
    return this._request(
      this._baseUrl + `cards/likes/${id}`,
      {
        method: 'DELETE',
        headers: this._headers,
      },
    );
  };

  gatherInitialData() {
    return Promise.all([this._getInitialCards(), this._getUserInfo()]);
  };
}

export { Api }
