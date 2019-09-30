import React from 'react';
import { MdCode } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Tech from './Tech';
import * as palette from '../../../styles/variables';

export default function TechStack({ techs }) {
  return (
    <Container>
      <header>
        <MdCode size={18} color={palette.septenaryGray} />
        <strong>Tech Stack</strong>
      </header>
      <div>{techs && techs.map(tech => <Tech data={tech} />)}</div>
    </Container>
  );
}

TechStack.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
