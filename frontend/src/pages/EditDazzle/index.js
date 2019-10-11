import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdSave, MdSubject } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import LogoInput from '../../components/LogoInput';
import ExternalLinks from '../../components/ExternalLinks';
import TechStack from '../../components/TechStack';

import api from '../../services/api';
import history from '../../services/history';

import { Container, Head, Description } from './styles';
import * as palette from '../../styles/variables';

const schema = Yup.object().shape({
  name: Yup.string().required('The title is required'),
  logo_id: Yup.number(),
  interface_url: Yup.string().url('Enter a valid url'),
  repo_url: Yup.string().url('Enter a valid url'),
  logic_url: Yup.string().url('Enter a valid url'),
  description: Yup.string(),
});

export default function EditDazzle({ match }) {
  const id = Number(match.params.id);

  const [dazzle, setDazzle] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const response = await api.get(`dazzles/${id}`);
        setDazzle(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast.error('Something went wrong');
        history.push('/dashboard');
      }
    }

    load();
  }, [id]);

  async function handleSubmit(data) {
    try {
      const response = await api.put(`dazzles/${id}`, data);
      history.push(`/dazzle/show/${response.data.id}`);
    } catch (err) {
      toast.error('ERROR');
    }
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema} initialData={dazzle}>
        <Head>
          <div>
            <LogoInput />
            <Input type="text" name="name" placeholder="My New Dazzle!" />
          </div>

          <aside>
            <button type="submit">
              <MdSave size={18} color={palette.primaryGray} />
              Salvar
            </button>
          </aside>
        </Head>

        <ExternalLinks />

        <Description>
          <strong>
            <MdSubject size={18} color={palette.septenaryGray} />
            Description
          </strong>
          <Input
            multiline
            placeholder="Add a description to your Dazzle!"
            name="description"
          />
        </Description>
      </Form>
      <TechStack dazzle_id={id} />
    </Container>
  );
}

EditDazzle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
