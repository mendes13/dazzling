import React from 'react';
import PropTypes from 'prop-types';

import { Container, Wrapper } from './styles';

function AuthLayout({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
