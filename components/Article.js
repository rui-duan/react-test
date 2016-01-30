import React, { Component, PropTypes } from 'react'

export default class Article extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.title}
        </h2>
        <img src={this.props.image} />
      </div>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
}