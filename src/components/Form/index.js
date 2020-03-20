import React from 'react'
import axios from 'axios'
import './Form.scss'

export const ContentType = {
  JSON: 'JSON',
  TEXT: 'TEXT',
  HTML: 'HTML'
}

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
    const response = await axios({
      url: URL,
      method: 'GET'
    })

    let contentType = ContentType.TEXT

    if (response.headers['content-type']) {
      switch (response.headers['content-type'].toLowerCase()) {
        case 'application/json': 
          contentType = ContentType.JSON;
          break;
        case 'text/html': 
          contentType = ContentType.HTML;
          break;
      }
    }

    console.log(response)
    
    this.props.handler(response.data, contentType);
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

        <input type="submit" value="Go!" id="submitButton" />
      </form>
    )
  }
}

export default Form