import { IPizza } from '../interfaces/pizza';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { generate } from 'short-uuid';
import Content from './Content';
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
          <Card.Text>składniki:</Card.Text>
          {pizza.element.map((elementOfPizza) => (
            <Content key={generate()} margin={2} padding={2}>
              <Button
                variant="primary"
                onClick={() => {
                  navigate(`/element/${elementOfPizza._id}`);
                }}
              >
                {elementOfPizza.name}
              </Button>
            </Content>
          ))}

          <Card.Text>akcje:</Card.Text>
          {pizza.action.map((actionOfPizza) => (
            <Content key={generate()} margin={2} padding={2}>
              <Button
                variant="primary"
                onClick={() => {
                  navigate(`/action/${actionOfPizza._id}`);
                }}
              >
                {actionOfPizza.name}
              </Button>
            </Content>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ItemPizzaDetail;
