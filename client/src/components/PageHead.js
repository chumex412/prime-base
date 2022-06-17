import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PageHead = ({ path }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {nameid} = useParams()


  useEffect(() => {

    if(path === '/') {
      setTitle('Home')
      setDescription("Establishing property boundaries to ensure safe and fit infrastructures")
    } else if(path === '/about') {
      setTitle('About')
      setDescription('We provide Geo-services such as Surveying And Mapping, Field Data Collection And Processing, Geographic Information System, Cadastral Survey And Civil Engineering Services.')
    } else if(path === '/services') {
      setTitle('Services')
      setDescription('')
    } else {
      if(nameid) {
        const name = nameid.split('+').slice(0, 2).join(' ');
        setTitle(name);
        setDescription(`${name} is one of the suveying team member at Prime-base`)
      }
    }
  }, [path, nameid]);

  return (
    <Helmet>
      <html lang="en" />
      <title>Prime-base | {title}</title>
      <meta 
        name="description"
        content={description} 
      />
    </Helmet>
  )
}

export default PageHead;