import React from 'react';
import Content from '../components/Content';
import { Col, Row } from 'react-bootstrap';
import ListProduct, { ProductEnum } from '../components/ListProduct';
import { Product } from '../interfaces/product';
import { IPizza } from '../interfaces/pizza';
import { generate } from 'short-uuid';
import ItemPizzaDetail from '../components/ItemPizzaDetail';

interface IProductDetailBodyProps {
  type: ProductEnum;
  name: string;
  path?: string;
  product: Array<Product>;
  pizzaArray: Array<IPizza>;
}
function ProductDetailBody({
  name,
  type,
  path,
  product,
  pizzaArray,
}: IProductDetailBodyProps) {
  return (
    <Row className="d-flex w-100 justify-content-center align-content-start flex-wrap">
      <Row className="d-flex w-100 justify-content-center ">
        <strong className="pb-2">{type}:</strong>
        <span>{name}</span>
      </Row>
      {product.length !== 0 && (
        <Row className="d-flex w-100 justify-content-center ">
          <strong className="py-2">{path}:</strong>
        </Row>
      )}
      <ListProduct data={product} type={type} path={path} />
      {pizzaArray.length !== 0 && (
        <Row className="d-flex w-100 justify-content-center ">
          <strong className="py-2">pizza: </strong>
        </Row>
      )}
      {pizzaArray.map((pizza) => (
        <Col key={generate()}>
          <Content margin={2} padding={2}>
            <ItemPizzaDetail pizza={pizza} />
          </Content>
        </Col>
      ))}
    </Row>
  );
}

export default ProductDetailBody;
