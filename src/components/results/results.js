import React from 'react';
import ReactJson from 'react-json-view';
import { Spinner } from 'react-spinners-css';
import { If, Then, Else } from 'react-if';
import './results.scss';

const Results = (props) => {
  return(
  <If condition={props.show === true}>
    <Then>
      <div className="results">
        <div className="spinner">
          <Spinner color="#45A29E" />
        </div>
      </div>
    </Then>
    <Else>
      <div className="results">
        <>
        <h2>Headers</h2>
        <ReactJson src={props.headers} />
        <h2>Results</h2>
        <ReactJson src={props.results} />
        </>
      </div>
    </Else>
  </If>
  )
}

export default Results;