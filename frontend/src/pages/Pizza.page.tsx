import { useQuery } from 'react-query';
import { getAllPizza } from '../controllers/pizza';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ListPizza from '../components/ListPizza';
import NavBar from '../components/NavBar';

function PizzaPage() {
  const { isLoading, isError, data } = useQuery(
    'getAllPizza',
    async () => await getAllPizza()
  );

  if (isLoading) {
    return <Loading />;
  } else if (isError || data === undefined || data.data === undefined) {
    return <Error />;
  } else {
    return (
      <>
        <NavBar />
        <ListPizza data={data.data} />;
      </>
    );
  }
}

export default PizzaPage;
