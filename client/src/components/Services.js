import React, {useState, useEffect} from 'react';
import ServiceList from './ServiceList';
import { servicesList } from '../data/data';
import '../styles/services.css';

function Services() {
  const [services, setServices] = useState({services: []});

  useEffect(() => {
    setServices(servicesList)
  }, [])

  return (
    <section className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="h3">
            <span>Our</span>{' '}
            <span>Services</span>
          </h2>
          <p className="header-text intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam erat condimentum sed adipiscing eros, tempus.
          </p>
        </div>
        <div className="services-content">
          <ServiceList  
            data={services}
          />
        </div>
      </div>
    </section>
  )
}

export default Services