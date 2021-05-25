import React from 'react';
import './form.scss';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      url: '',
      method: 'GET'
    }
  }

  handleChange = e => {
    let url = e.target.value;
    this.setState({ url });
  }

  handleGet = e => {
    e.preventDefault();
    this.setState({method: 'GET'})
  }

  handlePost = e => {
    e.preventDefault();
    this.setState({method: 'POST'})
    // TO DO: render input field for body
  }

  handlePut = e => {
    e.preventDefault();
    this.setState({method: 'PUT'})
    // TO DO: render input field for body
  }

  handleDelete = e => {
    e.preventDefault();
    this.setState({method: 'DELETE'})
  }


  render() {
    
    return (
      <div>
        <div className="input">
          <form onSubmit={e => this.props.handleSubmit(e, this.state.url, this.state.method)}>
            <input type="text" onChange={this.handleChange} />
            <button>GO!</button>
          </form>
          <br></br>
          <div>
            <button className="crud" onClick={this.handleGet}>GET</button>
            <button className="crud" onClick={this.handlePost}>POST</button>
            <button className="crud" onClick={this.handlePut}>PUT</button>
            <button className="crud" onClick={this.handleDelete}>DELETE</button>
          </div>
        </div>
        <div className="request">
          <p className="entered">
            {this.state.method}
            {'  '}
            {this.state.url}
          </p>
        </div>
      </div>
    )
  }
}

export default Form;