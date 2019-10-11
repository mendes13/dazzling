import React, { useState } from 'react';
import { Select, Input } from '@rocketseat/unform';
import {
  MdChevronRight,
  MdCreate,
  MdDeleteSweep,
  MdSave,
  MdArrowDropDown,
  MdClear,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { Container, Wrapper, FormWrapper } from './styles';
import * as palette from '../../../styles/variables';

export default function Tech({ data, options, techs, setTechs }) {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleUpdate({ tech_id, description }) {
    try {
      const response = await api.put(`stacks/${data.id}`, {
        tech_id,
        description,
      });

      const filteredTechs = techs.filter(tech => tech.id !== data.id);
      setTechs([...filteredTechs, response.data]);
      setOpen(false);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  async function handleDelete() {
    await api.delete(`stacks/${data.id}`);
    const filteredTechs = techs.filter(tech => tech.id !== data.id);
    setTechs(filteredTechs);
  }

  if (open) {
    return (
      <Container hover color={data && data.tech && data.tech.color}>
        <div>{data && data.tech && data.tech.name}</div>
        <FormWrapper
          onSubmit={handleUpdate}
          initialData={data}
          color={data && data.tech && data.tech.color}
        >
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

  return (
    <Container
      hover={hover}
      color={data && data.tech && data.tech.color}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onBlur={() => {}}
      onFocus={() => {}}
    >
      <div>{data && data.tech && data.tech.name}</div>
      <Wrapper hover={hover} color={data && data.tech && data.tech.color}>
        <span>
          <MdChevronRight size={15} color={palette.primaryGray} />
        </span>
        <p>{data && data.description}</p>
        <div>
          <button type="button" onClick={() => setOpen(true)}>
            <MdCreate size={20} color={palette.primaryGray} />
          </button>

          <button type="button" onClick={handleDelete}>
            <MdDeleteSweep size={20} color={palette.primaryGray} />
          </button>
        </div>
      </Wrapper>
    </Container>
  );
}

Tech.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    tech: PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  }),
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

Tech.defaultProps = {
  data: null,
};
