import React from 'react';
import { MdDevices, MdEqualizer } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { Container } from './styles';

import * as palette from '../../../styles/variables';

export default function ExternalLinks({ dazzle }) {
  return (
    <Container>
      {dazzle && dazzle.interface_url && (
        <li>
          <span>
            <strong>
              <MdDevices size={18} color={palette.septenaryGray} />
              Interface
            </strong>
          </span>
          <a
            href={dazzle.interface_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dazzle.interface_url}
          </a>
        </li>
      )}

      {dazzle && dazzle.repo_url && (
        <li>
          <span>
            <strong>
              <FaGithub size={18} color={palette.septenaryGray} />
              GitHub
            </strong>
          </span>
          <a href={dazzle.repo_url} target="_blank" rel="noopener noreferrer">
            {dazzle.repo_url}
          </a>
        </li>
      )}

      {dazzle && dazzle.logic_url && (
        <li>
          <span>
            <strong>
              <MdEqualizer size={18} color={palette.septenaryGray} />
              Business Logic
            </strong>
          </span>
          <a href={dazzle.logic_url} target="_blank" rel="noopener noreferrer">
            {dazzle.logic_url}
          </a>
        </li>
      )}
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
