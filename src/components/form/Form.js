import React from 'react';
import './form.scss';
import { If, Then } from 'react-if';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      url: '',
      body: '',
      method: 'GET'
    }
  }

  handleChange = e => {
    let url = e.target.value;
    this.setState({ url });
  }

  handleBody = e => {
    let body = e.target.value;
    this.setState({ body });
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
          <form onSubmit={e => this.props.handleSubmit(e, this.state.url, this.state.method, this.state.body)}>
            <label for="url">URL</label>
            <input type="text" id="url" onChange={this.handleChange} />
            <br></br>
            <If condition={this.state.method === 'PUT' || this.state.method === 'POST'}>
              <Then>
                <label for="body">Body</label>
                <input type="text" id="body" className="body" onChange={this.handleBody} />
                <br></br>
              </Then>
            </If>
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