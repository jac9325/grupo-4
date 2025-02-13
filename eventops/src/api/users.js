const API_SERVER = 'http://localhost:5000';

const ENDPOINTS = {
  GET_ALL: '/api/users',
  CREATE: '/api/users/create',
  LOGIN: '/api/login',
};

export const getAllUsers = () => {
  const path = `${API_SERVER}${ENDPOINTS.GET_ALL}`;
  return new Promise((resolve, reject) => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const createUser = (user) => {
  const path = `${API_SERVER}${ENDPOINTS.CREATE}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const login = (user) => {
  const path = `${API_SERVER}${ENDPOINTS.LOGIN}`;

  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve({ token: data.token });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};
