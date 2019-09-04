import React, { useState, useEffect } from 'react';
import { MdCreate, MdDeleteSweep, MdSubject } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '../../services/api';
import history from '../../services/history';

import ExternalLinks from './ExternalLinks';
import TechStack from './TechStack';

import { Container, Head, Description } from './styles';
import * as palette from '../../styles/variables';

export default function Dazzle({ match }) {
  const { id } = match.params;
  const [dazzle, setDazzle] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const response = await api.get(`dazzles/${id}`);
        setDazzle(response.data);
        setLoading(false);
        console.tron.log(response.data);
      } catch (err) {
        setLoading(false);
        toast.error('Something went wrong');
        history.push('/dashboard');
      }
    }

    load();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Head>
        <div>
          <img src={dazzle && dazzle.logo && dazzle.logo.url} alt="" />
          <h1>{dazzle && dazzle.name}</h1>
        </div>
        <aside>
          <Link to="/">
            <MdCreate size={18} color={palette.primaryGray} />
            Edit
          </Link>
          <button type="button">
            <MdDeleteSweep size={18} color={palette.primaryGray} />
            Delete
          </button>
        </aside>
      </Head>

      <ExternalLinks dazzle={dazzle} />

      <Description>
        <strong>
          <MdSubject size={18} color={palette.septenaryGray} />
          Description
        </strong>
        <p>{dazzle && dazzle.description}</p>
      </Description>

      <TechStack />
    </Container>
  );
}

Dazzle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
