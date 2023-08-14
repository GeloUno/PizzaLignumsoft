import Error from '../components/Error';
import { useQueries } from 'react-query';
import Loading from '../components/Loading';
import { getAllPizzaByAction } from '../controllers/pizza';
import { getAllElementByAction } from '../controllers/element';
import { ProductEnum } from '../components/ListProduct';
import { getActionById } from '../controllers/action';
import ProductDetailBody from './ProductDetail.body';

interface ActionDetailBodyProps {
  actionId: string;
}

function ActionDetailBody({ actionId }: ActionDetailBodyProps) {
  const [pizzaQuery, elementQuery, actionQuery] = useQueries([
    {
      queryKey: [`pizzaWithAction`, actionId],
      queryFn: () => getAllPizzaByAction(actionId),
    },
    {
      queryKey: [`ElementWithAction`, actionId],
      queryFn: () => getAllElementByAction(actionId),
    },
    {
      queryKey: [`getActionById`, actionId],
      queryFn: () => getActionById(actionId),
    },
  ]);

  if (pizzaQuery.isError || elementQuery.isError) {
    return <Error />;
  } else if (
    pizzaQuery.isLoading ||
    elementQuery.isLoading ||
    actionQuery.isLoading ||
    pizzaQuery.data === undefined ||
    elementQuery.data === undefined ||
    actionQuery.data === undefined
  ) {
    return <Loading />;
  } else {
    return (
      <ProductDetailBody
        name={actionQuery.data.data.name}
        type={ProductEnum.ACTION}
        product={elementQuery.data.data}
        pizzaArray={pizzaQuery.data.data}
        path={ProductEnum.ELEMENT}
      />
    );
  }
}

export default ActionDetailBody;
