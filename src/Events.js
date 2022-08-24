import Event from "./Event";

function Events({events, removeTour}) {
    return ( 
        <section>
        <div className="title">
          <h2>Kenyas no. one  Events Solution</h2>
          <div className="underline"></div>
        </div>
        <div>
          {events.map((event) => {
            // console.log(event);
            return <Event key={event.id}  {...event}  removeTour={removeTour}   />;
          })}
        </div>
      </section>
    );
}

export default Events;