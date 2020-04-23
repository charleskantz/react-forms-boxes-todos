import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm'
import Box from './Box';
import { v4 as uuid } from 'uuid';

function BoxList() {
  // create boxes state
  const [boxes, setBoxes] = useState([]);

  // remove a box from state when its button is pressed
  const removeBox = id => {
    setBoxes(boxes.filter(box => box.id !== id));
  };

  // add a new box to state
  const addBox = box => {
    let newBox = { ...box, id: uuid() }
    setBoxes(boxes => [ ...boxes, newBox ]);
  };

  // render all boxes in state
  const renderBoxes = () => {
    return (
      <div>
        {boxes.map(box => (
          <Box
            backgroundColor={box.color}
            width={box.width}
            height={box.height}
            key={box.id}
            id={box.id}
            handleClose={removeBox}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;