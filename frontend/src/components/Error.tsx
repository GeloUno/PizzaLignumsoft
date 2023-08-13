import React from 'react';
import { Alert } from 'react-bootstrap';
import Content from './Content';

interface ErrorProps {
  message?: string;
}

function Error({ message }: ErrorProps) {
  return (
    <Content margin={4} padding={4}>
      <Alert key="danger" variant="danger">
        {message ? `${message}` : `coś poszło nie tak`}
      </Alert>
    </Content>
  );
}

export default Error;
