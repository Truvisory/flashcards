import React from 'react';

const Form = (props) => {
  return (
  <form onSubmit={props.submitNew} className="mt-4">
    <div className="form-group">
      <input id="name" type="text" className="form-control" placeholder="Name" required></input>
    </div>
    <div className="form-group">
        <input id="description" type="text" className="form-control" placeholder="Description" required></input>
    </div>
    <div className="form-group">
      <input id="example" type="text" className="form-control" placeholder="Example" required></input>
    </div>
    <div className="form-group">
      <input id="link" type="text" className="form-control" placeholder="Link" required></input>
    </div>
    <button className="btn btn-primary" type="submit">Submit new method</button>
  </form>
  )
}

export default Form