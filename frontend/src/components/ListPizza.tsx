import { IPizza } from '../interfaces/pizza';
import Content from './Content';
import { generate } from 'short-uuid';
import ItemPizza from './ItemPizza';

interface IListPizzaProps {
  data: Array<IPizza>;
}

function ListPizza({ data }: IListPizzaProps) {
  return (
    <Content margin={4} padding={4}>
      {data.map((singlePizza) => (
        <Content key={generate()} margin={1} padding={1}>
          <ItemPizza pizza={singlePizza} />
        </Content>
      ))}
    </Content>
  );
}

export default ListPizza;
