import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './Form'

const Submit = (props) => {
  return (
    <Router>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Link to="/form/" >
            <button 
              type="button"
              className="btn btn-primary mt-4 btn-block" >Create Flashcard
            </button>
          </Link>
          <Route 
            path="/form/"
            render={() => 
            <Form 
              submitNew={props.submitNew}/>} />  
        </div>
      </div>
    </Router>
  )
}

export default Submit