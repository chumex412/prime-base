import React, { useState, useEffect } from 'react';
import { reasonList } from '../data/data';

function ReasonList() {
  const [reasons, setReasons] = useState({choose_us: []});

  useEffect(() => {
    setReasons(reasonList);
  }, [])

  const { choose_us } = reasons;
  return (
    <section className="reason-list row">
      {
        choose_us.map(reason => {
          const {id, title, text, icon} = reason;

          return (
            <div  key={id} className="col-sm-12 col-md-4">
              <article>
                <div className="reason-icon">{icon}</div>
                <h3 className="h4">{title}</h3>
                <p className="main-text">{text}</p>
              </article>
            </div>
          )
        })
      }
    </section>
  )
}

export default ReasonList;