import { useParams } from 'react-router';
import Content from '../components/Content';
import Error from '../components/Error';
import ElementDetailPage from '../body/ElementDetail.body';
import NavBar from '../components/NavBar';

function ElementDetailParamPage() {
  const { id } = useParams();
  if (id) {
    return (
      <>
        <NavBar />
        <Content margin={4} padding={4}>
          <ElementDetailPage elementId={id} />
        </Content>
      </>
    );
  } else {
    return <Error />;
  }
}

export default ElementDetailParamPage;
