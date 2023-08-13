import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PizzaPage from '../pages/Pizza.page';
import PizzaRouter from './Pizza.router';
import ActionRouter from './Action.router';
import ElementRouter from './Element.router';

function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PizzaPage />} />
        <Route path="/pizza/*" element={<PizzaRouter />} />
        <Route path="/element/*" element={<ElementRouter />} />
        <Route path="/action/*" element={<ActionRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRouter;
