import React from 'react';
import { Link } from 'react-router-dom';
import { socialIcons } from '../data/imageData';

function TeamItem({ id, firstname, lastname, image, position }) {


  return (
    <div className="col-xs-12 col-sm-6 col-lg-4">
      <article className="card">
        <div 
          className="card-img-top"
          style={{
            background: `url(${image}) no-repeat top center/cover`,
            height: "26.1rem" 
          }} 
        >
          <div className="social-medias">
            {
              socialIcons.map((item, idx) => {
                const { name, icon } = item;

                return (
                  <div className="icons" key={idx}>
                    <span>{icon}</span>
                    <span className="sr-only">{name}</span>
                  </div>
                )
              })
            }
          </div>  
        </div>
        <div className="card-body">
          <Link to={`/team-member/${firstname}+${lastname}+${id}`}>
            <h4 className="h4">{firstname} {" "} {lastname}</h4>
          </Link>
          <p className="main-text">{position}</p>
        </div>
      </article>
    </div>
  )
}

export default TeamItem;