import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure, signUpSuccess } from './actions';

import history from '../../../services/history';
import api from '../../../services/api';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;

    // Sets JWT token to all future requests
    api.defaults.headers.Authorization = `Bearer ${token}`;
    toast.success('You are logged in!');
    yield put(signInSuccess({ token, user }));
  } catch (err) {
    toast.error('Something went wrong. Check your credentials');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  try {
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    toast.success('Your account is created!');
    history.push('/');
    yield put(signUpSuccess());
  } catch (err) {
    toast.error('Something went wrong. Try again');
    yield put(signFailure);
  }
}

export function signOut() {
  toast.warn('You are logged out');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    // Sets JWT token to all future requests
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
