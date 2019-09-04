import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Wrapper, Profile } from './styles';

import logo from '../../assets/logo_white.png';

function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Wrapper>
        <Link to="/dashboard">
          <img src={logo} alt="" />
        </Link>
        <Profile>
          <div>
            <strong> {profile.name} </strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <img
            src={
              profile.avatar
                ? profile.avatar.url
                : `https://api.adorable.io/avatars/50/${profile.name}.png`
            }
            alt=""
          />
        </Profile>
      </Wrapper>
    </Container>
  );
}

export default Header;
