import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdCreate, MdExitToApp } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container, FormWrapper, LogoutButton } from './styles';
import { primaryGray } from '../../styles/variables';

const schema = Yup.object().shape({
  avatar_id: Yup.string(),
  name: Yup.string().required('Your name is required'),
  email: Yup.string()
    .email('Please insert a valid email')
    .required('Your email is required'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword ? field.required('Your new password is required').min(6) : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Please confirm the password')
          .oneOf([Yup.ref('password')], 'The passwords do not match')
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <h1>Update Profile</h1>

      <FormWrapper>
        <Form initialData={profile} onSubmit={handleSubmit} schema={schema}>
          <AvatarInput name="avatar_id" userName={profile && profile.name} />
          <Input name="name" type="text" placeholder="Name" />
          <Input name="email" type="email" placeholder="Email" />

          <hr />

          <Input
            name="oldPassword"
            type="password"
            placeholder="Current password"
          />
          <Input name="password" type="password" placeholder="New password" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />
          <button type="submit">
            <MdCreate size={18} color={primaryGray} />
            Update Profile
          </button>
        </Form>

        <LogoutButton type="button" onClick={handleSignOut}>
          <MdExitToApp size={18} color={primaryGray} />
          Log Out
        </LogoutButton>
      </FormWrapper>
    </Container>
  );
}
