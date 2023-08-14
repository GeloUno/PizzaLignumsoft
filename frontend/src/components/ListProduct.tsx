import { Button, Row } from 'react-bootstrap';
import { Product } from '../interfaces/product';
import { generate } from 'short-uuid';
import { useNavigate } from 'react-router';

export enum ProductEnum {
  ACTION = 'action',
  ELEMENT = 'element',
}

interface IListActionProps {
  data: Array<Product>;
  type: ProductEnum;
  path?: string;
}

function ListProduct({ data, type, path }: IListActionProps) {
  const navigate = useNavigate();
  return (
    <Row>
      {data.map((item) => {
        return (
          <Row key={generate()} className="d-flex m-2 justify-content-center">
            <Button
              className="w-50"
              variant="light"
              onClick={() => navigate(`/${path ? path : type}/${item._id}`)}
            >
              {item.name}
            </Button>
          </Row>
        );
      })}
    </Row>
  );
}

export default ListProduct;
