import React from 'react';
import { useParams } from 'react-router';
import Content from '../components/Content';
import Error from '../components/Error';
import ActionDetail from '../components/ActionDetail';

function ActionPage() {
  const { id } = useParams();
  if (id) {
    return (
      <Content margin={4} padding={4}>
        <ActionDetail actionId={id} />
      </Content>
    );
  } else {
    return <Error />;
  }
}

export default ActionPage;
