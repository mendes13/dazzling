import React from 'react';
import { Input } from '@rocketseat/unform';
import { MdDevices, MdEqualizer } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { Container } from './styles';

import * as palette from '../../styles/variables';

export default function ExternalLinks({ dazzle }) {
  return (
    <Container>
      <li>
        <strong>
          <MdDevices size={18} color={palette.septenaryGray} />
          Interface
        </strong>
        <Input
          type="text"
          name="interface_url"
          placeholder="e.g. https://figma.com/file/abc123"
        />
      </li>

      <li>
        <strong>
          <FaGithub size={18} color={palette.septenaryGray} />
          GitHub
        </strong>
        <Input
          type="text"
          name="repo_url"
          placeholder="e.g. https://github.com/mendes13/Dazzling"
        />
      </li>

      <li>
        <strong>
          <MdEqualizer size={18} color={palette.septenaryGray} />
          Business Logic
        </strong>

        <Input
          type="text"
          name="logic_url"
          placeholder="e.g. https://docs.google.com/myDoc"
        />
      </li>
    </Container>
  );
}

ExternalLinks.propTypes = {
  dazzle: PropTypes.shape({
    interface_url: PropTypes.string,
    repo_url: PropTypes.string,
    logic_url: PropTypes.string,
  }),
};

ExternalLinks.defaultProps = {
  dazzle: {
    interface_url: null,
    repo_url: null,
    logic_url: null,
  },
};
