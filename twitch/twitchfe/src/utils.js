const SERVER_ORIGIN = '';

const loginUrl = `${SERVER_ORIGIN}/login`; //template string，`:backtick; $:dollar sign

export const login = (credential) => {
  const formData = new FormData(); //Form data helps us build key-value pairs
  formData.append("username", credential.username);
  formData.append("password", credential.password);

//Postman: http://localhost:8080/login
//loginURL: /login; proxy: http://localhost:8080
  return fetch(loginUrl, {
    method: 'POST',
    credentials: 'include',
    body: formData
  }).then((response) => {  //.then is a promise; promise has 3 return results: success,fail,pending(等待)
    //response is the last return's result and is passed as a parameter to the next then; if last promise isn't a failure.
    if (response.status !== 204) {
      //204: no content
      throw Error('Fail to log in');
    }
  })
}

const registerUrl = `${SERVER_ORIGIN}/register`;

export const register = (data) => {
  return fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) //convert data to string if data is a non-string object.
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to register');
    }
  })  //.then后面可以再加./then: 给一个详细的step
}

const logoutUrl = `${SERVER_ORIGIN}/logout`;

export const logout = () => {
  return fetch(logoutUrl, {
    method: 'POST',
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 204) {
      throw Error('Fail to log out');
    }
  })
}

const topGamesUrl = `${SERVER_ORIGIN}/game`;

export const getTopGames = () => {
  return fetch(topGamesUrl).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to get top games');
    }

    return response.json(); //return a promise
  })
}

const getGameDetailsUrl = `${SERVER_ORIGIN}/game?game_name=`;

const getGameDetails = (gameName) => {
  return fetch(`${getGameDetailsUrl}${gameName}`).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to find the game');
    }

    return response.json();
  });
}

const searchGameByIdUrl = `${SERVER_ORIGIN}/search?game_id=`;

export const searchGameById = (gameId) => {
  return fetch(`${searchGameByIdUrl}${gameId}`).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to find the game');
    }
    return response.json();
  })
}

export const searchGameByName = (gameName) => {
  return getGameDetails(gameName).then((data) => {
    if (data && data[0].id) {
      return searchGameById(data[0].id);
    }

    throw Error('Fail to find the game')
  })
}

const favoriteItemUrl = `${SERVER_ORIGIN}/favorite`;

export const addFavoriteItem = (favItem) => {
  return fetch(favoriteItemUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ favorite: favItem })
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to add favorite item');
    }
  })
}

export const deleteFavoriteItem = (favItem) => {
  return fetch(favoriteItemUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ favorite: favItem })
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to delete favorite item');
    }
  })
}

export const getFavoriteItem = () => {
  return fetch(favoriteItemUrl, {
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to get favorite item');
    }


    return response.json();
  })
}

const getRecommendedItemsUrl = `${SERVER_ORIGIN}/recommendation`;

export const getRecommendations = () => {
  return fetch(getRecommendedItemsUrl, {
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to get recommended item');
    }

    return response.json();
  })
}
