import './App.css';
import PizzasPage from './Pages/PizzasPage';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools position="bottom-right" initialIsOpen={true} />
        <PizzasPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
