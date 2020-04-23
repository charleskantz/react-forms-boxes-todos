import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const INITIAL_STATE = {
    color: "",
    width: "",
    height: ""
  };
  const [ formData, setFormData ]  = useState(INITIAL_STATE);

  const handleSumbitch = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSumbitch}>
      <label htmlFor="width">Box Width</label><br />
      <input
        name="width"
        id="width"
        value={formData.width}
        onChange={handleChange}
      /><br />
      <label htmlFor="height">Box Height</label><br />
      <input
        name="height"
        id="height"
        value={formData.height}
        onChange={handleChange}
      /><br />
      <label htmlFor="color">Box Color</label><br />
      <input
      name="color"
      id="color"
      value={formData.color}
      onChange={handleChange}
      /><br />
      <button>Submit</button>
    </form>
  )
}

export default NewBoxForm;