import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { MdCameraAlt } from 'react-icons/md';

import api from '../../../services/api';

import { Container } from './styles';

export default function AvatarInput({ userName: name }) {
  const { defaultValue, registerField } = useField('avatar');

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [file, setFile] = useState(defaultValue && defaultValue.if);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <MdCameraAlt size="40px" color="rgba(187, 187, 187, 0.8)" />
        <img
          src={preview || `https://api.adorable.io/avatars/50/${name}.png`}
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  userName: PropTypes.string,
};

AvatarInput.defaultProps = {
  userName: 'adorable',
};
