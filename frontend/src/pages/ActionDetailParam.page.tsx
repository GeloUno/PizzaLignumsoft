import { useParams } from 'react-router';
import Content from '../components/Content';
import Error from '../components/Error';
import ActionDetailPage from '../body/ActionDetail.body';
import NavBar from '../components/NavBar';

function ActionDetailParamPage() {
  const { id } = useParams();
  if (id) {
    return (
      <>
        <NavBar />
        <Content margin={4} padding={4}>
          <ActionDetailPage actionId={id} />
        </Content>
      </>
    );
  } else {
    return <Error />;
  }
}

export default ActionDetailParamPage;
