import React from 'react';

// XXX/TODO: Style this.

const ErrorDisplay = ({ last_error }) => {
  if (!last_error) {
    return null;
  }

  return <h1>Error: {last_error}</h1>
};

export default ErrorDisplay;
