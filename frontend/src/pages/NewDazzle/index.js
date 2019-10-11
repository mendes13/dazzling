import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdSave, MdSubject } from 'react-icons/md';

import LogoInput from '../../components/LogoInput';
import ExternalLinks from '../../components/ExternalLinks';

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

export default function NewDazzle() {
  async function handleSubmit(data) {
    const response = await api.post('dazzles', data);
    history.push(`/dazzle/show/${response.data.id}`);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
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
            name="description"
            placeholder="Add a description to your Dazzle!"
          />
        </Description>
      </Form>
    </Container>
  );
}
