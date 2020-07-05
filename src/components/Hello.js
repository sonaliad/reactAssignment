import React from 'react';

const hello = (pros) => {
  return (
    <div><input value={pros.name} onChange={pros.onChangeName}/></div>
  );
}

export default hello;