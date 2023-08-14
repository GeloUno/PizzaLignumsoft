import React from 'react';
import { useQueries } from 'react-query';
import Error from '../components/Error';
import Loading from '../components/Loading';

import { getAllPizzaByElement } from '../controllers/pizza';
import { getAllActionByElement } from '../controllers/action';
import { ProductEnum } from '../components/ListProduct';
import { getElementById } from '../controllers/element';
import ProductDetailBody from './ProductDetail.body';

interface IElementDetailBodyProps {
  elementId: string;
}
function ElementDetailBody({ elementId }: IElementDetailBodyProps) {
  const [pizzaQuery, actionQuery, elementQuery] = useQueries([
    {
      queryKey: [`pizzaWithElement`, elementId],
      queryFn: async () => await getAllPizzaByElement(elementId),
    },
    {
      queryKey: [`ActionWithElement`, elementId],
      queryFn: async () => await getAllActionByElement(elementId),
    },
    {
      queryKey: [`getOneElementByID`, elementId],
      queryFn: async () => await getElementById(elementId),
    },
  ]);

  if (pizzaQuery.isError || actionQuery.isError || elementQuery.isError) {
    return <Error />;
  } else if (
    pizzaQuery.isLoading ||
    actionQuery.isLoading ||
    elementQuery.isLoading ||
    pizzaQuery.data === undefined ||
    actionQuery.data === undefined ||
    elementQuery.data === undefined
  ) {
    return <Loading />;
  } else {
    return (
      <ProductDetailBody
        name={elementQuery.data.data.name}
        type={ProductEnum.ELEMENT}
        product={actionQuery.data.data}
        pizzaArray={pizzaQuery.data.data}
        path={ProductEnum.ACTION}
      />
    );
  }
}

export default ElementDetailBody;
