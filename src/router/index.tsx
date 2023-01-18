import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

const Router = createBrowserRouter(
  createRoutesFromElements([<Route path="/" element={<Home />} />, <Route path="*" element={<PageNotFound />} />]),
);

export default Router;
