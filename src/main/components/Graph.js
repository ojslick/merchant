import React from 'react';

import GraphLarge from './Images/Graph.jpg';

import SelectInput from './SelectInput';

import './Graph.css';

const Graph = () => {
  return (
    <div className="graph-container">
      <div className="graph-date-container">
        <div className="graph-date">
          <p className="graph-date-today">Today: 5, Aug, 2018</p>

          <div className="graph-date-select-flex">
            <SelectInput options={['1 Jan - 1 Jun']} isDisabled={true} />

            <div className="graph-date-button">
              <button className="graph-date-button-left" disabled>
                {'<'}
              </button>
              <button className="graph-date-button-right" disabled>
                {'>'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="graph-days-container">
        <div className="graph-days-flex">
          <div className="graph-days-day">
            <p className="graph-days-day-text">Jan</p>
          </div>
          <div className="graph-days-day">
            <p className="graph-days-day-text">Feb</p>
          </div>
          <div className="graph-days-day">
            <p className="graph-days-day-text">Mar</p>
          </div>
          <div className="graph-days-day">
            <p className="graph-days-day-text">Apr</p>
          </div>
          <div className="graph-days-day">
            <p className="graph-days-day-text">May</p>
          </div>
          <div className="graph-days-day" style={{ border: 0 }}>
            <p className="graph-days-day-text">Jun</p>
          </div>
        </div>
        <img src={GraphLarge} alt="graph" className="graph-image" />
      </div>
    </div>
  );
};

export default Graph;
