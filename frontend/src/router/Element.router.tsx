import { Route, Routes } from 'react-router';
import ElementPage from '../pages/Element.page';
import ElementDetailParamPage from '../pages/ElementDetailParam.page';

function ElementRouter() {
  return (
    <Routes>
      <Route path="/" element={<ElementPage />} />
      <Route path="/:id" element={<ElementDetailParamPage />} />
    </Routes>
  );
}

export default ElementRouter;
