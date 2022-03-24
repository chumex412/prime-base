import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceList from '../components/ServiceList';
import { gql, useQuery } from '@apollo/client';
import { servicesIcons } from '../data/imageData';

const GET_SERVICES = gql`
  {
    services {
      id,
      title,
      text,
    }
  }
`

function OurServices() {
  const {loading, error, data} = useQuery(GET_SERVICES);
  
  return (
    <>
      <Header pageInfo={{title: "what we do", page1: "Services", page2: ""}} />
      <main 
        className="services-main" 
        style={{
          padding: "13rem 0",
        }}
      >
        <div className="container">
          <ServiceList 
            loading={loading}
            error={error}
            data={data}
            icons={servicesIcons}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default OurServices;