import React from 'react';
import { useQueries, useQuery } from 'react-query';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Content from '../components/Content';
import { getAllPizzaByElement } from '../controllers/pizza';
import { getAllActionByElement } from '../controllers/action';
interface IElementDetailBodyProps {
  elementId: string;
}
function ElementDetailBody({ elementId }: IElementDetailBodyProps) {
  const [pizzaQuery, actionQuery] = useQueries([
    {
      queryKey: [`pizzaWithElement`, elementId],
      queryFn: async () => await getAllPizzaByElement(elementId),
    },
    {
      queryKey: [`ActionWithElement`, elementId],
      queryFn: async () => await getAllActionByElement(elementId),
    },
  ]);

  if (pizzaQuery.isError || actionQuery.isError) {
    return <Error />;
  } else if (pizzaQuery.isLoading || actionQuery.isLoading) {
    return <Loading />;
  } else {
    return (
      <Content margin={4} padding={4}>
        Element DetailPage
      </Content>
    );
  }
}

export default ElementDetailBody;
