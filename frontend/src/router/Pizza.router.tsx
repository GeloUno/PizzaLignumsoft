import { Route, Routes } from 'react-router-dom';
import PizzaPage from '../pages/Pizza.page';
import PizzaDetailPage from '../pages/PizzaDetail.page';
function PizzaRouter() {
  return (
    <Routes>
      <Route path="/" element={<PizzaPage />} />
      <Route path="/detail/:id" element={<PizzaDetailPage />} />
    </Routes>
  );
}

export default PizzaRouter;
