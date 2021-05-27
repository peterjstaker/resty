import React from 'react';
import axios from 'axios';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Form from './components/form/Form.js';
import Results from './components/results/results.js';
import History from './components/history/history.js';
import { If, Then } from 'react-if';
import './design/design.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      resultsArray: [],
      headers: {},
      results: {},
      show: false,
      history: []
    }
  }

  handleSubmit = async (e, url, method, body) => {
    e.preventDefault();
    this.setState({show: true})
    try{
      let count;
      let data;
      let results;
      let headers;
      switch(method) {
        case 'PUT':
          results = await axios.put(url, {body});
          headers = results.headers;
          data = results.data;
          count = data.count;
          break;
        case 'POST':
          results = await axios.post(url, {body});
          headers = results.headers;
          data = results.data;
          count = data.count;
          break;
        case 'DELETE':
          results = await axios.delete(url);
          headers = results.headers;
          data = results.data;
          count = data.count;
          break;    
        default:
          results = await axios.get(url);
          headers = results.headers;
          data = results.data;
          count = data.count;
      }
      console.log('__SW_DATA___', data, results);
      this.setState({results, headers, count, resultsArray: data.results, show: false});
      console.log('STATE', this.state);
      let search = {url, method, body};
      if(!this.state.history.includes(search)){
        let tempHistory = this.state.history;
        tempHistory.push(search);
        this.setState({ history: tempHistory });
      }
      console.log('HISTORY', this.state.history);
    } catch(err) {
      console.log(err.message);
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Form handleSubmit={this.handleSubmit} show={this.state.show}/>
        <If condition={this.state.history.length > 0}>
          <Then>
            <History history={this.state.history} handleSubmit={this.handleSubmit}/>
          </Then>
        </If>
        <Results results={this.state.results} headers={this.state.headers} count={this.state.count} resultsArray={this.state.resultsArray} show={this.state.show}/>
        <Footer />
      </div>
    );
  }
}

export default App;
