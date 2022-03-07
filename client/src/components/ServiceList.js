import React from 'react';
import ServiceItem from './ServiceItem';
import Loader from './Loader';
import '../styles/service-list.css';


function ServiceList({loading, error, data}) {

  if(loading) {
    return <Loader />
  }

  if(error) {
    return <h3 className="h4">{error.message}</h3>
  }

  if(data) {
    const {services} = data;
    return (
      <section className="service-list row">
        {
          services.map((service => {
            const { id, title, text, icon } = service;
            return (
              <ServiceItem
                key={id} 
                id={id}
                title={title}
                text={text}
                icon={icon}
              />
            )
          }))
        }
      </section>
    )
  } else {
    return <h3>Data enroute</h3>
  }

}

export default ServiceList