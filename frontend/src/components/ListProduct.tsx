import { Button, Row } from 'react-bootstrap';
import { Product } from '../interfaces/product';
import { generate } from 'short-uuid';
import Content from './Content';
import { useNavigate } from 'react-router';

export enum ProductEnum {
  ACTION = 'action',
  ELEMENT = 'element',
}

interface IListActionProps {
  data: Array<Product>;
  type: ProductEnum;
}

function ListProduct({ data, type }: IListActionProps) {
  const navigate = useNavigate();
  return (
    <Content margin={2} padding={2}>
      <Row>
        {data.map((item) => {
          return (
            <Row
              key={generate()}
              className="d-flex m-2 w-100 justify-content-center"
            >
              <Button
                variant="light"
                className="w-25"
                onClick={() => navigate(`/${type}/${item._id}`)}
              >
                {item.name}
              </Button>
            </Row>
          );
        })}
      </Row>
    </Content>
  );
}

export default ListProduct;
