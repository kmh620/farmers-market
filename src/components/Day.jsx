import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  return (
    <div>
      <style global jsx>{`
        div {
          background-color: lightsteelblue;
        }
      `}</style>
    <h3><em>{props.day}</em></h3>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
      <hr/>
    </div>
  );
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Day;
