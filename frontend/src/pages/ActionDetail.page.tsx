import React from 'react';
import Content from '../components/Content';
import Error from '../components/Error';
import ActionDetail from '../components/ActionDetail';

interface ActionDetailPageProps {
  id: string;
}

function ActionDetailPage({ id }: ActionDetailPageProps) {
  return <div>{id}</div>;
}

export default ActionDetailPage;
