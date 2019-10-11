import React, { useState } from 'react';
import { Select, Input } from '@rocketseat/unform';
import { MdSave, MdArrowDropDown, MdAdd, MdClear } from 'react-icons/md';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { Container, FormWrapper } from './styles';
import * as palette from '../../../styles/variables';

export default function Tech({ dazzle_id, options, techs, setTechs }) {
  const [open, setOpen] = useState(false);

  async function handleStore({ tech_id, description }) {
    try {
      const response = await api.post('stacks', {
        dazzle_id,
        tech_id,
        description,
      });

      setTechs([...techs, response.data]);
      setOpen(false);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <Container open={open}>
      <button type="button" onClick={() => setOpen(true)}>
        <MdAdd size={18} color={palette.primaryGray} />
        Add
      </button>
      <FormWrapper open={open} onSubmit={handleStore}>
        <span>
          <Select
            name="tech_id"
            options={options}
            placeholder="Choose your technology..."
          />

          <MdArrowDropDown size={20} color={palette.primaryGray} />
        </span>
        <Input
          multiline
          name="description"
          placeholder="What is the technology porpouse?"
        />

        <div>
          <button type="button" onClick={() => setOpen(false)}>
            <MdClear size={20} color={palette.primaryGray} />
            Cancel
          </button>
          <button type="submit">
            <MdSave size={20} color={palette.primaryGray} />
            Save
          </button>
        </div>
      </FormWrapper>
    </Container>
  );
}

Tech.propTypes = {
  dazzle_id: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
  techs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      tech: PropTypes.shape({
        name: PropTypes.string,
        color: PropTypes.string,
      }),
    })
  ).isRequired,
  setTechs: PropTypes.func.isRequired,
};
