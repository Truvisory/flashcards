import React from 'react';
const Progress = (props) => {
  return (
    <div className="row justify-content-center mt-0">
      <div className="col-lg-12">
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: `${props.corNum}%`}} aria-valuenow={props.corNum} aria-valuemin="0" aria-valuemax="100">{props.state.correctNumber} Correct</div>
        </div>
      </div>
    </div>
  )
}

export default Progress