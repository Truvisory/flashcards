import React from 'react';

const Card = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="card mx-auto">
          <div className="card-body">
            <h2 className="card-title">Description</h2>
            <p className="card-text">creates a new array with the results of calling a provided function on every element in the calling array.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card