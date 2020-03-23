import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header'
import { If } from '../conditionals'
// import { Link } from 'react-router-dom'
import './History.scss'
import '../App/App.scss'


class History extends React.Component {
  constructor(props) {
    super();
    this.state = {
      detailView: null
    }
  }

  searchAgain = (search) => {
    this.props.fillSearch(search);

    //redirect the person.
    this.props.history.push('/');
  }


  showDetails = (index) => {
    console.log(index)
    this.setState({
      detailView: index
    })

  }

  render() {
    return (
      <div id='History' className="App">
        <Header />
        <ul>
          {this.props.searchHistory.map((search, i) => {
            return (
              <li
                className="historyResult"
                key={i}
                onClick={() => this.showDetails(i)}
              >URL: {search.url}, Method: {search.method}
                <If condition={this.state.detailView === i}>
                  <ul>
                    <li className="historyDetails">
                      details go here! <br />
                      {search.url} <br />
                      {search.method}
                      <button
                        onClick={() => this.searchAgain({ url: search.url, method: search.method })}
                      >Make Request Again</button>
                    </li>
                  </ul>
                </If>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }


}

export default withRouter(History);