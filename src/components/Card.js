import React from "react";

// export default function Card(props) {
export default function Card({ id, name, email }) {      //this is called destructuring
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* <img alt='Robots' src={`https://robohash.org/${props.id}?100×100`} /> */}
      <img alt="Robots" src={`https://robohash.org/${id}/100*100`} />
      <div>
        {/* <h2>{props.name}</h2> */}
        {/* <p>{props.email}</p>  */}
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
