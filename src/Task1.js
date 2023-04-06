import React, { useState } from 'react';

function Task1() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const inputStyle = {
    border: value.length >= 4 && value.length <= 9 ? '2px solid green' : '2px solid red',
  };

  return (
    <input type="text" value={value} onChange={handleChange} style={inputStyle} />
  );
}

export default Task1;
