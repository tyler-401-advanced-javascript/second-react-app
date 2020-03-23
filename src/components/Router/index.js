import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App'
import About from '../About'
import Contact from '../Contact'
import Navbar from '../Navbar'
import History from '../History'


class Router extends React.Component {
  constructor() {
    super()
    this.state = {
      preFilledSearch: null,
      searchNum: 0,
      history: []
    }
  }

  fillSearch = (s) => {
    this.setState((prevState) => ({
      preFilledSearch: s,
      searchNum: prevState.searchNum + 1
    }))
  }

  updateHistory = (url, method, data) => {
    this.setState({
      history: [...this.state.history, {url, method, data}]
    })
  }

  render() {
    return (
      <BrowserRouter>

        <Navbar />
        <Switch>
          <Route path="/" exact>
            <App 
            preFilledSearch={this.state.preFilledSearch} 
            key={this.state.searchNum} 
            updateHistory={this.updateHistory}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/history">
            <History 
            fillSearch={this.fillSearch}
            searchHistory={this.state.history}/>
          </Route>
        </Switch>

      </BrowserRouter>
    )
  }
}

export default Router;