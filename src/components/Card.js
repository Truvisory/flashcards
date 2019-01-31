import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Update from './Update'

const Card = (props) => {
  return (
    <Router>
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="card mx-auto">
          <div className="card-body">
            <h2 className="card-title">Description</h2>
            <p className="card-text">{props.state.methods[props.state.index].description}</p>
            <div className="row">
              <div className="col-12">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={props.decrement}>⇦</button>
                    <button type="submit" className="btn btn-secondary mr-3" onClick={props.increment}>⇨</button>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <Link to="/update/" className="btn-group">
                    <button type="button" className="btn btn-outline-success">Update Card</button>
                  </Link>
                    <button type="submit" className="btn btn-sm btn-outline-danger" onClick={props.delete}>Delete Card</button>
                </div>
              </div>
            </div>
            <Route 
              path="/update/"
              render={() => 
                <Update
                  update={props.update}
                  state={props.state}
                  textInput={props.textInput}/>} 
                />
          </div>
        </div>
      </div>
    </div>
    </Router>
  )
}

export default Card