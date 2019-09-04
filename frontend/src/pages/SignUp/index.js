import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo_color.png';

const schema = Yup.object().shape({
  name: Yup.string().required('Your name is required'),
  email: Yup.string()
    .email('The email is not valid')
    .required('The email is required'),
  password: Yup.string()
    .required('The password is required')
    .min(6, 'Your password needs to be at least 6 characters long'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest({ name, email, password }));
  }

  return (
    <>
      <img src={logo} alt="Dazzling" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" type="text" placeholder="Name" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Create Account</button>
        <Link to="/">Already have an account? </Link>
      </Form>
    </>
  );
}
