import React from 'react';

const Input = (props) => {
  return (
    <form
      className="row justify-content-center mt-4"
      onSubmit={props.check}>
      <div className="input-group col-lg-6">
        <input type="text" className="form-control" placeholder="Guess the Method" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Check</button>
        </div>
      </div>
    </form>
  )
}

export default Input