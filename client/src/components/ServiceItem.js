import React, { useState } from 'react'

function ServiceItem({ id, title, text, icon }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="col-sm-12 col-md-4">
      <article className="card">
        <div className="card-img-top">
          {icon}
        </div>
        <div className="card-body">
          <h3 className="h4 card-title">{title}</h3>
          <p className="card-text main-text">
            {
              showMore ? text : text.substring(0, 100)
            }
            <button className="main-text show-btn" onClick={() => setShowMore(prev => !prev)}>
              {`${!showMore ? "...Read more" :  "...Show less"}`}
            </button>
          </p>
        </div>
      </article>
    </div>
  )
}

export default ServiceItem