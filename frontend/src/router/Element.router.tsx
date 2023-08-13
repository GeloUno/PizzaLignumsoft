import { Route, Routes } from 'react-router';
import ElementPage from '../pages/Element.page';

function ElementRouter() {
  return (
    <Routes>
      <Route path="/:id" element={<ElementPage />} />
    </Routes>
  );
}

export default ElementRouter;
