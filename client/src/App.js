//import './App.css';
import './styles/base.css';
import client from './apollo';
import { ApolloProvider } from '@apollo/client';
import {Routes, Route } from 'react-router-dom';

// Components
import Home from './pages/Home';
import About from './pages/About';
import OurServices from './pages/OurServices';

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<OurServices />} />
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;