import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { lazy } from 'react';
import Page404 from 'pages/Page404';

const Home = lazy(() => import('../../pages/Home/Home'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
