import React from 'react';

const Update = (props) => {
  return (
    <form
      className="row mt-2"
      onSubmit={props.update}>
      <div className="input-group col-lg-12 ">
        <input type="text" className="form-control border-success" placeholder="Update Description" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-success" type="submit" id="button-addon2">Submit</button>
        </div>
      </div>
    </form>
  )
}

export default Update