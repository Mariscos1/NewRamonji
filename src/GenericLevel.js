import React from 'react';

const GenericLevel = (props) => {

  return (
    <div>
      <p id = "levelTitle">This is Level {props.levelNumber}</p>
    </div>
  );
}

export default GenericLevel;
