import React from 'react';

const Difficulty = () => {
  return (
    <div className="row justify-content-center mt-4">
      <div className="btn-group justify-content-center" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-success">Easy</button>
        <button type="button" className="btn btn-warning text-white">Medium</button>
        <button type="button" className="btn btn-danger">Hard</button>
      </div>  
    </div>
  )
}

export default Difficulty