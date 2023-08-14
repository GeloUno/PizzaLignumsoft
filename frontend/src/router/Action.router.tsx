import { Route, Routes } from 'react-router';
import ActionPage from '../pages/Action.page';
import ActionDetailParamPage from '../pages/ActionDetailParam.page';

function ActionRouter() {
  return (
    <Routes>
      <Route path="/" element={<ActionPage />} />
      <Route path="/:id" element={<ActionDetailParamPage />} />
    </Routes>
  );
}

export default ActionRouter;
