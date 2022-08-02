import React, { useState } from 'react';


function Event({ id, image, info, name, price, removeTour}) {
    const [readMore, setReadMore] = useState(false);


    // function HandleremoveTour(id) {
    // //   console.log("clicked")
    // //   fetch(`http://localhost:3000/events/${id}`, {
    // //     method: "DELETE",
    // //   })
    // //     .then((r) => r.json())
    // //     .then((data) => console.log(data));
    // // }
    return (
        <article className="single-event">
        <img src={image} alt={name} />
        <footer>
          <div className="event-info">
            <h4>{name}</h4>
            <h4 className="event-price">${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : '  read more'}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </footer>
        

        
      </article>
     );
}

export default Event;
