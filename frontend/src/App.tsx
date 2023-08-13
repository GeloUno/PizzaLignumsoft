import './App.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import PublicRouter from './router/Public.router';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <div className="container">
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools position="bottom-right" initialIsOpen={true} />
          <PublicRouter />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
