import Spinner from 'react-bootstrap/Spinner';
import Content from './Content';

function Loading() {
  return (
    <Content margin={4} padding={4}>
      <Spinner animation="grow" />
    </Content>
  );
}

export default Loading;
