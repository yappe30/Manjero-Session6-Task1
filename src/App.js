import React, { Component } from 'react';
import Count from "./Count";
import CountTwo from "./CountTwo"


const App = () => {
  return (
    <>
      <div style={{ marginLeft: '100px' }}>
        <div>
          <h2>React Redux Task</h2>
          <br></br>
          <h4>Class Base Component</h4>
          <Count />
        </div>
        <div>
          <br></br>
          <h4>Function Base Component</h4>
          <CountTwo />
        </div>
      </div>
    </>
  );
};

export default App;