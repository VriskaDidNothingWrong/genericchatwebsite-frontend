import React from 'react';

const complain_style = {
  fontSize: "6px"
};

const NoMatchComponent = ({ location }) => {
  console.log(location);
  return <section>
    <h2>404 Not Found</h2>
    <p>The URL <strong>{location.pathname}</strong> could not be found.</p>
    <p>Maybe look for another URL? <sup style={complain_style}>or complain to us on Discord?</sup></p>
  </section>
};

export default NoMatchComponent;
