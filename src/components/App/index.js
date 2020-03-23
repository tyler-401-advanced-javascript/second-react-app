import React from 'react';
import './App.scss'
import Form, { ContentType } from '../Form'
import Results from '../Results'
import Header from '../Header'
import { If, Unless } from '../conditionals';
import axios from 'axios'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      results: null,
      type: null,
      resultCount: null,
      expansionDepth: 2,
      loading: false
      // ... more state? 
    }
  }

  getApiData = async (url, method) => {
    this.setState({ loading: true })
    const response = await axios({
      url, method
    })
    this.setState({ loading: false })

    let contentType = ContentType.TEXT

    if (response.headers['content-type']) {
      const cT = response.headers['content-type'].toLowerCase().split(';')[0]
      console.log(cT);
      // eslint-disable-next-line default-case
      switch (cT) {
        case 'application/json':
          contentType = ContentType.JSON;
          break;
        case 'text/html':
          contentType = ContentType.HTML;
          break;
      }
    }

    //update the history
    this.props.updateHistory(url, method, response.data)

    this.handleResultsFromForm(response.data, contentType);

  }

  handleResultsFromForm = (results, type) => {
    this.setState({
      results, type, resultCount: results.count
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form
          handler={this.handleResultsFromForm}

          //send the prefilled seach down the heirarchy. 
          preFilledSearch={this.props.preFilledSearch}
          getApiData={this.getApiData} />
        <If condition={this.state.results !== null}>
          Number of results: <div id="count" >{this.state.resultCount}</div>
          <Results
            data={this.state.results}
            type={this.state.type}
            expansionDepth={this.state.expansionDepth} />
        </If>
        <Unless condition={this.state.results !== null}>
          <div>{this.state.loading ? 'Loading...' : 'There is no data!'}</div>
        </Unless>
      </div>
    );
  }

}

export default App;
