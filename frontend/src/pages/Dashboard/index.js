import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLightbulbOutline, MdKeyboardArrowRight } from 'react-icons/md';

import api from '../../services/api';

import { Container, Head, DazzleList, Dazzle } from './styles';
import { primaryGray, tertiaryGray } from '../../styles/variables';

export default function Dashboard() {
  const [dazzles, setDazzles] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get('dazzles');
      console.tron.log(response.data);
      setDazzles(response.data);
    }

    load();
  }, []);

  return (
    <Container>
      <Head>
        <h1>My Dazzles</h1>
        <Link to="/">
          <MdLightbulbOutline size="18px" color={primaryGray} />
          New Dazzle
        </Link>
      </Head>

      <DazzleList>
        {dazzles.map(dazzle => (
          <Dazzle key={dazzle.id} to={`dazzle/${dazzle.id}`}>
            <div>
              <img src={dazzle.logo && dazzle.logo.url} alt="" />
              <strong> {dazzle.name} </strong>
            </div>
            <MdKeyboardArrowRight size="36px" color={tertiaryGray} />
          </Dazzle>
        ))}
      </DazzleList>
    </Container>
  );
}
