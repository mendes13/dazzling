import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  const { name, email, avatar_id, ...rest } = payload.data;

  try {
    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Profile updated with success');
    history.push('/dashboard');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    if (err.response.data.error === 'Password does not match') {
      toast.error('Your current password is incorrect');
    } else {
      toast.error('Something went wrong. Check your credentials');
    }

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
