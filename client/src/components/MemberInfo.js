import React, { useEffect, useState } from 'react'
import { largeIcons, smallIcons } from '../data/imageData';
import useMediaQuery from '../custom hook/useMediaQuery';

function MemberInfo({firstname, lastname, position, image, address, phone, social}) {
  const [mediaIcons, setMediaIcon] = useState([]);
  const smallDevice = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setMediaIcon(smallDevice ? smallIcons : largeIcons)
  }, [smallDevice]);

  return (
    <section className="member-info">
      <div className="img-container">
        <img src={image} alt={`The ${position}: ${firstname} ${lastname}`} />  
      </div>
      <div>
        <h3 className="h3">{firstname}{" "}{lastname}</h3>
        <p className="position h4">{position}</p>
        <ul className="contact-list">
          <li className="contact-item">
            <h4>Phone Number</h4>
            <p className="intro-text">{phone}</p>
          </li>
          <li className="contact-item">
            <h4>Address Info</h4>
            <p className="intro-text">{address}</p>
          </li>
        </ul>

        <div className="section social-icons">
          {
            mediaIcons.map((icon, idx) => {
              const { url, media_id } = social[idx];

              return (
                <div key={media_id}>
                  <span className="sr-only">{media_id}</span>
                  <a href={url}>
                    {icon}  
                  </a>
                </div>
              )
            })
          }  
        </div>
      </div>
    </section>
  )
}

export default MemberInfo;