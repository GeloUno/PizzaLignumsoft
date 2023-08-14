import { IPizza } from '../interfaces/pizza';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { generate } from 'short-uuid';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

interface ItemPizzaDetailProps {
  pizza: IPizza;
}

function ItemPizzaDetail({ pizza }: ItemPizzaDetailProps) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../../pizza.svg" />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          Bardzo dobra pizza opis jeje walorów, mniam mniam itd..
        </Card.Text>
        <Row>
          <Card.Title>składniki:</Card.Title>
          {pizza.element.map((elementOfPizza) => (
            <Row key={generate()} className="m-2">
              <Button
                variant="light"
                onClick={() => {
                  navigate(`/element/${elementOfPizza._id}`);
                }}
              >
                {elementOfPizza.name}
              </Button>
            </Row>
          ))}

          <Card.Title>akcje:</Card.Title>
          {pizza.action.map((actionOfPizza) => (
            <Row key={generate()} className="d-flex m-2">
              <Button
                variant="light"
                onClick={() => {
                  navigate(`/action/${actionOfPizza._id}`);
                }}
              >
                {actionOfPizza.name}
              </Button>
            </Row>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ItemPizzaDetail;
