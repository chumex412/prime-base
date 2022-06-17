import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import PageTransition from '../components/PageTransition';
import Home from './Home';
import OurServices from './OurServices';
import About from './About';
import SingleMember from './SingleMember';


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition route={location.pathname}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <OurServices />
        </Route>
        <Route path="/team-member/:nameid">
          <SingleMember />
        </Route>  
      </Switch>
    </PageTransition>
  )
}

export default AnimatedRoutes;