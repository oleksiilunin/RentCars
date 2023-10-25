import { GlobalStyles } from 'components/GlobalStyles';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Header,
  LayoutContainer,
  Main,
  NavItem,
  NavList,
  Navigation,
  StyledNavLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <Header>
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
        </Header>
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
      </LayoutContainer>
      <GlobalStyles />
      <ToastContainer />
    </>
  );
};

export default Layout;
