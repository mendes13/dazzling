import React, { useState } from 'react';
import { MdChevronRight } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, Wrapper } from './styles';
import * as palette from '../../../../styles/variables';

export default function Tech({ data }) {
  const [hover, setHover] = useState(false);

  const color = data.tech.hex_color;
  const tech = data.tech.name;
  const { description } = data;

  return (
    <Container
      hover={hover}
      color={color}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div>{tech}</div>
      <Wrapper hover={hover} color={color}>
        <span>
          <MdChevronRight size={15} color={palette.primaryGray} />
        </span>
        <p>{description}</p>
      </Wrapper>
    </Container>
  );
}

Tech.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    tech: PropTypes.shape({
      name: PropTypes.string,
      hex_color: PropTypes.string,
    }),
  }).isRequired,
};
