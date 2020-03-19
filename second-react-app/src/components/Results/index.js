import './Results.scss'
import React from 'react'

class Results extends React.Component {

  render() {
    return (
      <div id="Results">
        <ul
          id='results'
        >{this.props.data.map((point, i) => {
          return (
            <li key={i}> {point.name}, Mass: {point.mass}</li>
          )
        })}

        </ul>
      </div>
    )
  }

}

export default Results