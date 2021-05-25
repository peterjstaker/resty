import React from 'react';
import axios from 'axios';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Form from './components/form/Form.js';
import Results from './components/results/results.js';
import './design/design.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      resultsArray: [],
      headers: {},
      results: {},
      show: false
    }
  }

  handleSubmit = async (e, url, method) => {
    e.preventDefault();
    try{
      let count;
      let data;
      let results;
      let headers;
      switch(method) {
        case 'PUT':
          // TODO - put method w/ body
          break;
        case 'POST':
          // TODO - post method w/body
          break;
        case 'DELETE':
          // TODO - delete method
          break;    
        default:
          results = await axios.get(`${url}`);
          headers = results.headers;
          data = results.data;
          count = data.count;
      }
      console.log('__SW_DATA___', data, results);
      this.setState({results, headers, count, resultsArray: data.results, show: true});
    } catch(err) {
      console.log(err.message);
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Form handleSubmit={this.handleSubmit} show={this.state.show}/>
        <Results results={this.state.results} headers={this.state.headers} count={this.state.count} resultsArray={this.state.resultsArray}/>
        <Footer />
      </div>
    );
  }
}

export default App;
