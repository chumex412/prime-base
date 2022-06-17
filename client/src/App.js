//import './App.css';
import './styles/base.css';
import client from './apollo';
import { ApolloProvider } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ScrollTop from './components/ScrollTop';
import PageHead from './components/PageHead';
import AnimatedRoutes from './pages/AnimatedRoutes';

const helmetContext = {};

function App() {
  
  const location = useLocation();

  return (
    <ApolloProvider client={client}>
      <HelmetProvider context={helmetContext}>
        <ScrollTop />
        <PageHead path={location.pathname} />
        <AnimatedRoutes />
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
