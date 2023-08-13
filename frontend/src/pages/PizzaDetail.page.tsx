import { useParams } from 'react-router-dom';
import PizzaDetail from '../components/PizzaDetail';
import Error from '../components/Error';
import Content from '../components/Content';

function PizzaDetailPage() {
  const { id } = useParams();

  if (id) {
    return (
      <Content margin={4} padding={4}>
        <PizzaDetail pizzaId={id} />
      </Content>
    );
  } else {
    return <Error />;
  }
}

export default PizzaDetailPage;
