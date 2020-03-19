import React from 'react'
import './Form.scss'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      url: null,
    }
  }

  handleSubmit = async (e) => {
    // queries the api
    e.preventDefault();

    const URL = this.state.url
    const raw = await fetch(URL, {
      method: 'GET',
    })

    const data = await raw.json();

    //send the result into a call to props.handleResultsFromForm
    console.log(data.results);
    this.props.handler(data.results);
  }

  handleChange = (e) => {
    this.setState({
      url: e.target.value
    })
  }

  render() {
    return (
      <form id="Form" onSubmit={this.handleSubmit}>
        <input type="text" id="formInput" placeholder="Find Stuff..." onChange={this.handleChange}></input>

        <label>GET
          <input type='radio' name='method2' value="GET" />
        </label>
        <label>POST
          <input type='radio' name='method2' value="POST" />
        </label>
        <label>PUT
          <input type='radio' name='method2' value="PUT" />
        </label>
        <label>DELETE
          <input type='radio' name='method2' value="DELETE" />
        </label>

        <input type="submit" value="Go!" />
      </form>
    )
  }
}

export default Form