import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo_color.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('The email is not valid')
    .required('The email is required'),
  password: Yup.string()
    .required('The password is required')
    .min(6, 'Your password needs to be at least 6 characters long'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  async function handleSubmit({ email, password }) {
    dispatch(signInRequest({ email, password }));
  }

  return (
    <>
      <img src={logo} alt="Dazzling" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <Link to="/signup">Create a free account</Link>
      </Form>
    </>
  );
}
