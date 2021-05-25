import React from 'react';
import './form.scss';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      url: '',
      method: '',
      show: false
    }
  }

  handleChange = e => {
    let url = e.target.value;
    this.setState({ url });
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ show: true });
  }

  handleGet = e => {
    e.preventDefault();
    this.setState({method: 'GET'})
  }

  handlePost = e => {
    e.preventDefault();
    this.setState({method: 'POST'})
  }

  handlePut = e => {
    e.preventDefault();
    this.setState({method: 'PUT'})
  }

  handleDelete = e => {
    e.preventDefault();
    this.setState({method: 'DELETE'})
  }


  render() {
    
    return (
      <div>
        <div className="input">
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.handleClick}>GO!</button>
          <br></br>
          <div>
            <button className="crud" onClick={this.handleGet}>GET</button>
            <button className="crud" onClick={this.handlePost}>POST</button>
            <button className="crud" onClick={this.handlePut}>PUT</button>
            <button className="crud" onClick={this.handleDelete}>DELETE</button>
          </div>
        </div>
        <div className="results">
          {this.state.show &&
          <p className="entered">
            {this.state.method}
            {'  '}
            {this.state.url}
          </p>
          }
        </div>
      </div>
    )
  }
}

export default Form;