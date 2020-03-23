import React from 'react'
import './Form.scss'

export const ContentType = {
  JSON: 'JSON',
  TEXT: 'TEXT',
  HTML: 'HTML'
}

class Form extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      url: props.preFilledSearch ? props.preFilledSearch.url : '',
      selectedMethod: props.preFilledSearch ? props.preFilledSearch.method : ''
    }
    // if (props.preFilledSearch) {
    //   this.handleSubmit();
    // }
  }

  preFillForm = () => {
    // if this.props has preFilledSearch on it, 
    // change the state accordingly
    if (this.props.preFilledSeach == null) return

    const { url, method } = this.props.preFilledSearch
    this.setState({
      url,
      selectedMethod: method
    })
  }

  handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!this.state.url) {
      alert('URL is required')
      return
    }
    
    this.props.getApiData(this.state.url, this.state.method)
  }

  handleChange = (e) => {
    this.setState({
      url: e.target.value
    })
  }


  render() {

    // select the default method based on state.
    //prefill the form as needed. 

    this.preFillForm();

    return (
      <form id="Form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="formInput"
          placeholder="Find Stuff..."
          value={this.state.url}
          onChange={this.handleChange}></input>

        <select name="method" id="methodMenu" onChange={(ev) => { this.setState({ selectedMethod: ev.target.value })}} value={this.state.selectedMethod}>
          <option value="">Select Method</option>
          <option value="GET" >GET</option>
          <option value="POST" >POST</option>
          <option value="PUT" >PUT</option>
          <option value="DELETE" >DELETE</option>
        </select>
        <input type="submit" value="Go!" id="submitButton" />
      </form>
    )
  }
}

export default Form