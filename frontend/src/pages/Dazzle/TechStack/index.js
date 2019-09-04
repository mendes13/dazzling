import React from 'react';
import { MdCode, MdChevronRight } from 'react-icons/md';

import { Container, Tech } from './styles';
import * as palette from '../../../styles/variables';

export default function TechStack() {
  return (
    <Container>
      <header>
        <MdCode size={18} color={palette.septenaryGray} />
        <strong>Tech Stack</strong>
      </header>

      <div>
        <Tech>
          <div>
            Node.js
            <MdChevronRight size={15} color={palette.primaryGray} />
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          </span>
        </Tech>
        <Tech>
          <div>
            Node.js
            <MdChevronRight size={15} color={palette.primaryGray} />
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          </span>
        </Tech>
      </div>
    </Container>
  );
}
