import React, { useState, useEffect } from 'react';
import { MdCode } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Tech from './Tech';
import AddTech from './AddTech';
import * as palette from '../../styles/variables';
import api from '../../services/api';

export default function TechStack({ dazzle_id }) {
  const [techs, setTechs] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let unmounted = false;

    async function loadTechs() {
      const response = await api.get(`stacks/${dazzle_id}`);

      if (!unmounted) {
        setTechs(response.data);
      }
    }

    async function loadOptions() {
      const response = await api.get('techs');

      const formattedOptions = response.data.map(item => ({
        id: item.id,
        title: item.name,
        color: item.color,
      }));

      if (!unmounted) {
        setOptions(formattedOptions);
      }
    }

    loadTechs();
    loadOptions();

    return () => {
      unmounted = true;
    };
  }, [dazzle_id]);

  return (
    <Container>
      <header>
        <MdCode size={18} color={palette.septenaryGray} />
        <strong>Tech Stack</strong>
      </header>
      <div>
        <AddTech
          dazzle_id={dazzle_id}
          options={options}
          techs={techs}
          setTechs={setTechs}
        />

        {techs &&
          techs.map(tech => (
            <Tech
              key={tech.id}
              data={tech}
              dazzle_id={dazzle_id}
              options={options}
              techs={techs}
              setTechs={setTechs}
            />
          ))}
      </div>
    </Container>
  );
}

TechStack.propTypes = {
  dazzle_id: PropTypes.number.isRequired,
};
