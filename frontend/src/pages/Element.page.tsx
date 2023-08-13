import { useParams } from 'react-router';
import Content from '../components/Content';
import Error from '../components/Error';
import ElementDetailPage from './ElementDetail.page';

function ElementPage() {
  const { id } = useParams();
  if (id) {
    return (
      <Content margin={4} padding={4}>
        <ElementDetailPage elementId={id} />
      </Content>
    );
  } else {
    return <Error />;
  }
}

export default ElementPage;
