import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';

import { Container, Wrapper } from './styles';

function DefaultLayout({ children }) {
  return (
    <Container>
      <Header />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
