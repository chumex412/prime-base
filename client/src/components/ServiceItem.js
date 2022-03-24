import React from 'react';
import ShowContent from './gsap/ShowMore';

const style = () => ({
  hidden: { 
    display: '-webkit-box', 
    WebkitLineClamp: 3, 
    WebkitBoxOrient: 'vertical', 
    overflow: 'hidden' 
  }
})


function ServiceItem({ id, title, text, icon }) {

  return (
    <div className="col-xs-12 col-sm-6 col-lg-4">
      <article className="card">
        <div className="card-img-top">
          {icon}
        </div>
        <div className="card-body">
          <h3 className="h4 card-title">{title}</h3>
          <ShowContent visible={text.substring(0, 100)} vars={{ duration: 0.5 }}>
            <span>{text.substring(100)}</span>
          </ShowContent>
        </div>
      </article>
    </div>
  )
}

export default ServiceItem