import Error from '../components/Error';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import { useQuery } from 'react-query';
import { getAllElement } from '../controllers/element';
import ListProduct, { ProductEnum } from '../components/ListProduct';

function ElementPage() {
  const { isError, isLoading, data } = useQuery(
    ['getAllAction'],
    async () => await getAllElement()
  );

  if (isLoading) {
    return <Loading />;
  } else if (isError || data === undefined || data.data === undefined) {
    return <Error />;
  } else {
    return (
      <>
        <NavBar />
        <ListProduct data={data.data} type={ProductEnum.ELEMENT} />;
      </>
    );
  }
}

export default ElementPage;
