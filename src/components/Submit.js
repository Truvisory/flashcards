import React from 'react';

const Submit = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        {/* <p className="bg-primary text-white">Submit a new Flashcard!</p> */}
        <button type="button" className="btn btn-primary mt-4 btn-block" data-toggle="modal" data-target="#exampleModal" onClick={props.create}>
          Create Flashcard
        </button>
        <form onSubmit={props.submitNew} className={props.display}>
          <div className="form-group">
            <input id="name" type="text" className="form-control" placeholder="Name"></input>
          </div>
          <div className="form-group">
            <input id="description" type="text" className="form-control" placeholder="Description"></input>
          </div>
          <div className="form-group">
            <input id="example" type="text" className="form-control" placeholder="Example"></input>
          </div>
          <div className="form-group">
            <input id="link" type="text" className="form-control" placeholder="Link"></input>
          </div>
          <button className="btn btn-primary" type="submit">Submit new method</button>
        </form>
      </div>
    </div>
  )
}

export default Submit