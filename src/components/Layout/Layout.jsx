import { GlobalStyles } from 'components/GlobalStyles';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LayoutContainer, Main } from './Layout.styled';
import Header from 'components/Header';

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <Header />
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
