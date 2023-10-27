import React from 'react';

import {
  HeaderContainer,
  LinkStyled,
  NavItem,
  NavList,
  Navigation,
  StyledNavLink,
} from './Header.styled';
import { scrollToTop } from 'assets/helpers/scrollToTop';
import Logo from '../../assets/images/rent-car-removebg.png';

export default function Header() {
  return (
    <HeaderContainer>
      <LinkStyled to="/" onClick={scrollToTop}>
        <img src={Logo} alt="logo" width="80" height="80" loading="lazy" />
      </LinkStyled>
      <Navigation>
        <NavList>
          <NavItem>
            <StyledNavLink to="/">Home</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}
