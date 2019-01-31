import React from 'react';

const Update = (props) => {
  return (
    <form
      className="row mb-2"
      onSubmit={props.update}>
      <div className="input-group col-lg-12">
        <textarea
          type="text"
          className="form-control border-success"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={props.state.methods[props.state.index].description}
          onChange={props.textInput}/>
        <div className="input-group-append">
          <button
            className="btn btn-success"
            type="submit"
            id="button-addon2">Update</button>
        </div>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={props.updateToggle}>X</button>
        </div>
      </div>
    </form>
  )
}

export default Update