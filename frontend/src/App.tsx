import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PizzasPage from './Pages/PizzasPage';

async function getData() {
  const result = await axios.get('/api');
  return result;
}
function App() {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    getData().then((data) => {
      setData(data.data.message);
      return data;
    });

    return () => {};
  }, []);

  return (
    <div className="App">
      <PizzasPage />
    </div>
  );
}

export default App;
