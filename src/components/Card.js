import React from 'react';

const Card = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="card mx-auto">
          <div className="card-body">
            <h2 className="card-title">Description #{props.state.methods[props.state.index].id}</h2>
            <p className="card-text">{props.state.methods[props.state.index].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card