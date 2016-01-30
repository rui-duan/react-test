import React, { Component, PropTypes } from 'react'

export default class MoreButton extends Component {
  render(){
    return (
      <input type="button" onClick={this.props.onButtonClicked} value="More"/>
    )
  }
}

MoreButton.propTypes = {
  onButtonClicked: PropTypes.func
}