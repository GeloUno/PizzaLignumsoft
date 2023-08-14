import Content from '../components/Content';
import Error from '../components/Error';
import { useQueries } from 'react-query';
import Loading from '../components/Loading';
import { getAllPizzaByAction } from '../controllers/pizza';
import { getAllElementByAction } from '../controllers/element';

interface ActionDetailBodyProps {
  actionId: string;
}

function ActionDetailBody({ actionId }: ActionDetailBodyProps) {
  const [pizzaQuery, elementQuery] = useQueries([
    {
      queryKey: [`pizzaWithAction`, actionId],
      queryFn: () => getAllPizzaByAction(actionId),
    },
    {
      queryKey: [`ElementWithAction`, actionId],
      queryFn: () => getAllElementByAction(actionId),
    },
  ]);

  if (pizzaQuery.isError || elementQuery.isError) {
    return <Error />;
  } else if (pizzaQuery.isLoading || elementQuery.isLoading) {
    return <Loading />;
  } else {
    return (
      <Content margin={4} padding={4}>
        Action DetailPage
      </Content>
    );
  }
}

export default ActionDetailBody;
