import React from 'react';
import './App.scss'
import Form from '../Form'
import Results from '../Results'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      results: [],
      // ... more state? 
    }
  }
 
  handleResultsFromForm = (results) => {
    this.setState({
      results: results
    })
  }

  render() {
    return (
      <div className="App">
        <Form handler={this.handleResultsFromForm}/>
        <Results data={this.state.results}/>
      </div>
    );
  }

}

export default App;
