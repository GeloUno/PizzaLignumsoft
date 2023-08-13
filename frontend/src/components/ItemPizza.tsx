import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IPizza } from '../interfaces/pizza';
import { useNavigate } from 'react-router-dom';

interface ItemPizzaProps {
  pizza: IPizza;
}

function ItemPizza({ pizza }: ItemPizzaProps) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="pizza.svg" />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          Bardzo dobra pizza opis jeje walorów, mniam mniam itd..
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            navigate(`/pizza/detail/${pizza._id}`);
          }}
        >
          wiecej
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ItemPizza;
