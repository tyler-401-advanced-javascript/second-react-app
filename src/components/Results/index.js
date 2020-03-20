import './Results.scss'
import React from 'react'
import { ContentType } from '../Form'
import ReactJson from 'react-json-view'

class Results extends React.Component {

  renderDataAsJson() {
    return <ReactJson src={this.props.data} collapsed={this.props.expansionDepth} />
  }
  renderDataAsText() {
    return <pre>{this.props.data}</pre>
  }
  renderDataAsHtml() {
    return <iframe title="data">{this.props.data}</iframe>
  }
  renderDataAsNull() {
    return 'Unknown Data Type'
  }

  renderOnType = () => {
    switch (this.props.type) {
      case ContentType.JSON:
        return this.renderDataAsJson();
      case ContentType.HTML:
        return this.renderDataAsHtml();
      case ContentType.TEXT:
        return this.renderDataAsText();
      default:
        return this.renderDataAsNull();
    }
  }

  render() {
    return (

      <div id="Results">
        {this.renderOnType()}
      </div>
    )
  }

}

export default Results