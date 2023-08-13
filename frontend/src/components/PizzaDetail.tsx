import { useQuery } from 'react-query';
import { getDetailPizza } from '../controllers/pizza';
import Loading from './Loading';
import Error from './Error';
import ItemPizzaDetail from './ItemPizzaDetail';

interface PizzaDetailProps {
  pizzaId: string;
}

function PizzaDetail({ pizzaId }: PizzaDetailProps) {
  const { isLoading, isError, data } = useQuery(
    'getOnePizza',
    async () => await getDetailPizza(pizzaId)
  );

  if (isLoading) {
    return <Loading />;
  } else if (isError || data === undefined || data.data === undefined) {
    return <Error />;
  } else {
    return <ItemPizzaDetail pizza={data.data} />;
  }
}

export default PizzaDetail;
