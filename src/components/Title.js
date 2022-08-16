import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <div style={{color:'skyblue'}}>
      <h1 >{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Title;
