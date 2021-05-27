import React from 'react';
import { If, Then } from 'react-if';
import './history.scss';

export default class History extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchHistory: this.props.history
    }
  }

  // (e, url, method, body) 
  handleClick = e => {
    e.preventDefault();
    let idx = e.target.name;
    let search = this.state.searchHistory[idx];
    this.props.handleSubmit(e, search.url, search.method, search.body);
  }

  render () {
    return(
      <div className='history'>
        <h2 className='historyTitle'>History</h2>
        {this.state.searchHistory.map((search, idx) => {
          return (
            <>
            <If condition={search.method==='GET'}>
              <Then>
                <p>
                  <button id="searchButton" type="submit" name={idx} key={idx} onClick={this.handleClick}>GET</button>
                  {search.url}
                </p>
              </Then>
            </If>
            <If condition={search.method==='PUT'}>
              <Then>
                <p>
                  <button id="searchButton" type="submit" name={idx} key={idx} onClick={this.handleClick}>PUT</button>
                  {search.url}
                </p>
              </Then>
            </If>
            <If condition={search.method==='POST'}>
              <Then>
                <p>
                  <button id="searchButton" type="submit" name={idx} key={idx} onClick={this.handleClick}>POST</button>
                  {search.url}
                </p>
              </Then>
            </If>
            <If condition={search.method==='DELETE'}>
              <Then>
                <p>
                  <button id="searchButton" type="submit" name={idx} key={idx} onClick={this.handleClick}>DELETE</button>
                  {search.url}
                </p>
              </Then>
            </If>
            </>
          )
        })
      }
      </div>
    )
  }
}