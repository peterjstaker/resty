import React from 'react';
import './help.scss';

class Help extends React.Component {
  render(){
    return(
      <div className="help">
          <h2>Help</h2>
          <p>GET: Enter the API endpoint to get all. If you wish to get one by Id, append the id parameter to the URL.</p>
          <p>POST: Enter the API endpoint and a request body in the format specified by the API being used.</p>
          <p>PUT: Enter the API endpoint with the Id appended as a parameter and enter the content to be updated in the request body in the format specified by the API being used.</p>
          <p>DELETE: Enter the API endpoint with the record Id appended as a parameter.</p>
      </div>
    );
  }
};

export default Help;