import React from 'react';
import './App.scss'
import Form from '../Form'
import Results from '../Results'
import Header from '../Header'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      results: null,
      type: null,
      expansionDepth: 2
      // ... more state? 
    }
  }

  handleResultsFromForm = (results, type) => {
    this.setState({
      results, type
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form handler={this.handleResultsFromForm} />
        <Results
          data={this.state.results}
          type={this.state.type}
          expansionDepth={this.state.expansionDepth} />
      </div>
    );
  }

}

export default App;
