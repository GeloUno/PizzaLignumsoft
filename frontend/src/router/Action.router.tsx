import { Route, Routes } from 'react-router';
import ActionPage from '../pages/Action.page';

function ActionRouter() {
  return (
    <Routes>
      <Route path="/:id" element={<ActionPage />} />
    </Routes>
  );
}

export default ActionRouter;
