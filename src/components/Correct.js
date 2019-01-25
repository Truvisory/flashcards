import React from 'react';

const Correct = (props) => {
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-lg-6">
        <div className="card mx-auto">
          <div className="card-body">
            <h2 className="card-title">That's Right!</h2>
            <a 
              className="btn btn-primary"
              href={props.state.methods[props.state.correctIndex].link}
              role="button"
              target="_blank"
              rel="noopener noreferrer">Learn more about {props.state.methods[props.state.correctIndex].name}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Correct