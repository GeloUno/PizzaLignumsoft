import { useQuery } from 'react-query';
import Loading from '../components/Loading';
import Error from '../components/Error';
import NavBar from '../components/NavBar';
import { getAllAction } from '../controllers/action';
import ListProduct, { ProductEnum } from '../components/ListProduct';

function ActionPage() {
  const { isError, isLoading, data } = useQuery(
    ['getAllAction'],
    async () => await getAllAction()
  );

  if (isLoading) {
    return <Loading />;
  } else if (isError || data === undefined || data.data === undefined) {
    return <Error />;
  } else {
    return (
      <>
        <NavBar />
        <ListProduct data={data.data} type={ProductEnum.ACTION} />;
      </>
    );
  }
}

export default ActionPage;
