import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1000;
  /* left: 0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  width: 1440px;
  /* width: 100vw; */
  height: 100px;
  border-radius: 14px;

  background-color: var(--header-background-color);
  /* box-shadow: rgb(125, 123, 131) -1px -1px 15px, rgb(255, 255, 255) 5px 5px 15px; */
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const NavItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  width: 100%;

  border-radius: 12px;
  border: none;

  color: var(--button-text-color);
  background-color: var(--button-background-color);

  font-size: 22px;
  font-weight: 600;
  line-height: 1.42857;

  &:hover,
  &:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &.active {
    background-color: var(--accent-hover);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
