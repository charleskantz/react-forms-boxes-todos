import React from 'react';

function Box({backgroundColor, width, height, handleClose, id}) {
  let styles = {
    backgroundColor, 
    width,
    height,
    display: 'inline-block'
  }

  // pass id to higher function for reference
  const remove = () => handleClose(id);

  return (
    <div>
      <div style={styles}></div>
      <button onClick={remove}>X</button>
    </div>

  );
}

export default Box;