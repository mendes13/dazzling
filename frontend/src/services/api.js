import axios from 'axios';

import { store } from '../store';
import { signOut } from '../store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

api.interceptors.response.use(null, async err => {
  const {
    status,
    data: { error },
  } = err.response;

  if (status === 401 && error === 'Invalid Token') {
    store.dispatch(signOut());
  }

  return Promise.reject(err);
});

export default api;
