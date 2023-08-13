import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PizzaPage from '../pages/Pizza.page';
import PizzaRouter from './Pizza.router';

function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PizzaPage />} />
        <Route path="/pizza/*" element={<PizzaRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRouter;
