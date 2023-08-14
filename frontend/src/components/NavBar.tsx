import { useNavigate } from 'react-router';
import Content from './Content';
import { Button, Col } from 'react-bootstrap';

function NavBar() {
  const navigation = useNavigate();
  return (
    <Content margin={2} padding={2}>
      <Col>
        <Button
          variant="primary"
          onClick={() => {
            navigation('/pizza');
          }}
          className="mx-2"
        >
          Pizza
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            navigation('/element');
          }}
          className="mx-2"
        >
          Składniki
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            navigation('/action');
          }}
          className="mx-2"
        >
          Operacje
        </Button>
      </Col>
    </Content>
  );
}

export default NavBar;
